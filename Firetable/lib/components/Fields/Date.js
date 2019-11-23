"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var date_fns_1 = __importDefault(require("@date-io/date-fns"));
var styles_1 = require("@material-ui/core/styles");
var _1 = require(".");
var pickers_1 = require("@material-ui/pickers");
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    field: {
      width: "100%",
    },
  });
});
var Date = function(props) {
  var classes = useStyles();
  var value = props.value,
    row = props.row,
    onSubmit = props.onSubmit,
    fieldType = props.fieldType,
    isScrolling = props.isScrolling;
  function handleDateChange(date) {
    if (date) {
      onSubmit(date);
    }
  }
  return react_1.default.createElement(
    pickers_1.MuiPickersUtilsProvider,
    { utils: date_fns_1.default },
    fieldType === _1.FieldType.date
      ? react_1.default.createElement(pickers_1.DatePicker, {
          className: classes.field,
          value: value && value.toDate ? value.toDate() : null,
          onChange: handleDateChange,
          format: "dd/MM/yy",
          emptyLabel: "select a date",
        })
      : react_1.default.createElement(pickers_1.DateTimePicker, {
          value: value ? value.toDate() : null,
          onChange: handleDateChange,
          format: "dd/MM/yy HH:mm a",
          emptyLabel: "select a time",
        })
  );
};
exports.default = Date;
//# sourceMappingURL=Date.js.map
