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
var Delete_1 = __importDefault(require("@material-ui/icons/Delete"));
var styles_1 = require("@material-ui/core/styles");
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Grid_1 = __importDefault(require("@material-ui/core/Grid"));
var AddAPhoto_1 = __importDefault(require("@material-ui/icons/AddAPhoto"));
var CircularProgress_1 = __importDefault(
  require("@material-ui/core/CircularProgress")
);
var findIndex_1 = __importDefault(require("lodash/findIndex"));
var core_1 = require("@material-ui/core");
var Confirmation_1 = __importDefault(require("../Confirmation"));
var useStyles = styles_1.makeStyles(function(theme) {
  return styles_1.createStyles({
    root: {
      display: "flex",
      alignContent: "center",
      width: "100%",
    },
    uploadingContainer: {
      display: "flex",
      alignContent: "center",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    progress: {
      margin: theme.spacing(3),
    },
    imgHover: {
      "&:hover": {
        borderStyle: "solid",
        borderColor: "rgb(255, 0, 0,0.6)",
      },
    },
    addIcon: {
      maxHeight: 48,
    },
  });
});
var Image = function(props) {
  var classes = useStyles();
  var fieldName = props.fieldName,
    value = props.value,
    row = props.row,
    onSubmit = props.onSubmit;
  var _a = useUploader_1.default(),
    uploaderState = _a[0],
    upload = _a[1];
  var progress = uploaderState.progress;
  var _b = react_1.useState(null),
    localImage = _b[0],
    setLocalImage = _b[1];
  var onDrop = react_1.useCallback(function(acceptedFiles) {
    var imageFile = acceptedFiles[0];
    if (imageFile) {
      upload(row.ref, fieldName, [imageFile], value);
      var url = URL.createObjectURL(imageFile);
      setLocalImage(url);
    }
  }, []);
  var _c = react_dropzone_1.useDropzone({
      onDrop: onDrop,
      multiple: false,
      accept: ["image/png", "image/jpg", "image/jpeg"],
    }),
    getRootProps = _c.getRootProps,
    getInputProps = _c.getInputProps,
    isDragActive = _c.isDragActive;
  var dropzoneProps = getRootProps();
  var files = value.slice();
  if (localImage) {
    files.push({ downloadURL: localImage, name: "localImage" });
  }
  return react_1.default.createElement(
    Grid_1.default,
    __assign({ className: classes.root }, dropzoneProps, {
      onClick: function() {},
    }),
    react_1.default.createElement("input", __assign({}, getInputProps())),
    value &&
      files.map(function(file) {
        return react_1.default.createElement(
          core_1.Tooltip,
          { title: "Click to delete", key: file.downloadURL },
          react_1.default.createElement(
            Confirmation_1.default,
            {
              message: {
                title: "Delete Image",
                body: "Are you sure you want to delete this image?",
                confirm: react_1.default.createElement(
                  react_1.default.Fragment,
                  null,
                  react_1.default.createElement(Delete_1.default, null),
                  " Delete"
                ),
              },
            },
            react_1.default.createElement(
              "div",
              {
                onClick: function(e) {
                  var index = findIndex_1.default(value, [
                    "downloadURL",
                    file.downloadURL,
                  ]);
                  value.splice(index, 1);
                  onSubmit(value);
                },
              },
              react_1.default.createElement("img", {
                className: classes.imgHover,
                key: file.name,
                style: {
                  padding: row.rowHeight * 0.03 + "px",
                  height: row.rowHeight * 0.95 + "px",
                },
                src: file.downloadURL,
              })
            )
          )
        );
      }),
    progress === 0
      ? react_1.default.createElement(
          IconButton_1.default,
          { className: classes.addIcon, onClick: dropzoneProps.onClick },
          react_1.default.createElement(AddAPhoto_1.default, null)
        )
      : react_1.default.createElement(
          "div",
          { className: classes.progress },
          react_1.default.createElement(CircularProgress_1.default, {
            size: row.rowHeight * 0.5,
            variant: "determinate",
            value: progress,
            color: "secondary",
          })
        )
  );
};
exports.default = Image;
//# sourceMappingURL=Image.js.map
