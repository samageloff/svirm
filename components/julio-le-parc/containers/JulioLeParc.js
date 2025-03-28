import React from "react";
import StyledDiv from "../../common/styled/StyledDiv";
import Column from "../components/Column";
import { baseStyles } from "./style";
import { globals } from "julio/config";

export const JulioLeParc = () => {
  return (
    <StyledDiv css={baseStyles}>
      <Column matrix={globals.matrix} />
    </StyledDiv>
  );
};
