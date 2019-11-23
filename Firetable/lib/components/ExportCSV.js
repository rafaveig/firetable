"use strict";
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
var DialogActions_1 = __importDefault(
  require("@material-ui/core/DialogActions")
);
var DialogContent_1 = __importDefault(
  require("@material-ui/core/DialogContent")
);
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var styles_1 = require("@material-ui/core/styles");
var Input_1 = __importDefault(require("@material-ui/core/Input"));
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var CloudDownload_1 = __importDefault(
  require("@material-ui/icons/CloudDownload")
);
var callables_1 = require("../firebase/callables");
var file_saver_1 = require("file-saver");
var snackContext_1 = require("../contexts/snackContext");
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
      margin: theme.spacing(1),
      width: 400,
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
function ExportCSV(props) {
  var columns = props.columns,
    collection = props.collection,
    filters = props.filters;
  var classes = useStyles();
  var _a = react_1.useState(false),
    open = _a[0],
    setOpen = _a[1];
  var _b = react_1.useState([]),
    csvColumns = _b[0],
    setCSVColumns = _b[1];
  var snackContext = react_1.useContext(snackContext_1.SnackContext);
  var handleChange = function(event) {
    setCSVColumns(event.target.value);
  };
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
    setCSVColumns([]);
  }
  function handleExport(columns) {
    return __awaiter(this, void 0, void 0, function() {
      var data, blob;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            handleClose();
            snackContext.open({
              message: "preparing file, download will start shortly",
              duration: 5000,
            });
            return [
              4,
              callables_1.exportTable({
                collectionPath: collection,
                filters: filters,
                columns: columns,
              }),
            ];
          case 1:
            data = _a.sent();
            blob = new Blob([data.data], {
              type: "text/csv;charset=utf-8",
            });
            file_saver_1.saveAs(blob, collection + ".csv");
            return [2];
        }
      });
    });
  }
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(
      Button_1.default,
      { color: "secondary", onClick: handleClickOpen },
      "Export CSV ",
      react_1.default.createElement(CloudDownload_1.default, null)
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
        "Export table into CSV"
      ),
      react_1.default.createElement(
        DialogContent_1.default,
        null,
        react_1.default.createElement(
          FormControl_1.default,
          { className: classes.formControl },
          react_1.default.createElement(
            InputLabel_1.default,
            { id: "column-chip-label" },
            "Exportable columns"
          ),
          react_1.default.createElement(
            Select_1.default,
            {
              id: "column-chip",
              multiple: true,
              value: csvColumns,
              onChange: handleChange,
              input: react_1.default.createElement(Input_1.default, {
                id: "select-multiple-chip",
              }),
              renderValue: function(selected) {
                return react_1.default.createElement(
                  "div",
                  { className: classes.chips },
                  selected.map(function(value) {
                    return react_1.default.createElement(Chip_1.default, {
                      key: value.key,
                      label: value.name,
                      className: classes.chip,
                    });
                  })
                );
              },
              MenuProps: MenuProps,
            },
            columns.map(function(column) {
              return react_1.default.createElement(
                MenuItem_1.default,
                { key: column.key, value: column },
                column.name
              );
            })
          )
        ),
        react_1.default.createElement(
          Button_1.default,
          {
            onClick: function() {
              setCSVColumns(columns);
            },
          },
          "Export All Columns"
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
          {
            onClick: function() {
              handleExport(csvColumns);
            },
            disabled: csvColumns.length === 0,
            color: "primary",
          },
          "Export"
        )
      )
    )
  );
}
exports.default = ExportCSV;
//# sourceMappingURL=ExportCSV.js.map
