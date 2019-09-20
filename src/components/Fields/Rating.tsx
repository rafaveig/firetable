import React from "react";
import MuiRating from "@material-ui/lab/Rating";

const Rating = (props: any) => {
  const { value, row, onSubmit } = props;
  return (
    <MuiRating
      // TODO: make it uniqe for each
      name={`rating-controlled-${row.id}`}
      value={value}
      onChange={(event, newValue) => {
        onSubmit(row.ref, newValue);
      }}
    />
  );
};
export default Rating;
