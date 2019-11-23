"use strict";
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/styles");
var Theme_1 = __importDefault(require("./Theme"));
var Snack_1 = __importDefault(require("./components/Snack"));
var SnackProvider_1 = require("./util/SnackProvider");
var Table_1 = __importDefault(require("./components/Table"));
var Firetable = (function(_super) {
  __extends(Firetable, _super);
  function Firetable() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  Firetable.prototype.render = function() {
    return react_1.default.createElement(
      styles_1.ThemeProvider,
      { theme: Theme_1.default },
      react_1.default.createElement(
        SnackProvider_1.SnackProvider,
        null,
        react_1.default.createElement(Table_1.default, {
          collection: this.props.tableCollection,
          filters: this.props.filters,
        }),
        react_1.default.createElement(Snack_1.default, null)
      )
    );
  };
  return Firetable;
})(react_1.default.Component);
exports.default = Firetable;
//# sourceMappingURL=Firetable.js.map
