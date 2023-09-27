(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Variables Extension must be run Unsandboxed!");
  }

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const getStageId = () => vm.runtime._stageTarget.id;
  const getSpriteId = () => vm.runtime._editingTarget.id;

  const variables = {};
  variables[getStageId()] = { "my variable": 0 };

  const getVariableBlocks = (target_id) => {
    return Object.keys(variables[target_id] || {})
      .sort()
      .map((variable) => {
        return {
          hideFromPalette: target_id === getStageId() ? false : () => target_id === getStageId(),
          opcode: "getVariable_" + target_id + "_" + variable,
          blockType: Scratch.BlockType.REPORTER,
          text: variable,
          target: target_id,
        };
      });
  };

  class Extension {
    getInfo() {
      return {
        id: "truefantomvariables",
        name: "Variables",

        blocks: [
          {
            hideFromPalette: false,
            opcode: "setVariable",
            blockType: Scratch.BlockType.COMMAND,
            text: "set [NAME] to [VALUE]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "VARIABLES",
              },
              VALUE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "0",
              },
            },
          },
          {
            hideFromPalette: false,
            opcode: "changeVariable",
            blockType: Scratch.BlockType.COMMAND,
            text: "change [NAME] by [VALUE]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                menu: "VARIABLES",
              },
              VALUE: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1,
              },
            },
          },
          {
            func: "createVariable",
            blockType: Scratch.BlockType.BUTTON,
            text: "Make a Variable",
          },
          {
            hideFromPalette: false,
            func: "deleteVariable",
            blockType: Scratch.BlockType.BUTTON,
            text: "Delete a Variable",
          },
          {
            hideFromPalette: false,
            blockType: Scratch.BlockType.LABEL,
            text: "For all sprites:",
          },
          ...getVariableBlocks(getStageId),
          {
            hideFromPalette: false,
            blockType: Scratch.BlockType.LABEL,
            text: "For this sprite only:",
          },
          ...getVariableBlocks(getSpriteId),
        ],
        menus: {
          VARIABLES: {
            acceptReporters: false,
            items: "_getAllVariables",
          },
        },
      };
    }

    setVariable(args) {
      if (Object.keys(variables).includes(cast.toString(args.NAME))) {
        variables[args.NAME] = args.VALUE;
      }
    }
    changeVariable(args) {
      if (Object.keys(variables).includes(cast.toString(args.NAME))) {
        variables[args.NAME] =
          cast.toNumber(variables[args.NAME]) + cast.toNumber(args.VALUE);
      }
    }

    createVariable() {
      const name = prompt("New variable name:", "");
      if (
        !Object.keys(variables).includes(name) &&
        name !== "" &&
        name !== null
      ) {
        variables[name] = 0;
        Extension.prototype["getVariable_" + name] = (args, util, info) => {
          return variables[info.text];
        };
        vm.extensionManager.refreshBlocks();
      }
    }
    deleteVariable() {
      const name = prompt("Deleted variable name:", "");
      if (
        Object.keys(variables).includes(name) &&
        name !== "" &&
        name !== null
      ) {
        let cant_delete = false;
        const targets = vm.runtime.targets;
        for (const target_index in targets) {
          const target = targets[target_index];
          const blocks = target.blocks._blocks;
          for (const block_index in blocks) {
            const block = blocks[block_index];
            if (
              block.opcode === "truefantomvariables_setVariable" ||
              block.opcode === "truefantomvariables_changeVariable"
            ) {
              if (block.fields.NAME.value === name) {
                cant_delete = true;
              }
            } else if (
              block.opcode.slice(0, 32) === "truefantomvariables_getVariable_"
            ) {
              if (block.opcode.slice(32) === name) {
                cant_delete = true;
              }
            }
          }
        }
        if (cant_delete) {
          alert("То delete а variable, first remove all uses of it");
          return;
        }
        delete variables[name];
        delete Extension.prototype["getVariable_" + name];
        vm.extensionManager.refreshBlocks();
      }
    }

    _getAllVariables() {
      const target_id = vm.runtime._editingTarget.id;
      return Object.keys(variables).sort();
    }
  }

  for (const target_id in variables) {
    for (const variable in variables[target_id]) {
      Extension.prototype["getVariable_" + target_id + "_" + variable] = (args, util, info) => {
        return variables[info.target][info.text];
      };
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
