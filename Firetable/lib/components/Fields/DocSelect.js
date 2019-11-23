"use strict";
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var AddCircle_1 = __importDefault(require("@material-ui/icons/AddCircle"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var styles_1 = require("@material-ui/core/styles");
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var snapshotReducer = function(accumulator, currentValue) {};
var getPrimaryValue = function(config) {};
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
    },
    typography: {
      padding: theme.spacing(2),
    },
    textArea: {
      fontSize: 14,
      minWidth: 230,
    },
    paper: { minWidth: 200 },
    chip: {
      margin: theme.spacing(1),
    },
  });
});
var DocSelect = function(props) {
  var value = props.value,
    row = props.row,
    onSubmit = props.onSubmit,
    collectionPath = props.collectionPath,
    config = props.config,
    setSearch = props.setSearch;
  var classes = useStyles();
  var handleClick = function(event) {
    setSearch(function(oldValues) {
      return __assign({}, oldValues, {
        collection: collectionPath,
        config: config,
        onSubmit: function(newItem) {
          if (value) onSubmit(value.concat([newItem]));
          else onSubmit([newItem]);
        },
      });
    });
  };
  var handleDelete = function(index) {
    var newValue = value.slice();
    newValue.splice(index, 1);
    onSubmit(newValue);
  };
  return react_1.default.createElement(
    "div",
    { className: classes.root },
    react_1.default.createElement(
      IconButton_1.default,
      { onClick: handleClick },
      react_1.default.createElement(AddCircle_1.default, null)
    ),
    value &&
      value.map(function(doc, index) {
        return react_1.default.createElement(Chip_1.default, {
          key: doc.docPath,
          label: config.primaryKeys.map(function(key) {
            return doc.snapshot[key] + " ";
          }),
          onDelete: function() {
            handleDelete(index);
          },
          className: classes.chip,
        });
      })
  );
};
exports.default = DocSelect;
//# sourceMappingURL=DocSelect.js.map
