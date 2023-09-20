(function (Scratch) {
  "use strict";

  class Extension {
    getInfo() {
      return {
        id: "truefantomblockinfocustomparam",
        name: "Custom Param",

        blocks: [
          {
            opcode: "getParam",
            blockType: Scratch.BlockType.REPORTER,
            text: "my param",
            my_param: "hello world!",
          },
        ],
      };
    }

    getParam(args, util, info) {
      return info.my_param;
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
