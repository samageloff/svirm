import React from "react";
import Immutable from "immutable";
import StyledDiv from "common/styled/StyledDiv";
import StyledUl from "common/styled/StyledUl";

const Grid = (props) => {
  const wrapperStyle = () =>
    Immutable.fromJS({
      maxWidth: "1000px",
      margin: "0 auto",
      width: "100%",
    });

  const listStyle = () =>
    Immutable.fromJS({
      boxSizing: "border-box",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(350px, 2fr))",
      gridGap: "2em",
      width: "100%",
      listStyleType: "none",
      padding: "0",
      margin: "0",
    });

  return (
    <StyledDiv css={wrapperStyle()}>
      <StyledUl css={listStyle()}>{props.children}</StyledUl>
    </StyledDiv>
  );
};

export default Grid;
