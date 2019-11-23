"use strict";
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var snackContext_1 = require("../contexts/snackContext");
exports.SnackProvider = function(_a) {
  var children = _a.children;
  var _b = react_1.useState(false),
    isOpen = _b[0],
    setIsOpen = _b[1];
  var _c = react_1.useState(""),
    message = _c[0],
    setMessage = _c[1];
  var _d = react_1.useState(3000),
    duration = _d[0],
    setDuration = _d[1];
  var _e = react_1.useState(react_1.default.createElement("div", null)),
    action = _e[0],
    setAction = _e[1];
  var _f = react_1.useState({
      vertical: "bottom",
      horizontal: "left",
    }),
    position = _f[0],
    setPosition = _f[1];
  var close = function() {
    setIsOpen(false);
    setMessage("");
    setDuration(0);
  };
  var open = function(props) {
    var message = props.message,
      duration = props.duration,
      position = props.position,
      action = props.action;
    setMessage(message);
    if (action) {
      setAction(action);
    }
    if (duration) {
      setDuration(duration);
    } else {
      setDuration(3000);
    }
    if (position) {
      setPosition(position);
    } else {
      setPosition({ vertical: "bottom", horizontal: "left" });
    }
    setIsOpen(true);
  };
  return react_1.default.createElement(
    snackContext_1.SnackContext.Provider,
    {
      value: {
        isOpen: isOpen,
        message: message,
        duration: duration,
        position: position,
        close: close,
        open: open,
        action: action,
      },
    },
    children
  );
};
//# sourceMappingURL=SnackProvider.js.map
