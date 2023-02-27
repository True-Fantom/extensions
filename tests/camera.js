(Scratch => {
  'use strict';

  const vm = Scratch.vm;

  let cameraX = 0;
  let cameraY = 0;
  let cameraZoom = 100;
  let cameraBG = '#ffffff';

  vm.runtime.runtimeOptions.fencing = false;
  vm.renderer.offscreenTouching = true;

  function updateCamera() {
    vm.renderer.setStageSize(
      vm.runtime.stageWidth/-2+cameraX, 
      vm.runtime.stageWidth/2+cameraX, 
      vm.runtime.stageHeight/-2+cameraY, 
      vm.runtime.stageHeight/2+cameraY
    );
    vm.renderer._projection[15] = 100/cameraZoom;
    /*
    vm.renderer._backgroundColor4f = [
      parseInt(cameraBG.substring(1,3),16)/255,
      parseInt(cameraBG.substring(3,5),16)/255,
      parseInt(cameraBG.substring(5,7),16)/255,
      1
    ]
    */
  }

  // tell resize to update camera as well
  vm.runtime.on("STAGE_SIZE_CHANGED", _=>updateCamera());

  function doFix() {
    vm.runtime.emit('STAGE_SIZE_CHANGED', vm.runtime.stageWidth, vm.runtime.stageHeight);
  }

  // fix mouse positions
  let oldSX = vm.runtime.ioDevices.mouse.getScratchX;
  let oldSY = vm.runtime.ioDevices.mouse.getScratchY;
  
  vm.runtime.ioDevices.mouse.getScratchX = function(...a){
    return (oldSX.apply(this, a)+cameraX)/cameraZoom*100;
  }
  vm.runtime.ioDevices.mouse.getScratchY = function(...a){
    return (oldSY.apply(this, a)+cameraY)/cameraZoom*100;
  }
  
  class Camera {

    getInfo() {
      return {

        color1: '#ff4da7',
        color2: '#b93778',
        color3: '#b93778',

        id: 'DTcamera',

        name: 'Camera',

        blocks: [
          {
            opcode: 'setBoth',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera to x: [x] y: [y]',
            arguments: {
              x: {
                type: 'number',
                defaultValue: 0
              },
              y: {
                type: 'number',
                defaultValue: 0
              },
            }
          },
          '---',
          {
            opcode: 'changeZoom',
            blockType: Scratch.BlockType.COMMAND,
            text: 'change camera zoom by [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'setZoom',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera zoom to [val] %',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 100
              }
            }
          },
          '---',
          {
            opcode: 'changeX',
            blockType: Scratch.BlockType.COMMAND,
            text: 'change camera x by [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'setX',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera x to [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'changeY',
            blockType: Scratch.BlockType.COMMAND,
            text: 'change camera y by [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 10
              }
            }
          },
          {
            opcode: 'setY',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set camera y to [val]',
            arguments: {
              val: {
                type: 'number',
                defaultValue: 0
              }
            }
          },
          '---',
          {
            opcode: 'getX',
            blockType: Scratch.BlockType.REPORTER,
            text: 'camera x',
          },
          {
            opcode: 'getY',
            blockType: Scratch.BlockType.REPORTER,
            text: 'camera y',
          },
          {
            opcode: 'getZoom',
            blockType: Scratch.BlockType.REPORTER,
            text: 'camera zoom',
          },
          /*  REMOVED - touching color still returns white
          {
            opcode: 'setCol',
            blockType: Scratch.BlockType.COMMAND,
            text: 'set background color to [val]',
            arguments: {
              val: {
                type: 'color'
              }
            }
          },
          */
        ]
      }
    }

    setBoth(ARGS) {
      cameraX = +ARGS.x;
      cameraY = +ARGS.y;
      doFix();
    }
    changeZoom(ARGS) {
      cameraZoom += +ARGS.val;
      doFix();
    }
    setZoom(ARGS) {
      cameraZoom = +ARGS.val;
      doFix();
    }
    changeX(ARGS) {
      cameraX += +ARGS.val;
      doFix();
    }
    setX(ARGS) {
      cameraX = +ARGS.val;
      doFix();
    }
    changeY(ARGS) {
      cameraY += +ARGS.val;
      doFix();
    }
    setY(ARGS) {
      cameraY = +ARGS.val;
      doFix();
    }
    getX() {
      return cameraX;
    }
    getY() {
      return cameraY;
    }
    getZoom() {
      return cameraZoom;
    }
    setCol(ARGS) {
      cameraBG = ARGS.val;
      doFix();
    }
  }

  Scratch.extensions.register(new Camera());
})(Scratch)
