"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Checkbox_1 = __importDefault(require("@material-ui/core/Checkbox"));
var CheckBox = function(props) {
  var value = props.value,
    row = props.row,
    onSubmit = props.onSubmit;
  return react_1.default.createElement(Checkbox_1.default, {
    name: "checkBox-controlled-" + row.id,
    checked: !!value,
    onChange: function(e) {
      onSubmit(!value);
    },
  });
};
exports.default = CheckBox;
//# sourceMappingURL=CheckBox.js.map
