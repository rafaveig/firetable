"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var CssBaseline_1 = __importDefault(require("@material-ui/core/CssBaseline"));
var createStyles_1 = __importDefault(
  require("@material-ui/core/styles/createStyles")
);
var makeStyles_1 = __importDefault(
  require("@material-ui/core/styles/makeStyles")
);
var AppBar_1 = __importDefault(require("@material-ui/core/AppBar"));
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var Menu_1 = __importDefault(require("@material-ui/icons/Menu"));
var Skeleton_1 = __importDefault(require("@material-ui/lab/Skeleton"));
var CreateTableDialog_1 = __importDefault(require("./CreateTableDialog"));
var useSettings_1 = __importDefault(require("../hooks/useSettings"));
var useRouter_1 = __importDefault(require("../hooks/useRouter"));
var tablesContext_1 = __importDefault(require("../contexts/tablesContext"));
var useStyles = makeStyles_1.default(function(theme) {
  return createStyles_1.default({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 20,
      paddingTop: 5,
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: "auto",
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: "absolute",
      zIndex: 1,
      top: -30,
      right: 20,
      margin: "0 auto",
    },
    button: {
      color: "#fff",
      marginLeft: 8,
    },
    skeleton: {
      marginLeft: 8,
      borderRadius: 5,
    },
    routes: {
      flex: "flex-shrink",
      overflowX: "scroll",
    },
  });
});
var Navigation = function(props) {
  var router = useRouter_1.default();
  var classes = useStyles();
  var _a = useSettings_1.default(),
    settings = _a[0],
    createTable = _a[1];
  return react_1.default.createElement(
    tablesContext_1.default.Provider,
    { value: { value: settings.tables } },
    react_1.default.createElement(
      react_1.default.Fragment,
      null,
      react_1.default.createElement(CssBaseline_1.default, null),
      props.children,
      react_1.default.createElement(
        AppBar_1.default,
        { position: "fixed", color: "primary", className: classes.appBar },
        react_1.default.createElement(
          Toolbar_1.default,
          null,
          react_1.default.createElement(
            IconButton_1.default,
            { edge: "start", color: "inherit", "aria-label": "open drawer" },
            react_1.default.createElement(Menu_1.default, null)
          ),
          !settings.tables
            ? react_1.default.createElement(
                react_1.default.Fragment,
                null,
                react_1.default.createElement(Skeleton_1.default, {
                  variant: "rect",
                  width: 120,
                  height: 40,
                  className: classes.skeleton,
                }),
                react_1.default.createElement(Skeleton_1.default, {
                  variant: "rect",
                  width: 120,
                  height: 40,
                  className: classes.skeleton,
                }),
                react_1.default.createElement(Skeleton_1.default, {
                  variant: "rect",
                  width: 120,
                  height: 40,
                  className: classes.skeleton,
                }),
                react_1.default.createElement(Skeleton_1.default, {
                  variant: "rect",
                  width: 120,
                  height: 40,
                  className: classes.skeleton,
                })
              )
            : react_1.default.createElement(
                "div",
                { className: classes.routes },
                settings.tables.map(function(table) {
                  return react_1.default.createElement(
                    Button_1.default,
                    {
                      key: table.collection,
                      onClick: function() {
                        router.history.push(table.collection);
                      },
                      className: classes.button,
                    },
                    table.name
                  );
                })
              ),
          react_1.default.createElement(CreateTableDialog_1.default, {
            classes: classes,
            createTable: createTable,
          }),
          react_1.default.createElement("div", { className: classes.grow })
        )
      )
    )
  );
};
exports.default = Navigation;
//# sourceMappingURL=Navigation.js.map
