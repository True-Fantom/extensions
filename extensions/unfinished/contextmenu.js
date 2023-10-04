// Name: Context Menu
// ID: truefantomcontextmenu
// Description: Context Menu.
// By: TrueFantom <https://scratch.mit.edu/users/TrueFantom/>

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Context Menu Extension must be run Unsandboxed!");
  }

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const canvas = vm.runtime.renderer.canvas.parentElement;

  let context_menu = false;

  canvas.addEventListener("contextmenu", () =>
    vm.runtime.startHats("truefantomcontextmenu_whenContextMenu"),
  );

  class ContextMenu {
    getInfo() {
      return {
        id: "truefantomcontextmenu",
        name: "Context Menu",

        blocks: [
          {
            opcode: "whenContextMenu",
            blockType: Scratch.BlockType.EVENT,
            text: "when context menu tryed open",
            isEdgeActivated: false,
          },
          {
            opcode: "setContextMenu",
            blockType: Scratch.BlockType.COMMAND,
            text: "set context menu to [SET]",
            arguments: {
              SET: {
                type: Scratch.ArgumentType.STRING,
                menu: "SET",
              },
            },
          },
          {
            opcode: "isContextMenu",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "context menu enabled?",
          },
        ],
        menus: {
          SET: {
            acceptReporters: true,
            items: [
              {
                text: "enabled",
                value: "true",
              },
              {
                text: "disabled",
                value: "false",
              },
            ],
          },
        },
      };
    }

    setContextMenu(args) {
      if (cast.toBoolean(args.SET)) {
        canvas.removeEventListener("contextmenu", this._noContextMenu);
      } else {
        canvas.addEventListener("contextmenu", this._noContextMenu);
      }
      context_menu = cast.toBoolean(args.SET);
    }
    _noContextMenu(event) {
      event.preventDefault();
    }
    isContextMenu() {
      return context_menu;
    }
  }

  Scratch.extensions.register(new ContextMenu());
})(Scratch);
