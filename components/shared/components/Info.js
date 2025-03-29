import React from "react";
import StyledDiv from "common/styled/StyledDiv";

const infoStyles = {
  background: "black",
  color: "white",
  padding: "1em",
  left: "3em",
  position: "absolute",
  opacity: "0.9",
  zIndex: "20",
  h4: {
    margin: 0,
  },
};

const Info = () => {
  return (
    <StyledDiv css={infoStyles}>
      <h4>Julio La Parc</h4>
      <span>Séquences quantitatives - Acrylique sur toile</span>
    </StyledDiv>
  );
};

export default Info;
