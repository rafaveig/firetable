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
var AspectRatio_1 = __importDefault(require("@material-ui/icons/AspectRatio"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles_1 = require("@material-ui/core/styles");
var Popper_1 = __importDefault(require("@material-ui/core/Popper"));
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var TextareaAutosize_1 = __importDefault(
  require("@material-ui/core/TextareaAutosize")
);
var ClickAwayListener_1 = __importDefault(
  require("@material-ui/core/ClickAwayListener")
);
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
    },
    typography: {
      padding: theme.spacing(2),
    },
    textArea: {
      fontSize: 14,
      minWidth: 230,
    },
  });
});
var LongText = function(props) {
  var value = props.value,
    onSubmit = props.onSubmit;
  var _a = react_1.useState(value ? JSON.stringify(value) : ""),
    text = _a[0],
    setText = _a[1];
  react_1.useEffect(
    function() {
      if (text !== value) setText(value);
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
  var onClickAway = function() {
    if (text !== value) onSubmit(text);
  };
  var open = anchorEl !== null;
  var id = open ? "no-transition-popper" : undefined;
  return react_1.default.createElement(
    "div",
    { className: classes.root },
    react_1.default.createElement(
      ClickAwayListener_1.default,
      { onClickAway: onClickAway },
      react_1.default.createElement(
        "div",
        null,
        react_1.default.createElement(
          IconButton_1.default,
          { onClick: handleClick },
          react_1.default.createElement(AspectRatio_1.default, null)
        ),
        text,
        react_1.default.createElement(
          Popper_1.default,
          { id: id, open: open, anchorEl: anchorEl },
          react_1.default.createElement(
            Paper_1.default,
            null,
            react_1.default.createElement(
              Typography_1.default,
              { className: classes.typography },
              react_1.default.createElement(TextareaAutosize_1.default, {
                id: id,
                className: classes.textArea,
                rowsMax: 6,
                "aria-label": "maximum height",
                placeholder: "enter text",
                defaultValue: text,
                autoFocus: true,
                onChange: function(e) {
                  setText(e.target.value);
                },
              })
            )
          )
        )
      )
    )
  );
};
exports.default = LongText;
//# sourceMappingURL=LongText.js.map
