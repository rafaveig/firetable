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
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var DialogActions_1 = __importDefault(
  require("@material-ui/core/DialogActions")
);
var DialogContent_1 = __importDefault(
  require("@material-ui/core/DialogContent")
);
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var Box_1 = __importDefault(require("@material-ui/core/Box"));
var VisibilityOff_1 = __importDefault(
  require("@material-ui/icons/VisibilityOff")
);
var snackContext_1 = require("../contexts/snackContext");
var findIndex_1 = __importDefault(require("lodash/findIndex"));
var index_1 = require("./Fields/index");
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
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(4),
      width: 500,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    keyPair: {
      flexGrow: 2,
      display: "flex",
      justifyItems: "space-between",
    },
    cloudIcon: {
      fontSize: 64,
    },
    uploadContainer: {
      margin: "auto",
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
    },
    chip: {},
  });
});
function HiddenFields(props) {
  var columns = props.columns,
    collection = props.collection,
    getTableFields = props.getTableFields;
  var classes = useStyles();
  var tableFields = Object.keys(getTableFields());
  var unMappedFields = tableFields.filter(function(field) {
    return (
      findIndex_1.default(columns, function(column) {
        return column.key === field;
      }) === -1
    );
  });
  var _a = react_1.useState(false),
    open = _a[0],
    setOpen = _a[1];
  var snackContext = react_1.useContext(snackContext_1.SnackContext);
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(
      Button_1.default,
      { color: "secondary", onClick: handleClickOpen },
      "Hidden Fields ",
      react_1.default.createElement(VisibilityOff_1.default, null)
    ),
    react_1.default.createElement(
      Dialog_1.default,
      {
        open: open,
        onClose: handleClose,
        "aria-labelledby": "form-dialog-title",
      },
      react_1.default.createElement(
        DialogTitle_1.default,
        { id: "form-dialog-title" },
        "Hidden Fields"
      ),
      react_1.default.createElement(
        DialogContent_1.default,
        { className: classes.formControl },
        react_1.default.createElement(
          Grid_1.default,
          { container: true, direction: "column" },
          unMappedFields.map(function(field) {
            return react_1.default.createElement(
              Grid_1.default,
              {
                container: true,
                direction: "row",
                justify: "space-between",
                alignItems: "flex-end",
              },
              react_1.default.createElement(
                Typography_1.default,
                { variant: "body1" },
                field
              ),
              react_1.default.createElement(
                Box_1.default,
                { width: "30%" },
                react_1.default.createElement(TextField_1.default, {
                  label: "Column name",
                  name: "name",
                  onChange: function(e) {},
                })
              ),
              react_1.default.createElement(
                Box_1.default,
                { width: "30%" },
                react_1.default.createElement(
                  FormControl_1.default,
                  { className: classes.formControl },
                  react_1.default.createElement(
                    InputLabel_1.default,
                    { htmlFor: "Field-select" },
                    "Field Type"
                  ),
                  index_1.FieldsDropDown(null, function(props) {
                    console.log(props);
                  })
                )
              )
            );
          })
        )
      ),
      react_1.default.createElement(
        DialogActions_1.default,
        null,
        react_1.default.createElement(
          Button_1.default,
          { onClick: handleClose, color: "primary" },
          "Cancel"
        ),
        react_1.default.createElement(
          Button_1.default,
          { onClick: function() {}, color: "primary" },
          "Save"
        )
      )
    )
  );
}
exports.default = HiddenFields;
//# sourceMappingURL=HiddenFields.js.map
