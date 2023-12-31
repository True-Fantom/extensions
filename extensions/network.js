(Scratch => {
  'use strict';

  const icon = 'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwLDAsMjI1LjM1NDgsMjI1LjM1NDgiIGhlaWdodD0iMjI1LjM1NDgiIHdpZHRoPSIyMjUuMzU0OCIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmVyc2lvbj0iMS4xIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTI3LjMyMjc0LC02Ny4zMjI2KSI+PGcgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZT0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iPjxwYXRoIHN0cm9rZS13aWR0aD0iMCIgZmlsbD0iIzE0NjYwMCIgZD0iTTEyNy4zMjI3NSwxODBjMCwtNjIuMjMwMDEgNTAuNDQ3MzksLTExMi42Nzc0IDExMi42Nzc0LC0xMTIuNjc3NGM2Mi4yMzAwMSwwIDExMi42Nzc0LDUwLjQ0NzM5IDExMi42Nzc0LDExMi42Nzc0YzAsNjIuMjMwMDEgLTUwLjQ0NzM5LDExMi42Nzc0IC0xMTIuNjc3NCwxMTIuNjc3NGMtNjIuMjMwMDEsMCAtMTEyLjY3NzQsLTUwLjQ0NzM5IC0xMTIuNjc3NCwtMTEyLjY3NzR6Ij48L3BhdGg+PGcgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSIjZmZmZmZmIj48cGF0aCBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZD0iTTI2MS4zNjIzNSwxNDYuNjIzNTlsLTUuMTUwOTcsNS4yNzQ2MmwtMTMuMTg1NTEsLTEyLjIzOTg5bDE5LjIzNjg5LC0xOS40OTU4OWMxMC41OTE0NywtMTAuNTkxNDcgMjcuNzU4NCwtMTAuNTkxNDcgMzguMzQxMTIsMGwxMi43ODAzOCwxMi43ODAzOGMxMC41OTE0NywxMC41ODI3MSAxMC41OTE0NywyNy43NDk2NSAwLDM4LjM0MTEybC0zOC4zNDExMiwzOC4zNDExMmMtMTAuNTkxNDcsMTAuNTg2OTUgLTI3Ljc0OTY1LDEwLjU4Njk1IC0zOC4zNDExMiwwbC0xMi43ODAzNywtMTIuNzgwMzdsLTEyLjY3Mzc4LC0xMy4yMjYxMmwxMi4yNjMwNCwtMTIuNDMzbDI1Ljk3MTQ5LDI1LjY1OTEyYzMuNTIxNzQsMy41MjE3NCA5LjI1ODY0LDMuNTIxNzQgMTIuNzgwMzgsMGwzOC4zNDExMiwtMzguMzQxMTJjMy41MzA0OSwtMy41MzA0OSAzLjUzMDQ5LC05LjI1ODY0IDAsLTEyLjc4MDM4bC0xMi43ODAzNywtMTIuNzgwMzdjLTMuNTIxNzQsLTMuNTIxNzMgLTkuMjQ5ODgsLTMuNTMwNDkgLTEyLjc4MDM4LDBsLTEzLjY4MDc5LDEzLjY4MDc5eiI+PC9wYXRoPjxwYXRoIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBkPSJNMjE4LjYzNzczLDIxMy4zNzY0bDUuMTUwOTcsLTUuMjc0NjJsMTMuMTg1NTEsMTIuMjM5ODlsLTE5LjIzNjg5LDE5LjQ5NTg5Yy0xMC41OTE0NywxMC41OTE0NyAtMjcuNzU4NCwxMC41OTE0NyAtMzguMzQxMTIsMGwtMTIuNzgwMzgsLTEyLjc4MDM4Yy0xMC41OTE0NywtMTAuNTgyNzEgLTEwLjU5MTQ3LC0yNy43NDk2NSAwLC0zOC4zNDExMWwzOC4zNDExMiwtMzguMzQxMTJjMTAuNTkxNDcsLTEwLjU4Njk1IDI3Ljc0OTY1LC0xMC41ODY5NSAzOC4zNDExMiwwbDEyLjc4MDM3LDEyLjc4MDM3bDEyLjY3Mzc4LDEzLjIyNjEybC0xMi4yNjMwNSwxMi40MzNsLTI1Ljk3MTQ4LC0yNS42NTkxMmMtMy41MjE3NCwtMy41MjE3NCAtOS4yNTg2NCwtMy41MjE3NCAtMTIuNzgwMzgsMGwtMzguMzQxMTIsMzguMzQxMTJjLTMuNTMwNDksMy41MzA0OSAtMy41MzA0OSw5LjI1ODY0IDAsMTIuNzgwMzhsMTIuNzgwMzcsMTIuNzgwMzdjMy41MjE3NCwzLjUyMTczIDkuMjQ5ODgsMy41MzA0OSAxMi43ODAzOCwwbDEzLjY4MDc5LC0xMy42ODA3OXoiPjwvcGF0aD48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTEyLjY3NzI1NToxMTIuNjc3NDA1LS0+';

  const main_protocols = ['https:', 'http:', 'data:', 'file:', 'blob:', 'ftp:', 'ftps:', 'mailto:', 'news:', 'irc:', 'gopher:', 'nntp:', 'feed:', 'telnet:', 'mms:', 'rtsp:', 'svn:', 'tel:', 'fax:', 'xmpp:', 'www', 'wwws'];
  const browser_protocols = ['chrome:', 'edge:', 'brave:', 'browser:', 'about:', 'extension:', 'chrome-extension:'];
  const special_protocols = ['steam:', 'spotify:', 'zoommtg:', 'zoomus:', 'viber:', 'slack:', 'trueconf:', 'rdar:', 'msteams:', 'teamspeak:', 'magnet:', 'streamdeck:', 'skype:', 'sms:', 'comgooglemaps:', 'comgooglemapsurl:', 'comgooglemaps-x-callback:'];
  const ms_protocols = ['ms-help:', 'ms-settings', 'ms-settings-airplanemode:', 'ms-settings-bluetooth:', 'ms-settings-camera:', 'ms-settings-cellular:', 'ms-settings-cloudstorage:', 'ms-settings-emailandaccounts:', 'ms-settings-language:', 'ms-settings-location:', 'ms-settings-lock:', 'ms-settings-nfctransactions:', 'ms-settings-notifications:', 'ms-settings-power:', 'ms-settings-privacy:', 'ms-settings-proximity:', 'ms-settings-screenrotation:', 'ms-settings-wifi:', 'ms-settings-workplace:', 'ms-access:', 'ms-excel:', 'ms-infopath:', 'ms-powerpoint:', 'ms-project:', 'ms-publisher:', 'ms-spd:', 'ms-visio:', 'ms-word:', 'ms-clock:', 'ms-calculator:', 'ms-windows-store:'];
  const protocols = main_protocols.concat(browser_protocols, special_protocols, ms_protocols);

  const Scr = (A) => {
    return A === undefined || typeof A === 'object' ? '' : A;
  };
  const Bool = (A) => {
    return typeof A === 'string' && A.toLowerCase() === 'false' ? false : Boolean(A);
  };
  const Num = (A) => {
    return typeof A === 'string' && isNaN(Number(A)) ? 0 : Number(A);
  };
  const JsonStr = (A) => {
    return JSON.stringify(A, (key, value) => {return value === undefined ? '' : value}, 0);
  };
  const JsonData = (A) => {
    return JSON.parse(A, null);
  };
  const Arr = (A) => {
    return Array.isArray(A) ? A : Array.from({length: 1}, (v) => A);
  };
  const Obj = (A) => {
    return !Array.isArray(A) && typeof A === 'object' && A !== null && !(A instanceof RegExp) ? A : {};
  };
  const isRegExp = (A) => {
    return A instanceof RegExp;
  };
  const isArr = (A) => {
    return Array.isArray(A);
  };
  const isObj = (A) => {
    return !Array.isArray(A) && typeof A === 'object' && A !== null && !(A instanceof RegExp);
  };

  const StJsonData = (A) => {
    try {return JsonData(A)} catch(err) {return ''}
  };

  const OptionsCheck = (OPTIONS, OPTION_TYPE) => {
    switch (OPTION_TYPE) {
      case 'redirect':
        switch (OPTION_TYPE.redirect) {
          case 'follow': return 'follow';
          case 'error': return 'error';
          default: return 'follow';
        }
      case 'mode':
        switch (OPTION_TYPE.mode) {
          case 'follow': return 'follow';
          case 'error': return 'error';
          default: return 'follow';
        }
    }
  };

  const FetchUrl = ({USER_URL, BODY, HEADERS, OPTIONS, RESPONSES_TYPES}, METHOD) => {
    RESPONSES_TYPES = Arr(StJsonData(RESPONSES_TYPES)).length === 0 ? [9] : Arr(StJsonData(RESPONSES_TYPES));
    OPTIONS = Obj(StJsonData(OPTIONS));
    const single = METHOD === 'GET' || METHOD === 'DELETE';
    return fetch(String(USER_URL), {
      method: METHOD,
      headers: Obj(StJsonData(HEADERS)),
      redirect: OptionsCheck(OPTIONS, 'redirect'),
      body: single ? null : String(BODY)})
    .then(res => {
      const responses = [];
      for (let i = 0; i <= RESPONSES_TYPES.length - 1; i++) {
        switch (Num(RESPONSES_TYPES[i])) {
          case 1: responses.push(res.text()); break;
          case 2: responses.push(res.json()); break;
          case 3: responses.push(res.ok); break;
          case 4: responses.push(res.status); break;
          case 5: responses.push(res.statusText); break;
          case 6: responses.push(res.type); break;
          case 7: responses.push(res.redirected); break;
          case 8: responses.push(res.url); break;
          case 9: default: responses.push(single ? res.url : res.bodyUsed); break;
        }
      }
      return Promise.all(responses);
    })
    .then(arr => {return JsonStr(arr)})
    .catch(err => '');
  };

  class Network01 {

    getInfo() {
      return {

        id: 'truefantomnetwork01',
        name: 'Network',

        color1: '#146600',
        color2: '#125C00',
        color3: '#105200',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'connected_to_internet_block',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'connected to internet?',
            disableMonitor: false
          },
          '---',
          {
            opcode: 'browser_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'browser'
          },
          '---',
          {
            opcode: 'current_url_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'current url'
          },
          '---',
          {
            opcode: 'network_type_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network type'
          },
          {
            opcode: 'network_generation_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'network generation'
          },
          '---',
          {
            opcode: 'downlink_speed_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'downlink speed in mb/s'
          },
          {
            opcode: 'downlink_max_speed_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'downlink max speed in mb/s'
          },
          {
            opcode: 'rtt_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'rtt in ms'
          },
          '---',
          {
            opcode: 'get_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'get [USER_URL] with headers [HEADERS] and options [OPTIONS] respond [RESPONSES_TYPES]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/get'
              },
              HEADERS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'single_headers_menu'
              },
              OPTIONS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'options_menu'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'single_responses_types_menu'
              }
            }
          },
          {
            opcode: 'delete_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'delete [USER_URL] with headers [HEADERS] and options [OPTIONS] respond [RESPONSES_TYPES]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/delete'
              },
              HEADERS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'single_headers_menu'
              },
              OPTIONS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'options_menu'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'single_responses_types_menu'
              }
            }
          },
          {
            opcode: 'post_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'post [BODY] to [USER_URL] with headers [HEADERS] and options [OPTIONS] respond [RESPONSES_TYPES]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/post'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              HEADERS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'multi_headers_menu'
              },
              OPTIONS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'options_menu'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'multi_responses_types_menu'
              }
            }
          },
          {
            opcode: 'put_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'put [BODY] to [USER_URL] with headers [HEADERS] and options [OPTIONS] respond [RESPONSES_TYPES]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/put'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              HEADERS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'multi_headers_menu'
              },
              OPTIONS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'options_menu'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'multi_responses_types_menu'
              }
            }
          },
          {
            opcode: 'patch_block',
            blockType: Scratch.BlockType.REPORTER,
            text: 'patch [BODY] to [USER_URL] with headers [HEADERS] and options [OPTIONS] respond [RESPONSES_TYPES]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://httpbin.org/patch'
              },
              BODY: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'apple'
              },
              HEADERS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'multi_headers_menu'
              },
              OPTIONS: {
                type: Scratch.ArgumentType.STRING,
                menu: 'options_menu'
              },
              RESPONSES_TYPES: {
                type: Scratch.ArgumentType.STRING,
                menu: 'multi_responses_types_menu'
              }
            }
          },
          '---',
          {
            opcode: 'open_link_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open [USER_URL] in new tab',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              }
            }
          },
          {
            opcode: 'open_window_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'open [USER_URL] in new window with width: [WIDTH] height: [HEIGHT] left: [LEFT] top: [TOP]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              },
              WIDTH: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '500'
              },
              HEIGHT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '500'
              },
              LEFT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              },
              TOP: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '0'
              }
            }
          },
          {
            opcode: 'redirect_link_block',
            blockType: Scratch.BlockType.COMMAND,
            isTerminal: true,
            text: 'redirect this tab to [USER_URL]',
            arguments: {
              USER_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://extensions.turbowarp.org'
              }
            }
          }
        ],

        menus: {
          single_headers_menu: { 
            acceptReporters: true,
            items: [
              {
                text: '{}',
                value: '{}'
              }
            ]
          },
          multi_headers_menu: { 
            acceptReporters: true,
            items: [
              {
                text: '{"Content-Type":"text/plain"}',
                value: '{"Content-Type":"text/plain"}'
              },
              {
                text: '{"Content-Type":"application/json"}',
                value: '{"Content-Type":"application/json"}'
              },
              {
                text: '{}',
                value: '{}'
              }
            ]
          },
          options_menu: { 
            acceptReporters: true,
            items: [
              {
                text: '{"redirect":"follow"}',
                value: '{"redirect":"follow"}'
              },
              {
                text: '{"redirect":"error"}',
                value: '{"redirect":"error"}'
              },
              {
                text: '{"mode":"cors"}',
                value: '{"mode":"cors"}'
              },
              {
                text: '{"mode":"no-cors"}',
                value: '{"mode":"no-cors"}'
              },
              {
                text: '{"mode":"same-origin"}',
                value: '{"mode":"same-origin"}'
              },
              {
                text: '{"credentials":"omit"}',
                value: '{"credentials":"omit"}'
              },
              {
                text: '{"credentials":"same-origin"}',
                value: '{"credentials":"same-origin"}'
              },
              {
                text: '{"credentials":"include"}',
                value: '{"credentials":"include"}'
              },
              {
                text: '{"cache":"default"}',
                value: '{"cache":"default"}'
              },
              {
                text: '{"cache":"no-store"}',
                value: '{"cache":"no-store"}'
              },
              {
                text: '{"cache":"reload"}',
                value: '{"cache":"reload"}'
              },
              {
                text: '{"cache":"no-cache"}',
                value: '{"cache":"no-cache"}'
              },
              {
                text: '{"cache":"force-cache"}',
                value: '{"cache":"force-cache"}'
              },
              {
                text: '{"cache":"only-if-cached"}',
                value: '{"cache":"only-if-cached"}'
              },
              {
                text: '{"referrer":"about:client"}',
                value: '{"referrer":"about:client"}'
              },
              {
                text: '{"referrer":""}',
                value: '{"referrer":""}'
              },
              {
                text: '{"referrerPolicy":"no-referrer"}',
                value: '{"referrerPolicy":"no-referrer"}'
              },
              {
                text: '{"referrerPolicy":"no-referrer-when-downgrade"}',
                value: '{"referrerPolicy":"no-referrer-when-downgrade"}'
              },
              {
                text: '{"referrerPolicy":"same-origin"}',
                value: '{"referrerPolicy":"same-origin"}'
              },
              {
                text: '{"referrerPolicy":"origin"}',
                value: '{"referrerPolicy":"origin"}'
              },
              {
                text: '{"referrerPolicy":"strict-origin"}',
                value: '{"referrerPolicy":"strict-origin"}'
              },
              {
                text: '{"referrerPolicy":"origin-when-cross-origin"}',
                value: '{"referrerPolicy":"origin-when-cross-origin"}'
              },
              {
                text: '{"referrerPolicy":"strict-origin-when-cross-origin"}',
                value: '{"referrerPolicy":"strict-origin-when-cross-origin"}'
              },
              {
                text: '{"referrerPolicy":"unsafe-url"}',
                value: '{"referrerPolicy":"unsafe-url"}'
              },
              {
                text: '{"priority":"high"}',
                value: '{"priority":"high"}'
              },
              {
                text: '{"priority":"low"}',
                value: '{"priority":"low"}'
              },
              {
                text: '{"priority":"auto"}',
                value: '{"priority":"auto"}'
              },
              {
                text: '{}',
                value: '{}'
              }
            ]
          },
          single_responses_types_menu: {  
            acceptReporters: true,
            items: [
              {
                text: '(1) text',
                value: '1'
              },
              {
                text: '(2) json',
                value: '2'
              },
              {
                text: '(3) status ok?',
                value: '3'
              },
              {
                text: '(4) status',
                value: '4'
              },
              {
                text: '(5) status text',
                value: '5'
              },
              {
                text: '([5,1]) status text and text',
                value: '[5,1]'
              },
              {
                text: '(6) type',
                value: '6'
              },
              {
                text: '([6,4]) type and status',
                value: '[6,4]'
              },
              {
                text: '(7) redirected?',
                value: '7'
              },
              {
                text: '(8) url',
                value: '8'
              }
            ]
          },
          multi_responses_types_menu: {  
            acceptReporters: true,
            items: [
              {
                text: '(1) text',
                value: '1'
              },
              {
                text: '(2) json',
                value: '2'
              },
              {
                text: '(3) status ok?',
                value: '3'
              },
              {
                text: '(4) status',
                value: '4'
              },
              {
                text: '(5) status text',
                value: '5'
              },
              {
                text: '([5,1]) status text and text',
                value: '[5,1]'
              },
              {
                text: '(6) type',
                value: '6'
              },
              {
                text: '([6,4]) type and status',
                value: '[6,4]'
              },
              {
                text: '(7) redirected?',
                value: '7'
              },
              {
                text: '(8) url',
                value: '8'
              },
              {
                text: '(9) body used?',
                value: '9'
              }
            ]
          }
        }
      }
    }

    connected_to_internet_block() {
      try {return navigator.onLine} catch(err) {return false}
    }
    browser_block() {
      try {
        const has = input => navigator.userAgent.includes(input);
        if (has('Firefox')) return 'firefox';
        if (has('SamsungBrowser')) return 'samsung internet';
        if ((has('Opera') || has('OPR')) && has('GX')) return 'opera gx';
        if (has('Opera') || has('OPR')) return 'opera';
        if (has('Trident')) return 'internet explorer';
        if (has('Edge')) return 'legacy';
        if (has('Edg')) return 'edge';
        if (has('YaBrowser') || has('YaSearchBrowser')) return 'yandex';
        if (has('Miui')) return 'mi browser';
        if (has('UBrowser')) return 'uc browser';
        if (has('Chrome')) return 'chromium';
        if (has('Safari')) return 'safari';
        return '';
      } catch(err) {return ''}
    }
    current_url_block() {
      try {return document.URL || ''} catch(err) {return ''}
    }
    network_type_block() {
      try {
        switch (navigator.connection.type) {
          case 'bluetooth': return 'bluetooth';
          case 'cellular': return 'cellular';
          case 'ethernet': return 'ethernet';
          case 'wifi': return 'wi-fi';
          case 'wimax': return 'wimax';
          default: return '';
        }
      } catch(err) {return ''}
    }
    network_generation_block() {
      try {
        switch (navigator.connection.effectiveType) {
          case 'slow-2g': case '2g': return '2g';
          case '3g': return '3g';
          case '4g': return '4g';
          default: return '';
        }
      } catch(err) {return ''}
    }
    downlink_speed_block() {
      try {return navigator.connection.downlink || ''} catch(err) {return ''}
    }
    downlink_max_speed_block() {
      try {return navigator.connection.downlinkMax || ''} catch(err) {return ''}
    }
    rtt_block() {
      try {return navigator.connection.rtt || ''} catch(err) {return ''}
    }
    get_block(args) {
      try {return FetchUrl(args, 'GET')} catch(err) {return ''}
    }
    delete_block(args) {
      try {return FetchUrl(args, 'DELETE')} catch(err) {return ''}
    }
    post_block(args) {
      try {return FetchUrl(args, 'POST')} catch(err) {return ''}
    }
    put_block(args) {
      try {return FetchUrl(args, 'PUT')} catch(err) {return ''}
    }
    patch_block(args) {
      try {return FetchUrl(args, 'PATCH')} catch(err) {return ''}
    }
    open_link_block({USER_URL}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          window.open(String(USER_URL), '_blank');
        }
      } catch(err) {}
    }
    open_window_block({USER_URL, WIDTH, HEIGHT, LEFT, TOP}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          window.open(String(USER_URL), '_blank', `popup=1, width=${Num(WIDTH) < 100 ? 100 : Num(WIDTH) > window.screen.width ? window.screen.width : Num(WIDTH)}, height=${Num(HEIGHT) < 100 ? 100 : Num(HEIGHT) > window.screen.height ? window.screen.height : Num(HEIGHT)}, left=${Num(LEFT) < 0 ? 0 : Num(LEFT) > window.screen.width ? window.screen.width : Num(LEFT)}, top=${Num(TOP) < 0 ? 0 : Num(TOP) > window.screen.height ? window.screen.height : Num(TOP)}`);
        }
      } catch(err) {}
    }
    redirect_link_block({USER_URL}) {
      try {
        const url = new URL(String(USER_URL));
        if (protocols.includes(url.protocol)) {
          window.open(String(USER_URL), '_self');
        }
      } catch(err) {}
    }
  }

  Scratch.extensions.register(new Network01());
})(Scratch);
