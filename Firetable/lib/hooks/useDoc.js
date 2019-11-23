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
Object.defineProperty(exports, "__esModule", { value: true });
var firebase_1 = require("../firebase");
var react_1 = require("react");
var DocActions;
(function(DocActions) {
  DocActions[(DocActions["update"] = 0)] = "update";
  DocActions[(DocActions["delete"] = 1)] = "delete";
})((DocActions = exports.DocActions || (exports.DocActions = {})));
var documentReducer = function(prevState, newProps) {
  switch (newProps.action) {
    case DocActions.update:
      prevState.ref.update(__assign({}, newProps.data));
      return __assign({}, prevState, {
        doc: __assign({}, prevState.doc, newProps.data),
      });
    case DocActions.delete:
      prevState.ref.delete();
      return null;
    default:
      return __assign({}, prevState, newProps);
  }
};
var documentIntialState = {
  path: null,
  prevPath: null,
  doc: null,
  ref: null,
  loading: true,
};
var useDoc = function(intialOverrides) {
  var _a = react_1.useReducer(
      documentReducer,
      __assign({}, documentIntialState, intialOverrides)
    ),
    documentState = _a[0],
    documentDispatch = _a[1];
  var setDocumentListner = function() {
    documentDispatch({ prevPath: documentState.path });
    var unsubscribe = firebase_1.db
      .doc(documentState.path)
      .onSnapshot(function(snapshot) {
        if (snapshot.exists) {
          var data = snapshot.data();
          var id = snapshot.id;
          var doc = __assign({}, data, { id: id });
          documentDispatch({
            doc: doc,
            ref: snapshot.ref,
            loading: false,
          });
        } else {
          documentDispatch({
            loading: false,
          });
        }
      });
    documentDispatch({ unsubscribe: unsubscribe });
  };
  react_1.useEffect(
    function() {
      var path = documentState.path,
        prevPath = documentState.prevPath,
        unsubscribe = documentState.unsubscribe;
      if (path && path !== prevPath) {
        if (unsubscribe) unsubscribe();
        setDocumentListner();
      }
    },
    [documentState]
  );
  react_1.useEffect(function() {
    return function() {
      if (documentState.unsubscribe) documentState.unsubscribe();
    };
  }, []);
  return [documentState, documentDispatch];
};
exports.default = useDoc;
//# sourceMappingURL=useDoc.js.map
