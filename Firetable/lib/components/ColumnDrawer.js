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
var camelCase_1 = __importDefault(require("lodash/camelCase"));
var makeStyles_1 = __importDefault(
  require("@material-ui/core/styles/makeStyles")
);
var createStyles_1 = __importDefault(
  require("@material-ui/core/styles/createStyles")
);
var Drawer_1 = __importDefault(require("@material-ui/core/Drawer"));
var List_1 = __importDefault(require("@material-ui/core/List"));
var Divider_1 = __importDefault(require("@material-ui/core/Divider"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var ListItemIcon_1 = __importDefault(require("@material-ui/core/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var Fields_1 = require("./Fields");
var useStyles = makeStyles_1.default(function() {
  return createStyles_1.default({
    list: {
      width: 250,
    },
    fields: {
      paddingLeft: 15,
      paddingRight: 15,
    },
    fullList: {
      width: "auto",
    },
  });
});
function ColumnDrawer(props) {
  var addColumn = props.addColumn,
    columns = props.columns;
  var classes = useStyles();
  var _a = react_1.useState(false),
    drawerState = _a[0],
    toggleDrawer = _a[1];
  var _b = react_1.useState(""),
    columnName = _b[0],
    setColumnName = _b[1];
  var _c = react_1.useState(""),
    fieldName = _c[0],
    setFieldName = _c[1];
  react_1.useEffect(
    function() {
      setFieldName(camelCase_1.default(columnName));
    },
    [columnName]
  );
  var drawer = function() {
    return react_1.default.createElement(
      "div",
      { className: classes.list, role: "presentation", onClick: function() {} },
      react_1.default.createElement(
        List_1.default,
        { className: classes.fields },
        react_1.default.createElement(TextField_1.default, {
          autoFocus: true,
          onChange: function(e) {
            setColumnName(e.target.value);
          },
          margin: "dense",
          id: "name",
          label: "Column Name",
          type: "text",
          fullWidth: true,
        }),
        react_1.default.createElement(TextField_1.default, {
          value: fieldName,
          onChange: function(e) {
            setFieldName(e.target.value);
          },
          margin: "dense",
          id: "field",
          label: "Field Name",
          type: "text",
          fullWidth: true,
        })
      ),
      react_1.default.createElement(Divider_1.default, null),
      react_1.default.createElement(
        List_1.default,
        null,
        Fields_1.FIELDS.map(function(field) {
          return react_1.default.createElement(
            ListItem_1.default,
            {
              button: true,
              onClick: function() {
                addColumn(columnName, fieldName, field.type);
              },
              key: field.type,
            },
            react_1.default.createElement(
              ListItemIcon_1.default,
              null,
              field.icon
            ),
            react_1.default.createElement(ListItemText_1.default, {
              primary: field.name,
            })
          );
        })
      )
    );
  };
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(
      IconButton_1.default,
      {
        "aria-label": "add",
        onClick: function() {
          toggleDrawer(true);
        },
      },
      react_1.default.createElement(Add_1.default, null)
    ),
    react_1.default.createElement(
      Drawer_1.default,
      {
        anchor: "right",
        open: drawerState,
        onClose: function() {
          toggleDrawer(false);
        },
      },
      drawer()
    )
  );
}
exports.default = ColumnDrawer;
//# sourceMappingURL=ColumnDrawer.js.map
