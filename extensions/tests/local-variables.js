(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Variables Extension must be run Unsandboxed!");
  }

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const variables = { "my variable": 0 };

  const getVariableBlocks = () => {
    return Object.keys(variables)
      .sort()
      .map((variable) => {
        return {
          opcode: "getVariable_" + variable,
          blockType: Scratch.BlockType.REPORTER,
          text: variable,
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
            hideFromPalette: Object.keys(variables).length <= 0,
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
            hideFromPalette: Object.keys(variables).length <= 0,
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
            hideFromPalette: Object.keys(variables).length <= 0,
            func: "deleteVariable",
            blockType: Scratch.BlockType.BUTTON,
            text: "Delete a Variable",
          },
          {
            hideFromPalette: Object.keys(variables).length <= 0,
            blockType: Scratch.BlockType.LABEL,
            text: "For all sprites:",
          },
          ...getVariableBlocks(),
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
      return Object.keys(variables).sort();
    }
  }

  for (const variable in variables) {
    Extension.prototype["getVariable_" + variable] = (args, util, info) => {
      return variables[info.text];
    };
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
