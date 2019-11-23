"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Rating_1 = __importDefault(require("@material-ui/lab/Rating"));
var Rating = function(props) {
  var value = props.value,
    row = props.row,
    onSubmit = props.onSubmit;
  return react_1.default.createElement(Rating_1.default, {
    name: "rating-controlled-" + row.id,
    value: value,
    onChange: function(event, newValue) {
      onSubmit(newValue);
    },
  });
};
exports.default = Rating;
//# sourceMappingURL=Rating.js.map
