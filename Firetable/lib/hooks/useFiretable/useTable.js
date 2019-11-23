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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = require("../../firebase");
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var react_1 = __importStar(require("react"));
var equals_1 = __importDefault(require("ramda/es/equals"));
var app_1 = __importDefault(require("firebase/app"));
var callables_1 = require("../../firebase/callables");
var snackContext_1 = require("../../contexts/snackContext");
var CAP = 1000;
var tableReducer = function(prevState, newProps) {
  return __assign({}, prevState, newProps);
};
var tableInitialState = {
  rows: [],
  prevFilters: null,
  prevPath: null,
  path: null,
  filters: [],
  prevLimit: 0,
  limit: 20,
  loading: true,
  sort: { field: "createdAt", direction: "asc" },
  cap: CAP,
};
var useTable = function(initialOverrides) {
  var snackContext = react_1.useContext(snackContext_1.SnackContext);
  var _a = react_1.useReducer(
      tableReducer,
      __assign({}, tableInitialState, initialOverrides)
    ),
    tableState = _a[0],
    tableDispatch = _a[1];
  var getRows = function(filters, limit, sort) {
    if (tableState.prevPath && tableState.path !== tableState.prevPath) {
      tableState.unsubscribe();
    }
    tableDispatch({
      prevFilters: filters,
      prevLimit: limit,
      prevPath: tableState.path,
      loading: true,
    });
    var query = firebase_1.db.collection(tableState.path);
    filters.forEach(function(filter) {
      query = query.where(filter.key, filter.operator, filter.value);
    });
    if (sort) {
      if (Array.isArray(sort)) {
        sort.forEach(function(order) {
          query = query.orderBy(order.field, order.direction);
        });
      } else {
        query = query.orderBy(sort.field, sort.direction);
      }
    }
    var unsubscribe = query.limit(limit).onSnapshot(
      function(snapshot) {
        if (snapshot.docs.length > 0) {
          var rows = snapshot.docs
            .map(function(doc) {
              var data = doc.data();
              var id = doc.id;
              var ref = doc.ref;
              return __assign({}, data, { id: id, ref: ref });
            })
            .filter(function(doc) {
              return doc.id !== "_FIRETABLE_";
            });
          tableDispatch({
            rows: rows,
            loading: false,
          });
        } else {
          tableDispatch({
            rows: [],
            loading: false,
          });
        }
      },
      function(error) {
        if (error.message.includes("indexes?create_composite=")) {
          var url_1 =
            "https://console.firebase.google.com/project/" +
            process.env.REACT_APP_FIREBASE_PROJECT_NAME +
            "/database/firestore/" +
            "indexes?create_composite=" +
            error.message.split("indexes?create_composite=")[1];
          console.log(url_1);
          snackContext.open({
            message: "needs a new index",
            duration: 10000,
            action: react_1.default.createElement(
              Button_1.default,
              {
                color: "secondary",
                onClick: function() {
                  window.open(url_1, "_blank");
                },
              },
              "create"
            ),
          });
        }
      }
    );
    tableDispatch({ unsubscribe: unsubscribe });
  };
  react_1.useEffect(
    function() {
      var prevFilters = tableState.prevFilters,
        filters = tableState.filters,
        prevLimit = tableState.prevLimit,
        limit = tableState.limit,
        prevPath = tableState.prevPath,
        path = tableState.path,
        sort = tableState.sort,
        unsubscribe = tableState.unsubscribe;
      if (
        !equals_1.default(prevFilters, filters) ||
        prevLimit !== limit ||
        prevPath !== path
      ) {
        if (path) getRows(filters, limit, sort);
      }
      return function() {
        if (unsubscribe) {
          tableState.unsubscribe();
        }
      };
    },
    [tableState.filters, tableState.limit, tableState.path]
  );
  var deleteRow = function(rowIndex, documentId) {
    tableState.rows.splice(rowIndex, 1);
    tableDispatch({ rows: tableState.rows });
    firebase_1.db
      .collection(tableState.path)
      .doc(documentId)
      .delete();
  };
  var setTable = function(tableCollection, filters) {
    if (tableCollection !== tableState.path) {
      tableDispatch({ path: tableCollection, rows: [] });
    }
    if (filters) tableDispatch({ filters: filters });
  };
  var addRow = function(data) {
    return __awaiter(_this, void 0, void 0, function() {
      var ref;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [
              4,
              firebase_1.db
                .collection(tableState.path)
                .add(
                  __assign(
                    {
                      createdAt: app_1.default.firestore.FieldValue.serverTimestamp(),
                      updatedAt: app_1.default.firestore.FieldValue.serverTimestamp(),
                    },
                    data
                  )
                ),
            ];
          case 1:
            ref = _a.sent();
            if (data) {
              callables_1.algoliaUpdateDoc({
                collection: ref.parent.path,
                id: ref.id,
                doc: __assign({}, data),
              });
            }
            return [2];
        }
      });
    });
  };
  var moreRows = function(additionalRows) {
    tableDispatch({
      limit: tableState.limit + (additionalRows ? additionalRows : 20),
    });
  };
  var getFields = function() {
    var fields = tableState.rows.reduce(function(_fields, currentRow) {
      var currentRowFields = Object.keys(currentRow);
      currentRowFields.forEach(function(fieldKey) {
        if (_fields[fieldKey]) _fields[fieldKey].count -= -1;
        else
          _fields[fieldKey] = {
            count: 1,
            type: typeof currentRow[fieldKey],
          };
      });
      return _fields;
    }, {});
    delete fields.ref;
    return fields;
  };
  var tableActions = {
    deleteRow: deleteRow,
    setTable: setTable,
    addRow: addRow,
    moreRows: moreRows,
    getFields: getFields,
  };
  return [tableState, tableActions];
};
exports.default = useTable;
//# sourceMappingURL=useTable.js.map
