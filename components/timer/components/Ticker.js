import React from "react";
import Immutable from "immutable";
import { useSelector } from "react-redux";
import { number } from "prop-types";
import { currentTick } from "timer/selectors";
import StyledDiv from "common/styled/StyledDiv";
import Carousel from "timer/components/Carousel";
import variables from "common/styles/variables.scss";

Ticker.propTypes = {
  currentTick: number,
};

const styles = Immutable.fromJS({
  alignItems: "center",
  color: variables.color_white,
  display: "flex",
  fontSize: "1rem",
  flexDirection: "column",
  position: "relative",
  fontWeight: "bold",
  justifyContent: "center",
  width: "100%",
  zIndex: variables.zindex_ticker,
});

const Ticker = () => {
  const currentTickValue = useSelector(currentTick);

  return (
    <StyledDiv css={styles}>
      <Carousel />
    </StyledDiv>
  );
};

export default Ticker;
