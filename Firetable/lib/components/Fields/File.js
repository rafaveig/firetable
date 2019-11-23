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
var react_1 = __importStar(require("react"));
var react_dropzone_1 = require("react-dropzone");
var useUploader_1 = __importDefault(
  require("../../hooks/useFiretable/useUploader")
);
var Chip_1 = __importDefault(require("@material-ui/core/Chip"));
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var NoteAdd_1 = __importDefault(require("@material-ui/icons/NoteAdd"));
var findIndex_1 = __importDefault(require("lodash/findIndex"));
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      width: "100%",
    },
    chip: { margin: theme.spacing(5) },
    progress: { margin: theme.spacing(5) },
    addIcon: {
      maxHeight: 48,
    },
  });
});
var File = function(props) {
  var fieldName = props.fieldName,
    value = props.value,
    row = props.row,
    onSubmit = props.onSubmit;
  var classes = useStyles();
  var _a = useUploader_1.default(),
    uploaderState = _a[0],
    upload = _a[1];
  var progress = uploaderState.progress;
  var onDrop = react_1.useCallback(function(acceptedFiles) {
    var imageFile = acceptedFiles[0];
    if (imageFile) {
      upload(row.ref, fieldName, [imageFile], value);
    }
  }, []);
  var _b = react_dropzone_1.useDropzone({
      onDrop: onDrop,
      multiple: false,
    }),
    getRootProps = _b.getRootProps,
    getInputProps = _b.getInputProps,
    isDragActive = _b.isDragActive;
  var handleDelete = function(downloadURL) {
    var index = findIndex_1.default(value, ["downloadURL", downloadURL]);
    value.splice(index, 1);
    onSubmit(value);
  };
  var dropzoneProps = getRootProps();
  return react_1.default.createElement(
    "div",
    __assign({ className: classes.root }, dropzoneProps, {
      onClick: function() {},
    }),
    react_1.default.createElement("input", __assign({}, getInputProps())),
    value &&
      value.map(function(file) {
        return react_1.default.createElement(Chip_1.default, {
          key: file.name,
          label: file.name,
          className: classes.chip,
          onClick: function() {
            window.open(file.downloadURL);
          },
          onDelete: function() {
            handleDelete(file.downloadURL);
          },
        });
      }),
    react_1.default.createElement(
      IconButton_1.default,
      { className: classes.addIcon, onClick: dropzoneProps.onClick },
      react_1.default.createElement(NoteAdd_1.default, null)
    )
  );
};
exports.default = File;
//# sourceMappingURL=File.js.map
