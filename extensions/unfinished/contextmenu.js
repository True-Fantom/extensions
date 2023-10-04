// Name: ContextMenu
// ID: truefantomcontextmenu
// Description: ContextMenu.
// By: TrueFantom <https://scratch.mit.edu/users/TrueFantom/>

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("ContextMenu Extension must be run Unsandboxed!");
  }

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const canvas = vm.runtime.renderer.canvas.parentElement;

  class ContextMenu {
    getInfo() {
      return {
        id: "truefantomcontextmenu",
        name: "ContextMenu",

        blocks: [
          {
            opcode: "setContextMenu",
            blockType: Scratch.BlockType.COMMAND,
            text: "set contextmenu to [SET]",
            arguments: {
              SET: {
                type: Scratch.ArgumentType.STRING,
                menu: "SET",
              },
            },
          },
        ],
        menus: {
          SET: {
            acceptReporters: true,
            items: ["true", "false"],
          },
        },
      };
    }

    setContextMenu(args) {
      if (cast.toBoolean(args.SET)) {
        canvas.removeEventListener("contextmenu", this._nocontextmenu);
      } else {
        canvas.addEventListener("contextmenu", this._nocontextmenu);
      }
    }
    _nocontextmenu(event) {
      event.preventDefault();
    }
  }

  Scratch.extensions.register(new ContextMenu());
})(Scratch);
