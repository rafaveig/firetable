"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var position = { vertical: "bottom", horizontal: "left" };
var DEFAULT_STATE = {
  isOpen: false,
  message: "",
  duration: 2000,
  position: position,
  close: function() {},
  open: function(props) {
    console.log(props.message, props.duration);
  },
  action: react_1.default.createElement("div", null),
};
exports.SnackContext = react_1.default.createContext(DEFAULT_STATE);
//# sourceMappingURL=snackContext.js.map
