import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import Theme from "./Theme";
import Snack from "./components/Snack";
import { SnackProvider } from "./util/SnackProvider";

import Table from "./components/Table";

export default class Firetable extends React.Component<any, any> {
  render() {
    return (
      <ThemeProvider theme={Theme}>
        <SnackProvider>
          <Table
            collection={this.props.tableCollection}
            filters={this.props.filters}
          />
          <Snack />
        </SnackProvider>
      </ThemeProvider>
    );
  }
}
