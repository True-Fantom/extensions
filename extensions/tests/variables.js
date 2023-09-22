(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Variables Extension must be run Unsandboxed!");
  }

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const variables = {global: {"my variable": 0}, local: {}};

  const getVariableBlocks = (type) => {
    if (type = "global") {
      return Object.keys(variables.global).map((variable) => {
        return {
          opcode: "global_getVariable_" + variable,
          blockType: Scratch.BlockType.REPORTER,
          text: variable,
        }; 
      });
    }
    else if (type = "local") {
      return Object.keys(variables.local).map((sprite) => {
        return {
          filter: [sprite],
          opcode: sprite + "_getVariable_" + sprite.variable,
          blockType: Scratch.BlockType.REPORTER,
          text: sprite.variable,
        }; 
      });
    }
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
          {
            hideFromPalette: Object.keys(variables).length <= 0,
            blockType: Scratch.BlockType.LABEL,
            text: "For this sprite only:",
          },
        ],
        menus: {
          VARIABLES: {
            acceptReporters: false,
            items:
              Object.keys(variables).length > 0 ? Object.keys(variables) : [""],
          },
        },
      };
    }

    setVariable(args) {
      variables[args.NAME] = args.VALUE;
    }
    changeVariable(args) {
      variables[args.NAME] =
        cast.toNumber(variables[args.NAME]) + cast.toNumber(args.VALUE);
    }

    createVariable() {
      const name = prompt("New variable name:", "");
      const local = confirm("For this sprite only");
      if (!Object.keys(variables).includes(name) && name !== "" && name !== null) {
        if (local) {
          const target = vm.runtime._editingTarget;
          console.log(target);
        }
        variables[name] = 0;
        Extension.prototype["global_getVariable_" + name] = (args, util, info) => {
          return variables[info.text];
        };
        vm.extensionManager.refreshBlocks();
      }
    }
    deleteVariable() {
      const name = prompt("Deleted variable name:", "");
      if (Object.keys(variables).includes(name) && name !== "" && name !== null) {
        delete variables[name];
        delete Extension.prototype["global_getVariable_" + name];
        vm.extensionManager.refreshBlocks();
      }
    }
  }

  for (const variable in variables) {
    Extension.prototype["global_getVariable_" + variable] = (
      args,
      util,
      info,
    ) => {
      return variables[info.text];
    };
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
