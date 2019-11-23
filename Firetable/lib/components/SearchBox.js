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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var styles_1 = require("@material-ui/core/styles");
var List_1 = __importDefault(require("@material-ui/core/List"));
var ListItem_1 = __importDefault(require("@material-ui/core/ListItem"));
var ListItemText_1 = __importDefault(require("@material-ui/core/ListItemText"));
var lite_1 = __importDefault(require("algoliasearch/lite"));
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var Modal_1 = __importDefault(require("@material-ui/core/Modal"));
var Backdrop_1 = __importDefault(require("@material-ui/core/Backdrop"));
var Fade_1 = __importDefault(require("@material-ui/core/Fade"));
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var searchClient = lite_1.default(
  process.env.REACT_APP_ALGOLIA_APP_ID
    ? process.env.REACT_APP_ALGOLIA_APP_ID
    : "",
  process.env.REACT_APP_ALGOLIA_SEARCH_KEY
    ? process.env.REACT_APP_ALGOLIA_SEARCH_KEY
    : ""
);
var useStyles = styles_1.makeStyles(function() {
  return styles_1.createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {},
    root: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      minWidth: 200,
    },
    typography: {},
    textArea: {
      fontSize: 14,
      minWidth: 230,
    },
    searchField: {
      width: "100%",
      padding: 20,
    },
    list: {
      backgroundColor: "#fff",
      minWidth: 200,
      maxHeight: 400,
      overflowY: "scroll",
    },
  });
});
var SearchBox = function(props) {
  var searchData = props.searchData,
    clearSearch = props.clearSearch;
  var collection = searchData.collection,
    onSubmit = searchData.onSubmit,
    config = searchData.config;
  var _a = react_1.useState(""),
    query = _a[0],
    setQuery = _a[1];
  var classes = useStyles();
  var _b = react_1.useState([]),
    hits = _b[0],
    setHits = _b[1];
  var _c = react_1.useState(undefined),
    algoliaIndex = _c[0],
    setAlgoliaIndex = _c[1];
  react_1.useEffect(
    function() {
      if (collection) {
        setAlgoliaIndex(searchClient.initIndex(collection));
      }
    },
    [collection]
  );
  react_1.useEffect(
    function() {
      if (algoliaIndex) {
        search("");
      }
    },
    [algoliaIndex]
  );
  var search = function(query) {
    return __awaiter(_this, void 0, void 0, function() {
      var resp;
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            if (!algoliaIndex) return [3, 2];
            return [4, algoliaIndex.search({ query: query })];
          case 1:
            resp = _a.sent();
            setHits(resp.hits);
            _a.label = 2;
          case 2:
            return [2];
        }
      });
    });
  };
  react_1.useEffect(
    function() {
      search(query);
    },
    [query]
  );
  var open = Boolean(collection);
  var id = open ? "no-transition-popper" : undefined;
  var Hit = function(hit) {
    return react_1.default.createElement(
      ListItem_1.default,
      {
        button: true,
        onClick: function() {
          var snapshot = __assign({}, hit);
          delete snapshot._highlightResult;
          if (onSubmit) {
            onSubmit({
              snapshot: snapshot,
              docPath: collection + "/" + snapshot.objectID,
            });
            clear();
          }
        },
      },
      react_1.default.createElement(ListItemText_1.default, {
        primary:
          config &&
          config.primaryKeys.map(function(key) {
            return hit[key] + " ";
          }),
        secondary:
          config &&
          config.secondaryKeys.map(function(key) {
            return hit[key] + " ";
          }),
      })
    );
  };
  var clear = function() {
    return __awaiter(_this, void 0, void 0, function() {
      return __generator(this, function(_a) {
        switch (_a.label) {
          case 0:
            return [4, setHits([])];
          case 1:
            _a.sent();
            return [4, setQuery("")];
          case 2:
            _a.sent();
            clearSearch();
            return [2];
        }
      });
    });
  };
  return react_1.default.createElement(
    Modal_1.default,
    {
      "aria-labelledby": "transition-modal-title",
      "aria-describedby": "transition-modal-description",
      className: classes.modal,
      open: open,
      onClose: function() {
        clear();
      },
      closeAfterTransition: true,
      BackdropComponent: Backdrop_1.default,
      BackdropProps: {
        timeout: 500,
      },
    },
    react_1.default.createElement(
      Fade_1.default,
      { in: open },
      react_1.default.createElement(
        Paper_1.default,
        { className: classes.paper },
        react_1.default.createElement(TextField_1.default, {
          className: classes.searchField,
          placeholder: "type to start searching",
          autoFocus: true,
          value: query,
          onChange: function(e) {
            setQuery(e.target.value);
          },
        }),
        react_1.default.createElement(
          List_1.default,
          { className: classes.list },
          hits.map(function(hit) {
            return Hit(hit);
          })
        )
      )
    )
  );
};
exports.default = SearchBox;
//# sourceMappingURL=SearchBox.js.map
