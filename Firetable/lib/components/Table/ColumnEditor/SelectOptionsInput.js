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
var styles_1 = require("@material-ui/core/styles");
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var AddCircle_1 = __importDefault(require("@material-ui/icons/AddCircle"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var InputAdornment_1 = __importDefault(
  require("@material-ui/core/InputAdornment")
);
var useStyles = styles_1.makeStyles(function(Theme) {
  return styles_1.createStyles({
    root: {},
    field: {
      width: "100%",
    },
    chipsContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: 300,
      padding: Theme.spacing(1),
    },
    chip: {
      margin: Theme.spacing(0.5),
    },
  });
});
function SelectOptionsInput(props) {
  var options = props.options,
    setValue = props.setValue;
  var classes = useStyles();
  var _a = react_1.useState(""),
    newOption = _a[0],
    setNewOption = _a[1];
  var handleAdd = function() {
    if (newOption !== "") {
      setValue("options", options.concat([newOption]));
      setNewOption("");
    }
  };
  var handleDelete = function(optionToDelete) {
    return function() {
      var newOptions = options.filter(function(option) {
        return option !== optionToDelete;
      });
      setValue("options", newOptions);
    };
  };
  react_1.useEffect(
    function() {
      setValue({ data: { options: options } });
    },
    [options]
  );
  return react_1.default.createElement(
    Grid_1.default,
    { container: true, direction: "column", className: classes.root },
    react_1.default.createElement(
      Grid_1.default,
      { item: true },
      react_1.default.createElement(TextField_1.default, {
        value: newOption,
        className: classes.field,
        label: "New Option",
        onChange: function(e) {
          setNewOption(e.target.value);
        },
        onKeyPress: function(e) {
          if (e.key === "Enter") {
            handleAdd();
          }
        },
        InputProps: {
          endAdornment: react_1.default.createElement(
            InputAdornment_1.default,
            { position: "end" },
            react_1.default.createElement(
              IconButton_1.default,
              {
                edge: "end",
                "aria-label": "toggle password visibility",
                onClick: function(e) {
                  handleAdd();
                },
              },
              react_1.default.createElement(AddCircle_1.default, null)
            )
          ),
        },
      })
    ),
    react_1.default.createElement(
      Grid_1.default,
      { item: true, className: classes.chipsContainer },
      options.map(function(option) {
        return react_1.default.createElement(Chip_1.default, {
          key: option,
          label: option,
          onDelete: handleDelete(option),
          className: classes.chip,
        });
      })
    )
  );
}
exports.default = SelectOptionsInput;
//# sourceMappingURL=SelectOptionsInput.js.map
