"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useDoc_1 = __importStar(require("./useDoc"));
var firebase_1 = require("../firebase");
var useSettings = function() {
  var _a = useDoc_1.default({
      path: "_FIRETABLE_/settings",
    }),
    settingsState = _a[0],
    documentDispatch = _a[1];
  react_1.useEffect(
    function() {
      var doc = settingsState.doc,
        tables = settingsState.tables;
      if (doc && tables !== doc.tables) {
        documentDispatch({ tables: doc.tables });
      }
    },
    [settingsState]
  );
  var createTable = function(name, collection) {
    var tables = settingsState.tables;
    if (tables) {
      documentDispatch({
        action: useDoc_1.DocActions.update,
        data: {
          tables: tables.concat([{ name: name, collection: collection }]),
        },
      });
    } else {
      firebase_1.db
        .doc("_FIRETABLE_/settings")
        .set(
          { tables: [{ name: name, collection: collection }] },
          { merge: true }
        );
    }
    firebase_1.db
      .collection(collection)
      .doc("_FIRETABLE_")
      .set({ columns: [] });
  };
  return [settingsState, createTable];
};
exports.default = useSettings;
//# sourceMappingURL=useSettings.js.map
