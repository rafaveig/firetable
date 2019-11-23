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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var DialogActions_1 = __importDefault(
  require("@material-ui/core/DialogActions")
);
var DialogContent_1 = __importDefault(
  require("@material-ui/core/DialogContent")
);
var DialogContentText_1 = __importDefault(
  require("@material-ui/core/DialogContentText")
);
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    dryWrapper: {},
    dryField: {},
  });
});
var Confirmation = function(props) {
  var children = props.children,
    message = props.message,
    confirmationCommand = props.confirmationCommand;
  var classes = useStyles();
  var _a = react_1.useState(false),
    showDialog = _a[0],
    setShowDialog = _a[1];
  var _b = react_1.useState(""),
    dryText = _b[0],
    setDryText = _b[1];
  var handleClose = function() {
    setShowDialog(false);
  };
  var confirmHandler = children.props.onClick;
  var button = react_1.default.cloneElement(children, {
    onClick: function() {
      setShowDialog(true);
    },
  });
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    button,
    react_1.default.createElement(
      Dialog_1.default,
      { open: showDialog, onClose: handleClose },
      react_1.default.createElement(
        DialogTitle_1.default,
        null,
        (message && message.title) || "Are you sure?"
      ),
      message &&
        react_1.default.createElement(
          DialogContent_1.default,
          null,
          message.customBody,
          message.body &&
            react_1.default.createElement(
              DialogContentText_1.default,
              null,
              message.body
            ),
          confirmationCommand &&
            react_1.default.createElement(
              "div",
              { className: classes.dryWrapper },
              react_1.default.createElement(
                DialogContentText_1.default,
                null,
                "Type ",
                confirmationCommand,
                " below to continue:"
              ),
              react_1.default.createElement(TextField_1.default, {
                value: dryText,
                variant: "filled",
                onChange: function(e) {
                  setDryText(e.target.value);
                },
                className: classes.dryField,
                InputProps: { disableUnderline: true },
                autoFocus: true,
                margin: "dense",
                label: confirmationCommand,
                fullWidth: true,
              })
            )
        ),
      react_1.default.createElement(
        DialogActions_1.default,
        null,
        react_1.default.createElement(
          Button_1.default,
          { onClick: handleClose, color: "primary" },
          (message && message.cancel) || "Cancel"
        ),
        react_1.default.createElement(
          Button_1.default,
          {
            onClick: function() {
              confirmHandler();
              handleClose();
            },
            color: "primary",
            variant: "contained",
            autoFocus: true,
            disabled: confirmationCommand
              ? dryText !== confirmationCommand
              : false,
          },
          (message && message.confirm) || "Confirm"
        )
      )
    )
  );
};
exports.default = Confirmation;
//# sourceMappingURL=Confirmation.js.map
