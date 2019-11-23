"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var createMuiTheme_1 = __importDefault(
  require("@material-ui/core/styles/createMuiTheme")
);
var Theme = createMuiTheme_1.default({
  spacing: 4,
  palette: {
    primary: {
      main: "#E34C4E",
    },
    secondary: {
      main: "#007bff",
    },
  },
});
exports.default = Theme;
//# sourceMappingURL=Theme.js.map
