"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var ImportCSV_1 = __importDefault(require("../ImportCSV"));
var ExportCSV_1 = __importDefault(require("../ExportCSV"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var styles_1 = require("@material-ui/core/styles");
var AddCircle_1 = __importDefault(require("@material-ui/icons/AddCircle"));
var HiddenFields_1 = __importDefault(require("../HiddenFields"));
var useStyles = styles_1.makeStyles(function(Theme) {
  return styles_1.createStyles({
    typography: {
      padding: 1,
    },
    tableHeader: {
      padding: 8,
      width: "100%",
      display: "flex",
      flex: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
    },
    tableActions: {
      display: "flex",
      flex: "wrap",
      alignContent: "center",
    },
    formControl: {
      margin: 2,
      minWidth: 120,
    },
  });
});
var TableHeader = function(props) {
  var collection = props.collection,
    rowHeight = props.rowHeight,
    updateConfig = props.updateConfig,
    columns = props.columns,
    addRow = props.addRow,
    filters = props.filters,
    getTableFields = props.getTableFields;
  var classes = useStyles();
  var columnsData = columns.map(function(column) {
    var key = column.key,
      name = column.name,
      config = column.config,
      type = column.type,
      hidden = column.hidden;
    return { key: key, name: name, config: config, type: type, hidden: hidden };
  });
  return react_1.default.createElement(
    "div",
    { className: classes.tableHeader },
    react_1.default.createElement(
      "div",
      null,
      react_1.default.createElement(
        Typography_1.default,
        { variant: "button" },
        collection
      ),
      react_1.default.createElement(
        FormControl_1.default,
        { variant: "outlined", className: classes.formControl },
        react_1.default.createElement(
          InputLabel_1.default,
          { htmlFor: "outlined-age-simple" },
          "Row Height"
        ),
        react_1.default.createElement(
          Select_1.default,
          {
            value: rowHeight ? rowHeight : 35,
            onChange: function(event, child) {
              updateConfig("rowHeight", event.target.value);
            },
            labelWidth: 90,
            inputProps: {
              name: "rowHeight",
              id: "outlined-rowHeight-simple",
            },
          },
          react_1.default.createElement(
            MenuItem_1.default,
            { value: 35, key: "rowHeight-35" },
            "Tall"
          ),
          react_1.default.createElement(
            MenuItem_1.default,
            { value: 60, key: "rowHeight-60" },
            "Grande"
          ),
          react_1.default.createElement(
            MenuItem_1.default,
            { value: 100, key: "rowHeight-100" },
            "Venti"
          ),
          react_1.default.createElement(
            MenuItem_1.default,
            { value: 150, key: "rowHeight-150" },
            "Trenta"
          )
        )
      )
    ),
    react_1.default.createElement(
      "div",
      { className: classes.tableActions },
      react_1.default.createElement(HiddenFields_1.default, {
        getTableFields: getTableFields,
        collection: collection,
        columns: columnsData,
      }),
      react_1.default.createElement(ExportCSV_1.default, {
        columns: columnsData,
        collection: collection,
        filters: filters,
      }),
      react_1.default.createElement(ImportCSV_1.default, {
        columns: columns,
        addRow: addRow,
      }),
      react_1.default.createElement(
        Button_1.default,
        {
          color: "secondary",
          onClick: function() {
            addRow();
          },
        },
        "Add Row",
        react_1.default.createElement(AddCircle_1.default, null)
      )
    )
  );
};
exports.default = TableHeader;
//# sourceMappingURL=TableHeader.js.map
