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
var react_1 = require("react");
var useDoc_1 = __importStar(require("../useDoc"));
var camelCase_1 = __importDefault(require("lodash/camelCase"));
var findIndex_1 = __importDefault(require("lodash/findIndex"));
var fns_1 = require("../../util/fns");
var useTableConfig = function(tablePath) {
  var _a = useDoc_1.default({
      path: tablePath + "/_FIRETABLE_",
    }),
    tableConfigState = _a[0],
    documentDispatch = _a[1];
  react_1.useEffect(
    function() {
      var doc = tableConfigState.doc,
        columns = tableConfigState.columns;
      if (doc && columns !== doc.columns) {
        documentDispatch({ columns: doc.columns, rowHeight: doc.rowHeight });
      }
    },
    [tableConfigState.doc]
  );
  var setTable = function(table) {
    documentDispatch({
      path: table + "/_FIRETABLE_",
      columns: [],
      doc: null,
      loading: true,
    });
  };
  var add = function(name, type, data) {
    var columns = tableConfigState.columns;
    var key = camelCase_1.default(name);
    documentDispatch({
      action: useDoc_1.DocActions.update,
      data: {
        columns: columns.concat([
          __assign({ name: name, key: key, type: type }, data),
        ]),
      },
    });
  };
  var resize = function(index, width) {
    var columns = tableConfigState.columns;
    columns[index].width = width;
    documentDispatch({
      action: useDoc_1.DocActions.update,
      data: { columns: columns },
    });
  };
  var updateColumn = function(index, updatables) {
    var columns = tableConfigState.columns;
    updatables.forEach(function(updatable) {
      columns[index][updatable.field] = updatable.value;
    });
    documentDispatch({
      action: useDoc_1.DocActions.update,
      data: { columns: columns },
    });
  };
  var remove = function(index) {
    var columns = tableConfigState.columns;
    columns.splice(index, 1);
    documentDispatch({
      action: useDoc_1.DocActions.update,
      data: { columns: columns },
    });
  };
  var reorder = function(draggedColumnKey, droppedColumnKey) {
    var columns = tableConfigState.columns;
    var draggedColumnIndex = findIndex_1.default(columns, [
      "key",
      draggedColumnKey,
    ]);
    var droppedColumnIndex = findIndex_1.default(columns, [
      "key",
      droppedColumnKey,
    ]);
    var reorderedColumns = columns.slice();
    fns_1.arrayMover(reorderedColumns, draggedColumnIndex, droppedColumnIndex);
    documentDispatch({
      action: useDoc_1.DocActions.update,
      data: { columns: reorderedColumns },
    });
  };
  var updateConfig = function(key, value) {
    var _a;
    documentDispatch({
      action: useDoc_1.DocActions.update,
      data: ((_a = {}), (_a[key] = value), _a),
    });
  };
  var actions = {
    updateColumn: updateColumn,
    updateConfig: updateConfig,
    add: add,
    resize: resize,
    setTable: setTable,
    remove: remove,
    reorder: reorder,
  };
  return [tableConfigState, actions];
};
exports.default = useTableConfig;
//# sourceMappingURL=useTableConfig.js.map
