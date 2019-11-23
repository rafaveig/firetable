"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Edit_1 = __importDefault(require("@material-ui/icons/Edit"));
var UrlLink = function(props) {
  var value = props.value;
  return value
    ? react_1.default.createElement(
        react_1.default.Fragment,
        null,
        react_1.default.createElement(Edit_1.default, null),
        react_1.default.createElement(
          "a",
          { href: value, target: "_blank", rel: "noopener noreferrer" },
          value
        )
      )
    : null;
};
exports.default = UrlLink;
//# sourceMappingURL=UrlLink.js.map
