"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var Number = function(props) {
  var value = props.value;
  return react_1.default.createElement(TextField_1.default, {
    autoFocus: true,
    type: "number",
    defaultValue: value,
    onChange: function(e) {},
  });
};
exports.default = Number;
//# sourceMappingURL=Number.js.map
