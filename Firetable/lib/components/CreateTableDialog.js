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
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var camelCase_1 = __importDefault(require("lodash/camelCase"));
var useRouter_1 = __importDefault(require("../hooks/useRouter"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
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
var Fab_1 = __importDefault(require("@material-ui/core/Fab"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
function CreateTableDialog(props) {
  var router = useRouter_1.default();
  var classes = props.classes,
    createTable = props.createTable;
  var _a = react_1.default.useState(false),
    open = _a[0],
    setOpen = _a[1];
  var _b = react_1.useState(""),
    tableName = _b[0],
    setTableName = _b[1];
  var _c = react_1.useState(""),
    collectionName = _c[0],
    setCollectionName = _c[1];
  react_1.useEffect(
    function() {
      setCollectionName(camelCase_1.default(tableName));
    },
    [tableName]
  );
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setTableName("");
    setCollectionName("");
    setOpen(false);
  }
  function handleCreate() {
    createTable(tableName, collectionName);
    if (router.location.pathname === "/") {
      router.history.push("table/" + collectionName);
    } else {
      router.history.push(collectionName);
    }
    handleClose();
  }
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(
      Tooltip_1.default,
      { title: "Create a table" },
      react_1.default.createElement(
        Fab_1.default,
        {
          className: classes.fabButton,
          color: "secondary",
          "aria-label": "add",
          onClick: handleClickOpen,
        },
        react_1.default.createElement(Add_1.default, null)
      )
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
        "New table"
      ),
      react_1.default.createElement(
        DialogContent_1.default,
        null,
        react_1.default.createElement(
          DialogContentText_1.default,
          null,
          "Create a new Table"
        ),
        react_1.default.createElement(TextField_1.default, {
          autoFocus: true,
          onChange: function(e) {
            setTableName(e.target.value);
          },
          margin: "dense",
          id: "name",
          label: "Table Name",
          type: "email",
          fullWidth: true,
        }),
        react_1.default.createElement(TextField_1.default, {
          value: collectionName,
          onChange: function(e) {
            setCollectionName(e.target.value);
          },
          margin: "dense",
          id: "collection",
          label: "Collection Name",
          type: "email",
          fullWidth: true,
        })
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
          { onClick: handleCreate, color: "primary" },
          "Create"
        )
      )
    )
  );
}
exports.default = CreateTableDialog;
//# sourceMappingURL=CreateTableDialog.js.map
