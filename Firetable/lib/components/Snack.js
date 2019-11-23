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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Snackbar_1 = __importDefault(require("@material-ui/core/Snackbar"));
var snackContext_1 = require("../contexts/snackContext");
function Snack() {
  var snackContext = react_1.useContext(snackContext_1.SnackContext);
  var position = snackContext.position,
    isOpen = snackContext.isOpen,
    close = snackContext.close,
    message = snackContext.message,
    duration = snackContext.duration,
    action = snackContext.action;
  var vertical = position.vertical,
    horizontal = position.horizontal;
  react_1.useEffect(
    function() {
      if (isOpen) setTimeout(close, 10000);
    },
    [isOpen]
  );
  return react_1.default.createElement(Snackbar_1.default, {
    anchorOrigin: { vertical: vertical, horizontal: horizontal },
    key: vertical + "," + horizontal,
    open: isOpen,
    onClose: close,
    ContentProps: {
      "aria-describedby": "message-id",
    },
    message: react_1.default.createElement(
      "span",
      { id: "message-id" },
      message
    ),
    action: action,
  });
}
exports.default = Snack;
//# sourceMappingURL=Snack.js.map
