// Name: YaGames
// ID: truefantomyagames
// Description: Monetize your projects using the "Yandex Games" platform.
// By: TrueFantom <https://scratch.mit.edu/users/TrueFantom/>

(function (Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("YaGames Extension must be run Unsandboxed!");
  }

  const icon_uri = "data:image/svg+xml;base64,";

  const editor = typeof ScratchBlocks !== "undefined";
  const vm = Scratch.vm;
  const cast = Scratch.Cast;

  const sdk_only_message = [
    "This block will only work in a packaged project on YaGames site. Right now we will just pretend that you are connected.",
    "",
    "(This message will not appear when the project is packaged)",
  ].join("\n");
  const fullscreen_ad_message = [
    "Fullscreen ad.",
    "",
    "(This message will not appear when the project is packaged)",
  ].join("\n");
  const rewarded_ad_message = [
    "Rewarded ad.",
    "",
    "(This message will not appear when the project is packaged)",
  ].join("\n");

  const loadSDK = () => {
    const script = document.createElement("script");
    script.src = "https://yandex.ru/games/sdk/v2";
    document.head.appendChild(script);
    script.onload = initSDK;
  };
  const initSDK = () => {
    YaGames.init().then((ysdk) => {
      window.ysdk = ysdk;
    });
  };

  class Extension {
    getInfo() {
      return {
        id: "truefantomyagames",
        name: "YaGames",
        color1: "#4e1bbc",
        color3: "#ffd24f",

        blocks: [
          {
            opcode: "isSDK",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "connecting to yagames?",
          },
          {
            opcode: "trySDK",
            blockType: Scratch.BlockType.COMMAND,
            text: "try connecting to yagames",
          },
          "---",
          {
            opcode: "dataloaded",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is data loaded?",
          },
          {
            opcode: "loadvars",
            blockType: Scratch.BlockType.COMMAND,
            text: "Load progress",
          },
          {
            opcode: "savevars",
            blockType: Scratch.BlockType.COMMAND,
            text: "Save progress",
          },
          {
            opcode: "resetprogress",
            blockType: Scratch.BlockType.COMMAND,
            text: "Reset progress",
          },
          "---",
          {
            opcode: "setsavedvar",
            blockType: Scratch.BlockType.COMMAND,
            text: "Set saved variable [NAME] value [VALUE]",
            arguments: {
              NAME: {
                defaultValue: "money",
                type: Scratch.ArgumentType.STRING,
              },
              VALUE: {
                defaultValue: "100",
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          {
            opcode: "getsavedvar",
            blockType: Scratch.BlockType.REPORTER,
            text: "Get saved variable [NAME] default value [DEFVAL]",
            arguments: {
              NAME: {
                defaultValue: "money",
                type: Scratch.ArgumentType.STRING,
              },
              DEFVAL: {
                defaultValue: "100",
                type: Scratch.ArgumentType.STRING,
              },
            },
          },
          "---",
          {
            opcode: "whenFullscreenClosed",
            blockType: Scratch.BlockType.HAT,
            func: "isFullscreenClosed",
            text: "When fullscreen ad closed",
          },
          {
            opcode: "fullscreenClosed",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is fullscreen ad closed?",
          },
          {
            opcode: "showfullscreen",
            blockType: Scratch.BlockType.COMMAND,
            text: "Show fullscreen ad",
          },
          "---",
          {
            opcode: "whenRewardedWatched",
            blockType: Scratch.BlockType.HAT,
            func: "isRewardedWatched",
            text: "When rewarded ad shown",
          },
          {
            opcode: "rewardedRewarded",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Did Rewarded Ad give reward?",
          },
          {
            opcode: "showrewarded",
            blockType: Scratch.BlockType.COMMAND,
            text: "Show rewarded ad",
          },
          "---",
          {
            opcode: "canRateGame",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Can rate game?",
          },
          {
            opcode: "openRatePopup",
            blockType: Scratch.BlockType.COMMAND,
            text: "Open Rating Popup",
          },
          "---",
          {
            opcode: "getDeviceType",
            blockType: Scratch.BlockType.REPORTER,
            text: "Device Type",
          },
          {
            opcode: "isDesktop",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is playing on Desktop?",
          },
          {
            opcode: "isMobile",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is playing on Mobile?",
          },
          {
            opcode: "isTablet",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is playing on Tablet?",
          },
          {
            opcode: "isTV",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Is playing on TV?",
          },
        ],
      };
    }

    isSDK() {
      return window.ysdk !== undefined;
    }
    trySDK() {
      if (window.ysdk === undefined) {
        if (editor) {
          window.ysdk = {};
          alert(message);
        }
        loadSDK();
      }
    }
    getDeviceType() {
      if (window.ysdkdebug == true) {
        return "desktop";
      }
      return ysdk.deviceInfo.type;
    }
    isDesktop() {
      if (window.ysdkdebug == true) {
        return true;
      }
      return ysdk.deviceInfo.isDesktop();
    }
    isMobile() {
      if (window.ysdkdebug == true) {
        return false;
      }
      return ysdk.deviceInfo.isMobile();
    }
    isTablet() {
      if (window.ysdkdebug == true) {
        return false;
      }
      return ysdk.deviceInfo.isTablet();
    }
    isTV() {
      if (window.ysdkdebug == true) {
        return false;
      }
      return ysdk.deviceInfo.isTV();
    }
    canRateGame() {
      if (window.ysdkdebug == true) {
        return !(window.alreadyrated == true);
      }
      var can;
      ysdk.feedback.canReview().then(({ value, reason }) => {
        can = value;
      });
      return can;
    }
    openRatePopup() {
      if (window.ysdkdebug == true) {
        window.alreadyrated = true;
        alert("DEBUG Rate our game");
        return;
      }
      ysdk.feedback.requestReview();
    }
    whenRewardedWatched() {
      console.log("wathced!");
    }
    rewardedRewarded() {
      return window.isrewarded == true;
    }
    triggerIRW() {
      window.triggerIRW = true;
    }
    triggerIFC() {
      this.undeafAE();
      window.triggerIFC = true;
    }
    isRewardedWatched() {
      if (window.triggerIRW) {
        window.triggerIRW = false;
        return true;
      }
      return false;
    }
    isFullscreenClosed() {
      if (window.triggerIFC) {
        window.triggerIFC = false;
        return true;
      }
      return false;
    }
    fullscreenClosed() {
      return window.isfullscreenclosed == true;
    }
    async loadvars() {
      if (window.ysdkdebug != true) {
        if (window.ysdkplayer != undefined) {
          var data = await window.ysdkplayer.getData();
          window.ysdkdata = data;
          console.log("Succesfully loaded data!");
        }
      } else {
        window.ysdkdata = {};
      }
    }
    setsavedvar(args) {
      window.ysdkdata[args.NAME] = args.VALUE;
      return;
    }
    getsavedvar(args) {
      return window.ysdkdata[args.NAME] || args.DEFVAL;
    }
    savevars() {
      if (
        window.ysdkplayer != undefined &&
        window.ysdkdata != undefined &&
        window.savedData !== JSON.stringify(window.ysdkdata)
      )
        window.ysdkplayer.setData(window.ysdkdata, true).then(() => {
          window.savedData = JSON.stringify(window.ysdkdata);
          console.log("Successfully saved data!");
        });
    }
    resetprogress() {
      window.ysdkdata = {};
      if (
        window.ysdkplayer != undefined &&
        window.ysdkdata != undefined &&
        window.savedData !== JSON.stringify(window.ysdkdata)
      )
        window.ysdkplayer.setData(window.ysdkdata, true).then(() => {
          window.savedData = JSON.stringify(window.ysdkdata);
          console.log("Successfully saved data!");
        });
    }
    dataloaded() {
      return window.ysdkplayer != undefined && window.ysdkdata != undefined;
    }
    deafAE() {
      Scratch.vm.runtime.audioEngine.inputNode.gain.value = 0;
    }
    undeafAE() {
      Scratch.vm.runtime.audioEngine.inputNode.gain.value = 1;
    }
    showfullscreen() {
      window.isfullscreenclosed = false;
      window.isAdOpened = true;
      Scratch.vm.runtime.audioEngine.inputNode.gain.value = 0;
      if (window.ysdkdebug == true) {
        alert(fullscreen_ad_message);
        window.isfullscreenclosed = true;
        Scratch.vm.runtime.audioEngine.inputNode.gain.value = 1;
        window.triggerIFC = true;
        window.isAdOpened = false;
        return;
      }
      if (window.ysdk != undefined) {
        window.ysdk.adv.showFullscreenAdv({
          callbacks: {
            onClose: function (wasShown) {
              window.isfullscreenclosed = true;
              window.triggerIFC = true;
              window.isAdOpened = false;
              Scratch.vm.runtime.audioEngine.inputNode.gain.value = 1;
            },
            onError: function (error) {
              window.isfullscreenclosed = false;
              window.triggerIFC = true;
              window.isAdOpened = false;
            },
          },
        });
      }
    }
    showrewarded() {
      window.isrewardedwatched = false;
      window.isrewarded = false;
      window.isAdOpened = true;
      this.deafAE();
      if (window.ysdkdebug == true) {
        var pr = prompt(rewarded_ad_message);
        if (pr.toLowerCase() == "c") {
          window.isrewardedwatched = true;
          window.isrewarded = false;
        } else if (pr.toLowerCase() == "r") {
          window.isrewardedwatched = true;
          window.isrewarded = true;
        }
        window.isAdOpened = false;
        this.triggerIRW();
        return;
      }
      window.ysdk.adv.showRewardedVideo({
        callbacks: {
          onOpen: () => {
            window.isrewardedwatched = false;
            window.isrewarded = false;
          },
          onRewarded: () => {
            window.isrewarded = true;
            window.isAdOpened = false;
            this.triggerIRW();
          },
          onClose: () => {
            window.isrewardedwatched = true;
            window.isAdOpened = false;
            this.undeafAE();
            this.triggerIRW();
          },
          onError: (e) => {
            window.isrewardedwatched = false;
            window.isrewarded = false;
            window.isAdOpened = false;
          },
        },
      });
    }
  }

  Scratch.extensions.register(new Extension());
})(Scratch);
