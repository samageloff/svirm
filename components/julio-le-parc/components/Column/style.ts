import { palatte } from "../../styles/colors";

export const columnStyles = {
  alignContent: "baseline",
  boxShadow: `0 0 0 .5px ${palatte.lines}`,
  display: "flex",
  flexDirection: "column-reverse",
  flexWrap: "wrap",
  height: "100%",
} as const;
