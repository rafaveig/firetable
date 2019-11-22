import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import Theme from "./Theme";
import Snack from "./components/Snack";
import { SnackProvider } from "./util/SnackProvider";

import { FireTableFilter } from "./hooks/useFiretable";
import Table from "./components/Table";
const Firetable = ({
  tableCollection,
  filters,
}: {
  tableCollection: string;
  filters: FireTableFilter[];
}) => {
  return (
    <ThemeProvider theme={Theme}>
      <SnackProvider>
        <Table collection={tableCollection} filters={filters} />
        <Snack />
      </SnackProvider>
    </ThemeProvider>
  );
};
export default Firetable;
