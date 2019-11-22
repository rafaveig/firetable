import React, { useState, useCallback, useContext } from "react";
import _camelCase from "lodash/camelCase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";

import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Input from "@material-ui/core/Input";

import ListItemText from "@material-ui/core/ListItemText";

import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { exportTable } from "../firebase/callables";
import { saveAs } from "file-saver";
import useTableConfig from "../hooks/useFiretable/useTableConfig";
import { SnackContext } from "../contexts/snackContext";
import { FireTableFilter } from "../hooks/useFiretable";

import _includes from "lodash/includes";
import _findIndex from "lodash/findIndex";
import { FieldsDropDown } from "./Fields/index";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const useStyles = makeStyles(theme =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    formControl: {
      margin: theme.spacing(4),
      width: 500,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    keyPair: {
      flexGrow: 2,
      display: "flex",
      justifyItems: "space-between",
    },
    cloudIcon: {
      fontSize: 64,
    },
    uploadContainer: {
      margin: "auto",
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
      width: 400,
    },
    chip: {},
  })
);
interface Props {
  columns: any;
  collection: string;
  getTableFields: Function;
}

export default function HiddenFields(props: Props) {
  const { columns, collection, getTableFields } = props;
  const classes = useStyles();
  // const [newColumns, setNewColumns] = useState({});
  // get fields detected  in table results
  const tableFields = Object.keys(getTableFields());

  // filter fields with no column
  const unMappedFields = tableFields.filter(
    (field: string) =>
      _findIndex(columns, (column: any) => column.key === field) === -1
  );

  const [open, setOpen] = useState(false);
  const snackContext = useContext(SnackContext);
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen}>
        Hidden Fields <VisibilityOffIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Hidden Fields</DialogTitle>
        <DialogContent className={classes.formControl}>
          <Grid container direction="column">
            {unMappedFields.map((field: string) => (
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-end"
              >
                <Typography variant="body1">{field}</Typography>
                <Box width={"30%"}>
                  <TextField
                    label="Column name"
                    name="name"
                    onChange={e => {
                      //   setValue("name", e.target.value);
                    }}
                  />
                </Box>
                <Box width={"30%"}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="Field-select">Field Type</InputLabel>
                    {FieldsDropDown(null, (props: any) => {
                      console.log(props);
                    })}
                  </FormControl>
                </Box>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => {}} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
