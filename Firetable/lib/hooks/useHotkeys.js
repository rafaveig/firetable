"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var hotkeys_js_1 = __importDefault(require("hotkeys-js"));
var react_1 = require("react");
function useHotkeys(keys, callback, deps) {
  if (deps === void 0) {
    deps = [];
  }
  var memoisedCallback = react_1.useCallback(callback, deps);
  react_1.useEffect(
    function() {
      hotkeys_js_1.default(keys, memoisedCallback);
      return function() {
        return hotkeys_js_1.default.unbind(keys, memoisedCallback);
      };
    },
    [memoisedCallback]
  );
}
exports.default = useHotkeys;
//# sourceMappingURL=useHotkeys.js.map
