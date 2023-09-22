(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Variables Extension must be run Unsandboxed!");
  }

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const variables = {"my variable": 0};

  const getVariableBlocks = () => {
    return Object.keys(variables).map((variable) => {
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

    createVariable(args, util) {
      const name = prompt("New variable name:", "");
      const local = confirm("For this sprite only");
      if (!Object.keys(variables).includes(name) && name !== "" && name !== null) {
        if (local) {
          const target = util.target;
          console.log(target);
        }
        variables[name] = 0;
        Extension.prototype["getVariable_" + name] = (args, util, info) => {
          return variables[info.text];
        };
        vm.extensionManager.refreshBlocks();
      }
    }
    deleteVariable() {
      const name = prompt("Deleted variable name:", "");
      if (Object.keys(variables).includes(name) && name !== "" && name !== null) {
        delete variables[name];
        delete Extension.prototype["getVariable_" + name];
        vm.extensionManager.refreshBlocks();
      }
    }
  }

  for (const variable in variables) {
    Extension.prototype["getVariable_" + variable] = (
      args,
      util,
      info,
    ) => {
      return variables[info.text];
    };
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
