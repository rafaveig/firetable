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
var react_color_1 = require("react-color");
var Popper_1 = __importDefault(require("@material-ui/core/Popper"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
    },
    colorIndicator: {
      width: 20,
      height: 20,
      margin: 10,
      backgroundColor: "#fff",
      borderStyle: "solid",
      borderWidth: 0.5,
    },
  });
});
var Color = function(props) {
  var value = props.value,
    onSubmit = props.onSubmit;
  var _a = react_1.useState(value ? value.hex : ""),
    hex = _a[0],
    setHex = _a[1];
  react_1.useEffect(
    function() {
      if (hex !== value.hex) setHex(value.hex);
    },
    [value]
  );
  var _b = react_1.useState(null),
    anchorEl = _b[0],
    setAnchorEl = _b[1];
  var classes = useStyles();
  var handleClick = function(event) {
    setAnchorEl(event.currentTarget);
  };
  var open = Boolean(anchorEl);
  var id = open ? "no-transition-popper" : undefined;
  var onClickAway = function(event) {
    if (event.target.id !== id && open) {
      setAnchorEl(null);
    }
  };
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(
      "div",
      { className: classes.root },
      react_1.default.createElement("div", {
        onClick: handleClick,
        className: classes.colorIndicator,
        style: { backgroundColor: hex },
      }),
      " ",
      hex
    ),
    react_1.default.createElement(
      Popper_1.default,
      { id: id, open: open, anchorEl: anchorEl },
      react_1.default.createElement(react_color_1.CompactPicker, {
        color: value.rgb,
        onChange: function(props) {
          setHex(props.hex);
        },
        onChangeComplete: function(props) {
          onSubmit({ hex: props.hex, hsl: props.hsl, rgb: props.rgb });
          setAnchorEl(null);
        },
      })
    )
  );
};
exports.default = Color;
//# sourceMappingURL=Color.js.map
