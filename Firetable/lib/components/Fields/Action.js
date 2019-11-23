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
var __rest =
  (this && this.__rest) ||
  function(s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)
        if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    return t;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var firebase_1 = require("../../firebase");
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: "none",
    },
  });
});
function Action(props) {
  var row = props.row,
    value = props.value,
    onSubmit = props.onSubmit;
  var classes = useStyles();
  var handleClick = function() {
    var createdAt = row.createdAt,
      rowHeight = row.rowHeight,
      id = row.id,
      ref = row.ref,
      docData = __rest(row, ["createdAt", "rowHeight", "id", "ref"]);
    onSubmit(true);
    firebase_1.db
      .collection("founders")
      .doc(id)
      .set(__assign({}, docData, { createdAt: new Date() }), { merge: true });
  };
  return react_1.default.createElement(
    Button_1.default,
    {
      variant: "outlined",
      onClick: handleClick,
      color: "primary",
      className: classes.button,
    },
    value ? "Sync to founders" : "Create Founder"
  );
}
exports.default = Action;
//# sourceMappingURL=Action.js.map
