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
var react_dropzone_1 = require("react-dropzone");
var csv_parse_1 = __importDefault(require("csv-parse"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var DialogActions_1 = __importDefault(
  require("@material-ui/core/DialogActions")
);
var DialogContent_1 = __importDefault(
  require("@material-ui/core/DialogContent")
);
var DialogTitle_1 = __importDefault(require("@material-ui/core/DialogTitle"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var Select_1 = __importDefault(require("@material-ui/core/Select"));
var FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
var InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
var MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
var PlaylistAdd_1 = __importDefault(require("@material-ui/icons/PlaylistAdd"));
var TrendingFlatOutlined_1 = __importDefault(
  require("@material-ui/icons/TrendingFlatOutlined")
);
var Add_1 = __importDefault(require("@material-ui/icons/Add"));
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var styles_1 = require("@material-ui/core/styles");
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var CloudUpload_1 = __importDefault(require("@material-ui/icons/CloudUpload"));
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
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
  });
});
function ImportCSV(props) {
  var _this = this;
  var columns = props.columns,
    addRow = props.addRow;
  var classes = useStyles();
  var _a = react_1.useState(false),
    open = _a[0],
    setOpen = _a[1];
  var _b = react_1.useState([]),
    csvKeys = _b[0],
    setCsvKeys = _b[1];
  var _c = react_1.useState([]),
    keyPairs = _c[0],
    setKeyPairs = _c[1];
  var _d = react_1.useState(),
    csvKey = _d[0],
    setCsvKey = _d[1];
  var _e = react_1.useState(),
    columnKey = _e[0],
    setColumnKey = _e[1];
  var _f = react_1.useState([]),
    csvData = _f[0],
    setCsvData = _f[1];
  var onDrop = react_1.useCallback(function(acceptedFiles) {
    return __awaiter(_this, void 0, void 0, function() {
      var file, reader;
      return __generator(this, function(_a) {
        file = acceptedFiles[0];
        reader = new FileReader();
        reader.onload = function(event) {
          var csvString = event.target.result;
          csv_parse_1.default(csvString, {}, function(err, output) {
            var keys = output.shift();
            setCsvData(output);
            setCsvKeys(keys);
          });
        };
        reader.readAsText(file);
        return [2];
      });
    });
  }, []);
  var _g = react_dropzone_1.useDropzone({
      onDrop: onDrop,
      multiple: false,
    }),
    getRootProps = _g.getRootProps,
    getInputProps = _g.getInputProps,
    isDragActive = _g.isDragActive;
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
    setKeyPairs([]);
    setCsvKeys([]);
    setCsvKey(null);
    setColumnKey(null);
  }
  function handleImport() {
    var newDocs = csvData.map(function(row) {
      var docData = {};
      keyPairs.forEach(function(pair) {
        docData[pair.columnKey] = row[csvKeys.indexOf(pair.csvKey)];
      });
      addRow(docData);
      return docData;
    });
    handleClose();
  }
  return react_1.default.createElement(
    "div",
    null,
    react_1.default.createElement(
      Button_1.default,
      { color: "secondary", onClick: handleClickOpen },
      "Import CSV ",
      react_1.default.createElement(PlaylistAdd_1.default, null)
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
        "Import a CSV file"
      ),
      react_1.default.createElement(
        DialogContent_1.default,
        null,
        csvKeys.length === 0
          ? react_1.default.createElement(
              "div",
              __assign({}, getRootProps()),
              react_1.default.createElement(
                "input",
                __assign({}, getInputProps())
              ),
              react_1.default.createElement(
                Grid_1.default,
                {
                  container: true,
                  direction: "column",
                  justify: "center",
                  alignContent: "center",
                  alignItems: "center",
                },
                react_1.default.createElement(
                  Typography_1.default,
                  { variant: "subtitle1" },
                  "Drag 'n' drop a .csv file here"
                ),
                react_1.default.createElement(CloudUpload_1.default, {
                  className: classes.cloudIcon,
                }),
                react_1.default.createElement(
                  Typography_1.default,
                  { variant: "subtitle1" },
                  "or"
                ),
                isDragActive
                  ? react_1.default.createElement(
                      "p",
                      null,
                      "Drop the file here ..."
                    )
                  : react_1.default.createElement(
                      Button_1.default,
                      { color: "secondary" },
                      "click to select a file"
                    )
              )
            )
          : react_1.default.createElement(
              Grid_1.default,
              { container: true, direction: "column" },
              keyPairs.map(function(keyPair, index) {
                return react_1.default.createElement(
                  Grid_1.default,
                  {
                    container: true,
                    direction: "row",
                    alignItems: "center",
                    justify: "space-between",
                  },
                  react_1.default.createElement(
                    Typography_1.default,
                    null,
                    keyPair.csvKey
                  ),
                  react_1.default.createElement(
                    TrendingFlatOutlined_1.default,
                    null
                  ),
                  react_1.default.createElement(
                    Typography_1.default,
                    null,
                    keyPair.columnKey
                  ),
                  react_1.default.createElement(
                    IconButton_1.default,
                    {
                      onClick: function() {
                        var clonedPairs = keyPairs.slice();
                        clonedPairs.splice(index, 1);
                        setKeyPairs(clonedPairs);
                      },
                    },
                    react_1.default.createElement(Delete_1.default, null)
                  )
                );
              }),
              react_1.default.createElement(
                Grid_1.default,
                { container: true, direction: "row", alignItems: "center" },
                react_1.default.createElement(
                  FormControl_1.default,
                  { className: classes.formControl },
                  react_1.default.createElement(
                    InputLabel_1.default,
                    { htmlFor: "csv-keys" },
                    "csv Fields"
                  ),
                  react_1.default.createElement(
                    Select_1.default,
                    {
                      value: csvKey,
                      onChange: function(e, v) {
                        setCsvKey(e.target.value);
                      },
                      inputProps: {
                        name: "csv",
                        id: "csv-keys",
                      },
                    },
                    csvKeys.map(function(key) {
                      return react_1.default.createElement(
                        MenuItem_1.default,
                        { value: key },
                        key
                      );
                    })
                  )
                ),
                react_1.default.createElement(
                  TrendingFlatOutlined_1.default,
                  null
                ),
                react_1.default.createElement(
                  FormControl_1.default,
                  { className: classes.formControl },
                  react_1.default.createElement(
                    InputLabel_1.default,
                    { htmlFor: "column-keys" },
                    "column Fields"
                  ),
                  react_1.default.createElement(
                    Select_1.default,
                    {
                      value: columnKey,
                      onChange: function(e, v) {
                        setColumnKey(e.target.value);
                      },
                      inputProps: {
                        name: "column",
                        id: "column-keys",
                      },
                    },
                    columns.map(function(column) {
                      return react_1.default.createElement(
                        MenuItem_1.default,
                        { value: column.key },
                        column.name
                      );
                    })
                  )
                ),
                react_1.default.createElement(
                  IconButton_1.default,
                  {
                    onClick: function() {
                      if (csvKey && columnKey) {
                        setKeyPairs(
                          keyPairs.concat([
                            { csvKey: csvKey, columnKey: columnKey },
                          ])
                        );
                        setColumnKey(null);
                        setCsvKey(null);
                      }
                    },
                  },
                  react_1.default.createElement(Add_1.default, null)
                )
              )
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
            onClick: handleImport,
            disabled: keyPairs.length === 0,
            color: "primary",
          },
          "import"
        )
      )
    )
  );
}
exports.default = ImportCSV;
//# sourceMappingURL=ImportCSV.js.map
