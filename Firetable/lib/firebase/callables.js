"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var CLOUD_FUNCTIONS;
(function(CLOUD_FUNCTIONS) {
  CLOUD_FUNCTIONS["updateAlgoliaRecord"] = "updateAlgoliaRecord";
  CLOUD_FUNCTIONS["deleteAlgoliaRecord"] = "deleteAlgoliaRecord";
  CLOUD_FUNCTIONS["exportTable"] = "exportTable";
})(
  (CLOUD_FUNCTIONS = exports.CLOUD_FUNCTIONS || (exports.CLOUD_FUNCTIONS = {}))
);
exports.cloudFunction = function(name, input, success, fail) {
  var callable = index_1.functions.httpsCallable(name);
  callable(input)
    .then(function(result) {
      if (success) {
        success(result);
      }
    })
    .catch(function(error) {
      if (fail) {
        fail(error);
      }
    });
};
exports.algoliaUpdateDoc = function(data) {
  return index_1.functions.httpsCallable(CLOUD_FUNCTIONS.updateAlgoliaRecord)(
    data
  );
};
exports.algoliaDeleteDoc = index_1.functions.httpsCallable(
  CLOUD_FUNCTIONS.deleteAlgoliaRecord
);
exports.exportTable = function(data) {
  return index_1.functions.httpsCallable(CLOUD_FUNCTIONS.exportTable)(data);
};
//# sourceMappingURL=callables.js.map
