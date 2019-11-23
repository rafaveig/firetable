"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var useTable_1 = __importDefault(require("./useTable"));
var useTableConfig_1 = __importDefault(require("./useTableConfig"));
var useFiretable = function(collectionName, filters) {
  var _a = useTableConfig_1.default(collectionName),
    tableConfig = _a[0],
    configActions = _a[1];
  var _b = useTable_1.default({
      path: collectionName,
      filters: filters,
    }),
    tableState = _b[0],
    tableActions = _b[1];
  var setTable = function(collectionName, filters) {
    if (collectionName !== tableState.path && filters !== tableState.filters) {
      configActions.setTable(collectionName);
      tableActions.setTable(collectionName, filters);
    }
  };
  var filterTable = function(filters) {};
  var state = {
    columns: tableConfig.columns,
    config: { rowHeight: tableConfig.rowHeight },
    rows: tableState.rows,
    rowsLimit: tableState.limit,
    loadingRows: tableState.loading,
    loadingColumns: tableConfig.loading,
  };
  var actions = {
    column: {
      add: configActions.add,
      resize: configActions.resize,
      rename: configActions.rename,
      update: configActions.updateColumn,
      remove: configActions.remove,
      reorder: configActions.reorder,
    },
    row: {
      add: tableActions.addRow,
      delete: tableActions.deleteRow,
      more: tableActions.moreRows,
    },
    table: {
      updateConfig: configActions.updateConfig,
      set: setTable,
      filter: filterTable,
      getFields: tableActions.getFields,
    },
  };
  return { tableState: state, tableActions: actions };
};
exports.default = useFiretable;
//# sourceMappingURL=index.js.map
