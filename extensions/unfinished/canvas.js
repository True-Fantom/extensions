// Name: Canvas
// ID: truefantomcanvas
// Description: Apply visual effects to the entire stage.
// By: TrueFantom <https://scratch.mit.edu/users/TrueFantom/>
// Original: TheShovel

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("Canvas Extension must be run Unsandboxed!");
  }

  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const canvas = Scratch.renderer.canvas;

  const renderer = {
    resizeMode: "default",
  };
  const effects = {
    transparency: 0,
    sepia: 0,
    blur: 0,
    contrast: 100,
    saturation: 100,
    color: 0,
    brightness: 100,
    invert: 0,
  };
  const styles = {
    borderRadius: 0,
    rotation: 0,
    offsetY: 0,
    offsetX: 0,
    skewY: 0,
    skewX: 0,
    scale: 100,
  };

  const updateStyle = () => {
    // Gotta keep the translation to % because of the stage size, window size and so on
    const transform = `rotate(${rotation}deg) scale(${scale}%) skew(${skewX}deg, ${skewY}deg) translate(${offsetX}%, ${
      0 - offsetY
    }%)`;
    if (canvas.style.transform !== transform) {
      canvas.style.transform = transform;
    }
    const filter = `blur(${blur}px) contrast(${
      contrast / 100
    }) saturate(${saturation}%) hue-rotate(${color}deg) brightness(${brightness}%) invert(${invert}%) sepia(${sepia}%) opacity(${
      100 - transparency
    }%)`;
    if (canvas.style.filter !== filter) {
      canvas.style.filter = filter;
    }
    const cssBorderRadius = borderRadius === 0 ? "" : `${borderRadius}%`;
    if (canvas.style.borderRadius !== cssBorderRadius) {
      canvas.style.borderRadius = cssBorderRadius;
    }
    const imageRendering = resizeMode === "pixelated" ? "pixelated" : "";
    if (canvas.style.imageRendering !== imageRendering) {
      canvas.style.imageRendering = imageRendering;
    }
  };
  // scratch-gui may reset canvas styles when resizing the window or going in/out of fullscreen
  new MutationObserver(updateStyle).observe(canvas, {
    attributeFilter: ["style"],
    attributes: true,
  });

  class Extension {
    getInfo() {
      return {
        id: "truefantomcanvas",
        name: "Canvas",
        color1: "#af55dd",

        blocks: [
          {
            opcode: "setRenderScale",
            blockType: Scratch.BlockType.COMMAND,
            text: "set canvas render size to width: [WIDTH] height: [HEIGHT]",
            arguments: {
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
          },
          {
            opcode: "getRenderScaleWidth",
            blockType: Scratch.BlockType.REPORTER,
            text: "canvas render size width",
          },
          {
            opcode: "getRenderScaleHeight",
            blockType: Scratch.BlockType.REPORTER,
            text: "canvas render size height",
          },
          "---",
          {
            opcode: "setRenderMode",
            blockType: Scratch.BlockType.COMMAND,
            text: "set canvas render mode to [MODE]",
            arguments: {
              MODE: {
                type: Scratch.ArgumentType.STRING,
                menu: "RENDER_MODE",
              },
            },
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Canvas Effects",
          },
          {
            opcode: "setEffect",
            blockType: Scratch.BlockType.COMMAND,
            text: "set canvas [EFFECT] to [NUMBER]",
            arguments: {
              EFFECT: {
                type: Scratch.ArgumentType.STRING,
                menu: "EFFECTMENU",
              },
              NUMBER: {
                type: Scratch.ArgumentType.NUMBER,
              },
            },
          },
          {
            opcode: "getEffect",
            blockType: Scratch.BlockType.REPORTER,
            text: "canvas [EFFECT]",
            arguments: {
              EFFECT: {
                type: Scratch.ArgumentType.STRING,
                menu: "EFFECTGETMENU",
              },
            },
          },
          {
            opcode: "clearEffects",
            blockType: Scratch.BlockType.COMMAND,
            text: "clear canvas effects",
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: "Canvas Styles",
          },
        ],

        menus: {
          RENDER_MODE: {
            acceptReporters: false,
            items: ["pixelated", "smoothed"],
          },
          EFFECTMENU: {
            acceptReporters: true,
            items: [
              "blur",
              "contrast",
              "saturation",
              "color shift",
              "brightness",
              "invert",
              "sepia",
              "transparency",
              "scale",
              "skew X",
              "skew Y",
              "offset X",
              "offset Y",
              "rotation",
              "border radius",
            ],
          },
          EFFECTGETMENU: {
            acceptReporters: true,
            // this contains 'resize rendering mode', EFFECTMENU does not
            items: [
              "blur",
              "contrast",
              "saturation",
              "color shift",
              "brightness",
              "invert",
              "resize rendering mode",
              "sepia",
              "transparency",
              "scale",
              "skew X",
              "skew Y",
              "offset X",
              "offset Y",
              "rotation",
              "border radius",
            ],
          },
        },
      };
    }

    geteffect({ EFFECT }) {
      if (EFFECT === "blur") {
        return blur;
      } else if (EFFECT === "contrast") {
        return contrast;
      } else if (EFFECT === "saturation") {
        return saturation;
      } else if (EFFECT === "color shift") {
        return color;
      } else if (EFFECT === "brightness") {
        return brightness;
      } else if (EFFECT === "invert") {
        return invert;
      } else if (EFFECT === "resize rendering mode") {
        return resizeMode;
      } else if (EFFECT === "sepia") {
        return sepia;
      } else if (EFFECT === "transparency") {
        return transparency;
      } else if (EFFECT === "scale") {
        return scale;
      } else if (EFFECT === "skew X") {
        return skewX;
      } else if (EFFECT === "skew Y") {
        return skewY;
      } else if (EFFECT === "offset X") {
        return offsetX;
      } else if (EFFECT === "offset Y") {
        return offsetY;
      } else if (EFFECT === "rotation") {
        return rotation;
      } else if (EFFECT === "border radius") {
        return borderRadius;
      }
      return "";
    }
    seteffect({ EFFECT, NUMBER }) {
      NUMBER = Scratch.Cast.toNumber(NUMBER);
      if (EFFECT === "blur") {
        blur = NUMBER;
      } else if (EFFECT === "contrast") {
        contrast = NUMBER;
      } else if (EFFECT === "saturation") {
        saturation = NUMBER;
      } else if (EFFECT === "color shift") {
        color = NUMBER;
      } else if (EFFECT === "brightness") {
        brightness = NUMBER;
      } else if (EFFECT === "invert") {
        invert = NUMBER;
      } else if (EFFECT === "sepia") {
        sepia = NUMBER;
      } else if (EFFECT === "transparency") {
        transparency = NUMBER;
      } else if (EFFECT === "scale") {
        scale = NUMBER;
      } else if (EFFECT === "skew X") {
        skewX = NUMBER;
      } else if (EFFECT === "skew Y") {
        skewY = NUMBER;
      } else if (EFFECT === "offset X") {
        offsetX = NUMBER;
      } else if (EFFECT === "offset Y") {
        offsetY = NUMBER;
      } else if (EFFECT === "rotation") {
        rotation = NUMBER;
      } else if (EFFECT === "border radius") {
        borderRadius = NUMBER;
      }
      updateStyle();
    }
    cleareffects() {
      borderRadius = 0;
      rotation = 0;
      offsetY = 0;
      offsetX = 0;
      skewY = 0;
      skewX = 0;
      scale = 100;
      transparency = 0;
      sepia = 0;
      blur = 0;
      contrast = 100;
      saturation = 100;
      color = 0;
      brightness = 100;
      invert = 0;
      resizeMode = "default";
      updateStyle();
    }
    setrendermode({ EFFECT }) {
      resizeMode = EFFECT;
      updateStyle();
    }
    renderscale({ X, Y }) {
      Scratch.vm.renderer.resize(X, Y);
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
