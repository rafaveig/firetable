"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles_1 = require("@material-ui/core/styles");
var useStyles = styles_1.makeStyles(function(Theme) {
  return styles_1.createStyles({
    typography: {
      padding: 1,
    },
    header: {
      display: "flex",
      flex: "wrap",
      alignContent: "center",
      justifyContent: "space-between",
    },
    headerLabel: {
      display: "flex",
      flex: "wrap",
      alignContent: "center",
    },
    headerButton: {
      width: "100%",
    },
    tableHeader: {
      padding: 8,
      width: "100%",
      display: "flex",
      flex: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
    },
    tableActions: {
      display: "flex",
      flex: "wrap",
      alignContent: "center",
    },
    formControl: {
      margin: 2,
      minWidth: 120,
    },
  });
});
exports.default = useStyles;
//# sourceMappingURL=useStyle.js.map
