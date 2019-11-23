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
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : new P(function(resolve) {
              resolve(result.value);
            }).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function() {
          return this;
        }),
      g
    );
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var useFiretable_1 = __importDefault(require("../../hooks/useFiretable"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Fields_1 = require("../Fields");
var firebase_1 = require("../../firebase");
var grid_fns_1 = require("./grid-fns");
var callables_1 = require("../../firebase/callables");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var AddCircle_1 = __importDefault(require("@material-ui/icons/AddCircle"));
var Settings_1 = __importDefault(require("@material-ui/icons/Settings"));
var useWindowSize_1 = __importDefault(require("../../hooks/useWindowSize"));
var Confirmation_1 = __importDefault(require("../Confirmation"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var FileCopy_1 = __importDefault(require("@material-ui/icons/FileCopy"));
var useStyle_1 = __importDefault(require("./useStyle"));
var Grid_1 = __importDefault(require("./Grid"));
var Tooltip_1 = __importDefault(require("@material-ui/core/Tooltip"));
var Hotkeys = react_1.lazy(function() {
  return Promise.resolve().then(function() {
    return __importStar(require("./HotKeys"));
  });
});
var TableHeader = react_1.lazy(function() {
  return Promise.resolve().then(function() {
    return __importStar(require("./TableHeader"));
  });
});
var SearchBox = react_1.lazy(function() {
  return Promise.resolve().then(function() {
    return __importStar(require("../SearchBox"));
  });
});
var DocSelect = react_1.lazy(function() {
  return Promise.resolve().then(function() {
    return __importStar(require("../Fields/DocSelect"));
  });
});
var ColumnEditor = react_1.lazy(function() {
  return Promise.resolve().then(function() {
    return __importStar(require("./ColumnEditor/index"));
  });
});
var deleteAlgoliaRecord = firebase_1.functions.httpsCallable(
  callables_1.CLOUD_FUNCTIONS.deleteAlgoliaRecord
);
function Table(props) {
  var _this = this;
  var collection = props.collection,
    filters = props.filters;
  var _a = useFiretable_1.default(collection, filters),
    tableState = _a.tableState,
    tableActions = _a.tableActions;
  var _b = react_1.useState({
      row: {},
      column: {},
    }),
    selectedCell = _b[0],
    setSelectedCell = _b[1];
  var _c = react_1.useState({
      config: undefined,
      collection: "",
      onSubmit: undefined,
    }),
    search = _c[0],
    setSearch = _c[1];
  var size = useWindowSize_1.default();
  react_1.useEffect(
    function() {
      tableActions.table.set(collection, filters);
    },
    [collection, filters]
  );
  var classes = useStyle_1.default();
  var _d = react_1.useState(null),
    anchorEl = _d[0],
    setAnchorEl = _d[1];
  var _e = react_1.useState(),
    header = _e[0],
    setHeader = _e[1];
  var handleCloseHeader = function() {
    setHeader(null);
    setAnchorEl(null);
  };
  var clearSearch = function() {
    setSearch({
      config: undefined,
      collection: "",
      onSubmit: undefined,
    });
  };
  var docSelect = function(column) {
    return function(props) {
      return react_1.default.createElement(
        react_1.Suspense,
        { fallback: react_1.default.createElement("div", null) },
        react_1.default.createElement(
          DocSelect,
          __assign({}, props, {
            onSubmit: grid_fns_1.onSubmit(column.key, props.row),
            collectionPath: column.collectionPath,
            config: column.config,
            setSearch: setSearch,
          })
        )
      );
    };
  };
  var handleClick = function(headerProps) {
    return function(event) {
      handleCloseHeader();
      setAnchorEl(event.currentTarget);
      setHeader(headerProps);
    };
  };
  var headerRenderer = function(props) {
    var column = props.column;
    switch (column.key) {
      case "new":
        return react_1.default.createElement(
          "div",
          { className: classes.header },
          column.name,
          react_1.default.createElement(
            IconButton_1.default,
            { size: "small", onClick: handleClick(props) },
            react_1.default.createElement(AddCircle_1.default, null)
          )
        );
      default:
        return react_1.default.createElement(
          Tooltip_1.default,
          { title: props.column.key },
          react_1.default.createElement(
            "div",
            { className: classes.header },
            react_1.default.createElement(
              "div",
              { className: classes.headerLabel, onClick: function() {} },
              Fields_1.getFieldIcon(props.column.type),
              react_1.default.createElement(
                Typography_1.default,
                { variant: "button" },
                props.column.name
              )
            ),
            react_1.default.createElement(
              IconButton_1.default,
              {
                disableFocusRipple: true,
                size: "small",
                onClick: handleClick(props),
              },
              react_1.default.createElement(Settings_1.default, null)
            )
          )
        );
    }
  };
  var onHeaderDrop = function(dragged, target) {
    tableActions.column.reorder(dragged, target);
  };
  var columns = [];
  if (!tableState.loadingColumns && tableState.columns) {
    columns = tableState.columns
      .filter(function(column) {
        return !column.hidden;
      })
      .map(function(column) {
        return __assign(
          {
            width: 220,
            draggable: true,
            editable: grid_fns_1.editable(column.type),
            resizable: true,
            headerRenderer: headerRenderer,
            formatter:
              column.type === Fields_1.FieldType.documentSelect
                ? docSelect(column)
                : grid_fns_1.cellFormatter(column),
            editor:
              column.type === Fields_1.FieldType.singleSelect
                ? grid_fns_1.singleSelectEditor(column.options)
                : false,
          },
          column
        );
      });
    columns.push({
      isNew: true,
      key: "new",
      name: "Add column",
      type: Fields_1.FieldType.last,
      width: 160,
      headerRenderer: headerRenderer,
      formatter: function(props) {
        return react_1.default.createElement(
          react_1.default.Fragment,
          null,
          react_1.default.createElement(
            Confirmation_1.default,
            {
              message: {
                title: "Delete  Row",
                body: "Are you sure you want to delete this row",
                confirm: react_1.default.createElement(
                  react_1.default.Fragment,
                  null,
                  react_1.default.createElement(Delete_1.default, null),
                  " Delete"
                ),
              },
            },
            react_1.default.createElement(
              IconButton_1.default,
              {
                color: "primary",
                onClick: function() {
                  return __awaiter(_this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                      switch (_a.label) {
                        case 0:
                          props.row.ref.delete();
                          return [
                            4,
                            deleteAlgoliaRecord({
                              id: props.row.ref.id,
                              collection: props.row.ref.parent.path,
                            }),
                          ];
                        case 1:
                          _a.sent();
                          return [2];
                      }
                    });
                  });
                },
              },
              react_1.default.createElement(Delete_1.default, null)
            )
          ),
          react_1.default.createElement(
            IconButton_1.default,
            {
              color: "secondary",
              onClick: function() {
                var clonedRow = __assign({}, props.row);
                delete clonedRow.ref;
                delete clonedRow.rowHeight;
                delete clonedRow.updatedAt;
                delete clonedRow.createdAt;
                tableActions.row.add(clonedRow);
              },
            },
            react_1.default.createElement(FileCopy_1.default, null)
          )
        );
      },
    });
  }
  var tableHeight = size.height ? size.height - 142 : 500;
  var rowHeight = tableState.config.rowHeight;
  var rows =
    tableState.rows.length !== 0
      ? tableState.rows
          .map(function(row) {
            return __assign({ rowHeight: rowHeight }, row);
          })
          .concat([{}])
      : [];
  var RowRenderer = function(props) {
    var renderBaseRow = props.renderBaseRow,
      rest = __rest(props, ["renderBaseRow"]);
    if (rows.length === rest.idx + 1) {
      return react_1.default.createElement(
        Button_1.default,
        {
          onClick: function() {
            addRow();
          },
        },
        "Add a new row"
      );
    } else {
      return renderBaseRow(rest);
    }
  };
  var handleRowGetter = function(index) {
    if (tableState.rowsLimit - index === 1) {
      tableActions.row.more();
    }
    return rows[index];
  };
  var addRow = function(data) {
    if (filters) {
      var filtersData = filters.reduce(function(accumulator, currentValue) {
        var _a;
        return __assign(
          {},
          accumulator,
          ((_a = {}), (_a[currentValue.key] = currentValue.value), _a)
        );
      }, {});
      tableActions.row.add(__assign({}, filtersData, data));
    } else tableActions.row.add(__assign({}, data));
  };
  return react_1.default.createElement(
    react_1.default.Fragment,
    null,
    react_1.default.createElement(
      react_1.Suspense,
      {
        fallback: react_1.default.createElement(
          "div",
          null,
          "Loading header..."
        ),
      },
      react_1.default.createElement(Hotkeys, { selectedCell: selectedCell }),
      react_1.default.createElement(TableHeader, {
        getTableFields: tableActions.table.getFields,
        collection: collection,
        rowHeight: rowHeight,
        updateConfig: tableActions.table.updateConfig,
        columns: columns,
        filters: filters,
        addRow: addRow,
      })
    ),
    " ",
    !tableState.loadingColumns
      ? react_1.default.createElement(Grid_1.default, {
          key: collection + "-grid",
          onHeaderDrop: onHeaderDrop,
          rowHeight: rowHeight,
          columns: columns,
          RowRenderer: RowRenderer,
          handleRowGetter: handleRowGetter,
          tableHeight: tableHeight,
          onGridRowsUpdated: grid_fns_1.onGridRowsUpdated,
          rows: rows,
          resizeColumn: tableActions.column.resize,
          loadingRows: tableState.loadingRows,
          addRow: addRow,
          setSelectedCell: setSelectedCell,
        })
      : react_1.default.createElement("p", null, "fetching columns"),
    react_1.default.createElement(
      react_1.Suspense,
      {
        fallback: react_1.default.createElement(
          "div",
          null,
          "Loading helpers..."
        ),
      },
      react_1.default.createElement(ColumnEditor, {
        handleClose: handleCloseHeader,
        anchorEl: anchorEl,
        column: header && header.column,
        actions: tableActions.column,
      }),
      react_1.default.createElement(SearchBox, {
        searchData: search,
        clearSearch: clearSearch,
      })
    )
  );
}
exports.default = Table;
//# sourceMappingURL=index.js.map
