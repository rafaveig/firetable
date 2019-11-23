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
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var tablesContext_1 = __importDefault(
  require("../../../contexts/tablesContext")
);
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var useTableConfig_1 = __importDefault(
  require("../../../hooks/useFiretable/useTableConfig")
);
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
var Input_1 = __importDefault(require("@material-ui/core/Input"));
var useStyles = styles_1.makeStyles(function(Theme) {
  return styles_1.createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      maxWidth: 300,
      padding: Theme.spacing(1),
    },
    chip: {
      margin: Theme.spacing(0.5),
    },
    formControl: {
      margin: Theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
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
function DocInput(props) {
  var collectionPath = props.collectionPath,
    setValue = props.setValue;
  var _a = useTableConfig_1.default(
      collectionPath ? collectionPath : "initial"
    ),
    tableConfig = _a[0],
    tableConfigActions = _a[1];
  var _b = react_1.useState([]),
    columns = _b[0],
    setColumns = _b[1];
  var _c = react_1.useState([]),
    primaryKeys = _c[0],
    setPrimaryKeys = _c[1];
  var _d = react_1.useState([]),
    secondaryKeys = _d[0],
    setSecondaryKeys = _d[1];
  react_1.useEffect(
    function() {
      setColumns(tableConfig.columns);
    },
    [tableConfig.columns]
  );
  var classes = useStyles();
  var tables = react_1.useContext(tablesContext_1.default);
  var onChange = function(e, v) {
    setValue("collectionPath", v.props.value);
    setPrimaryKeys([]);
    setSecondaryKeys([]);
    setColumns([]);
    tableConfigActions.setTable(v.props.value);
  };
  react_1.useEffect(
    function() {
      setValue("config", {
        primaryKeys: primaryKeys,
        secondaryKeys: secondaryKeys,
      });
    },
    [primaryKeys, secondaryKeys]
  );
  if (tables.value)
    return react_1.default.createElement(
      react_1.default.Fragment,
      null,
      react_1.default.createElement(
        FormControl_1.default,
        { className: classes.formControl },
        react_1.default.createElement(
          InputLabel_1.default,
          { htmlFor: "select-secondary-multiple-chip" },
          "Table"
        ),
        react_1.default.createElement(
          Select_1.default,
          {
            value: collectionPath ? collectionPath : null,
            onChange: onChange,
            id: "select-key",
            inputProps: {
              name: "Table",
              id: "table",
            },
          },
          tables.value.map(function(table) {
            return react_1.default.createElement(
              MenuItem_1.default,
              {
                id: "select-collection-" + table.collection,
                value: table.collection,
              },
              react_1.default.createElement(
                react_1.default.Fragment,
                null,
                table.collection
              )
            );
          })
        )
      ),
      collectionPath
        ? react_1.default.createElement(
            react_1.default.Fragment,
            null,
            react_1.default.createElement(
              FormControl_1.default,
              { className: classes.formControl },
              react_1.default.createElement(
                InputLabel_1.default,
                { htmlFor: "select-primary-multiple-chip" },
                "Primary Text"
              ),
              react_1.default.createElement(
                Select_1.default,
                {
                  multiple: true,
                  value: primaryKeys,
                  onChange: function(event) {
                    setPrimaryKeys(event.target.value);
                  },
                  input: react_1.default.createElement(Input_1.default, {
                    id: "select-primary-multiple-chip",
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
                columns &&
                  columns.length !== 0 &&
                  columns.map(function(column) {
                    return react_1.default.createElement(
                      MenuItem_1.default,
                      {
                        id: "select-primary-column-" + column.key,
                        key: column.key,
                        value: column.key,
                      },
                      column.name
                    );
                  })
              )
            ),
            react_1.default.createElement(
              FormControl_1.default,
              { className: classes.formControl },
              react_1.default.createElement(
                InputLabel_1.default,
                { htmlFor: "select-secondary-multiple-chip" },
                "Secondary Text"
              ),
              react_1.default.createElement(
                Select_1.default,
                {
                  multiple: true,
                  value: secondaryKeys,
                  onChange: function(event) {
                    setSecondaryKeys(event.target.value);
                  },
                  input: react_1.default.createElement(Input_1.default, {
                    id: "select-secondary-multiple-chip",
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
                columns &&
                  columns.length !== 0 &&
                  columns.map(function(column) {
                    return react_1.default.createElement(
                      MenuItem_1.default,
                      {
                        id: "select-secondary-column-" + column.key,
                        key: column.key,
                        value: column.key,
                      },
                      column.name
                    );
                  })
              )
            )
          )
        : "please select a table"
    );
  else return react_1.default.createElement("div", null);
}
exports.default = DocInput;
//# sourceMappingURL=DocInput.js.map
