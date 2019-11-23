import * as React from "react";
import { FireTableFilter } from "./src/hooks/useFiretable";
export interface FiretableProps extends React.Props<Firetable> {
  tableCollection: string;
  filters: FireTableFilter[];
}

declare class Firetable extends React.Component<FiretableProps, any> {}

declare module "Firetable" {}

export default FiretableProps;
