"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var styles_1 = require("@material-ui/core/styles");
var Input_1 = __importDefault(require("@material-ui/core/Input"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    select: {
      width: "100%",
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
    noOptions: {
      position: "absolute",
      top: -15,
    },
  });
});
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
var MultiSelect = function(props) {
  var classes = useStyles();
  var value = props.value,
    row = props.row,
    options = props.options,
    onSubmit = props.onSubmit;
  var handleChange = function(e, v) {
    if (!value || !Array.isArray(value)) {
      onSubmit([v.props.value]);
    } else if (!value.includes(v.props.value)) {
      onSubmit(value.concat([v.props.value]));
    } else {
      var _updatedValues = value.slice();
      var index = _updatedValues.indexOf(v.props.value);
      _updatedValues.splice(index, 1);
      onSubmit(_updatedValues);
    }
  };
  if (options && options.length !== 0)
    return react_1.default.createElement(
      Select_1.default,
      {
        className: classes.select,
        multiple: true,
        value: value && Array.isArray(value) ? value : [],
        onChange: handleChange,
        input: react_1.default.createElement(Input_1.default, {
          id: "select-multiple-chip",
        }),
        renderValue: function(selected) {
          return react_1.default.createElement(
            "div",
            { className: classes.chips },
            selected.map(function(value) {
              return react_1.default.createElement(Chip_1.default, {
                key: value,
                label: value,
                className: classes.chip,
              });
            })
          );
        },
        MenuProps: MenuProps,
      },
      options.map(function(option) {
        return react_1.default.createElement(
          MenuItem_1.default,
          { key: option, value: option },
          option
        );
      })
    );
  else
    return react_1.default.createElement(
      Grid_1.default,
      { className: classes.noOptions, direction: "row" },
      react_1.default.createElement(
        Grid_1.default,
        { item: true },
        react_1.default.createElement(
          Typography_1.default,
          null,
          "add options!"
        )
      )
    );
};
exports.default = MultiSelect;
//# sourceMappingURL=MultiSelect.js.map
