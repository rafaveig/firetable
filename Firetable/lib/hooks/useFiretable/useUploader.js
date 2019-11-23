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
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var index_1 = require("../../firebase/index");
var app_1 = __importDefault(require("firebase/app"));
var initialState = { progress: 0 };
var uploadReducer = function(prevState, newProps) {
  return __assign({}, prevState, newProps);
};
var useUploader = function() {
  var _a = react_1.useReducer(uploadReducer, __assign({}, initialState)),
    uploaderState = _a[0],
    uploaderDispatch = _a[1];
  var upload = function(docRef, fieldName, files, previousValue) {
    files.forEach(function(file) {
      var storageRef = index_1.bucket.ref(
        docRef.path + "/" + fieldName + "/" + file.name
      );
      var uploadTask = storageRef.put(file);
      uploadTask.on(
        app_1.default.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploaderDispatch({ progress: progress });
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case app_1.default.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case app_1.default.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
          }
        },
        function(error) {
          switch (error.code) {
            case "storage/unauthorized":
              break;
            case "storage/canceled":
              break;
            case "storage/unknown":
              break;
          }
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
            var _a, _b;
            console.log("File available at", downloadURL);
            if (previousValue) {
              docRef.update(
                ((_a = {}),
                (_a[fieldName] = previousValue.concat([
                  {
                    downloadURL: downloadURL,
                    name: file.name,
                    type: file.type,
                    lastModifiedTS: file.lastModified,
                  },
                ])),
                _a)
              );
            } else {
              docRef.update(
                ((_b = {}),
                (_b[fieldName] = [
                  {
                    downloadURL: downloadURL,
                    name: file.name,
                    type: file.type,
                    lastModifiedTS: file.lastModified,
                  },
                ]),
                _b)
              );
            }
          });
        }
      );
    });
  };
  return [uploaderState, upload];
};
exports.default = useUploader;
//# sourceMappingURL=useUploader.js.map
