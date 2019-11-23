"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("firebase/app"));
require("firebase/auth");
require("firebase/firestore");
require("firebase/functions");
require("firebase/storage");
var config = {
  apiKey: process.env.REACT_APP_FIREBASE_PROJECT_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_PROJECT_NAME + ".firebaseapp.com",
  databaseURL:
    "https://" +
    process.env.REACT_APP_FIREBASE_PROJECT_NAME +
    ".firebaseio.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_NAME,
  storageBucket: process.env.REACT_APP_FIREBASE_PROJECT_NAME + ".appspot.com",
};
app_1.default.initializeApp(config);
exports.auth = app_1.default.auth();
exports.db = app_1.default.firestore();
exports.bucket = app_1.default.storage();
exports.functions = app_1.default.functions();
exports.googleProvider = new app_1.default.auth.GoogleAuthProvider();
//# sourceMappingURL=index.js.map
