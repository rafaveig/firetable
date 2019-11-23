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
var EmptyTable_1 = __importDefault(require("./EmptyTable"));
var grid_fns_1 = require("./grid-fns");
var react_data_grid_addons_1 = require("react-data-grid-addons");
var isEqual_1 = __importDefault(require("lodash/isEqual"));
var isEmpty_1 = __importDefault(require("lodash/isEmpty"));
var xorWith_1 = __importDefault(require("lodash/xorWith"));
require("bootstrap/dist/css/bootstrap.css");
var ReactDataGrid = react_1.lazy(function() {
  return Promise.resolve().then(function() {
    return __importStar(require("react-data-grid"));
  });
});
var DraggableContainer =
  react_data_grid_addons_1.DraggableHeader.DraggableContainer;
var Grid = function(props) {
  var onHeaderDrop = props.onHeaderDrop,
    rowHeight = props.rowHeight,
    columns = props.columns,
    RowRenderer = props.RowRenderer,
    handleRowGetter = props.handleRowGetter,
    tableHeight = props.tableHeight,
    onGridRowsUpdated = props.onGridRowsUpdated,
    rows = props.rows,
    resizeColumn = props.resizeColumn,
    loadingRows = props.loadingRows,
    addRow = props.addRow,
    setSelectedCell = props.setSelectedCell;
  return react_1.default.createElement(
    react_1.Suspense,
    {
      fallback: react_1.default.createElement("div", null, "Loading table..."),
    },
    react_1.default.createElement(
      DraggableContainer,
      { onHeaderDrop: onHeaderDrop },
      react_1.default.createElement(ReactDataGrid, {
        headerRowHeight: 45,
        rowRenderer: RowRenderer,
        rowHeight: rowHeight,
        columns: columns,
        enableCellSelect: true,
        rowGetter: handleRowGetter,
        rowsCount: rows.length,
        onGridRowsUpdated: onGridRowsUpdated,
        minHeight: tableHeight,
        onCellSelected: function(coordinates) {
          var row = rows[coordinates.rowIdx];
          var column = columns[coordinates.idx];
          if (grid_fns_1.editable(column.type)) {
            setSelectedCell({ row: row, column: column });
          }
        },
        onColumnResize: function(idx, width) {
          return resizeColumn(idx, width);
        },
        emptyRowsView: function() {
          return react_1.default.createElement(EmptyTable_1.default, {
            isLoading: loadingRows,
            tableHeight: tableHeight,
            addRow: addRow,
          });
        },
      })
    )
  );
};
exports.isArrayEqual = function(x, y) {
  return isEmpty_1.default(xorWith_1.default(x, y, isEqual_1.default));
};
exports.default = react_1.default.memo(Grid, function(prevProps, nextProps) {
  return (
    exports.isArrayEqual(prevProps.columns, nextProps.columns) &&
    exports.isArrayEqual(prevProps.rows, nextProps.rows)
  );
});
//# sourceMappingURL=Grid.js.map
