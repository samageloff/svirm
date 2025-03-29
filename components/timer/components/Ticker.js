import React from "react";
import { useSelector } from "react-redux";
import { currentTick } from "../../../lib/redux/selectors";
import Carousel from "../components/Carousel";
import variables from "../../common/styles/variables.scss";

const styles = {
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
};

const Ticker = () => {
  const currentTickValue = useSelector(currentTick);

  return (
    <StyledDiv css={styles} className="ticker">
      <Carousel />
    </StyledDiv>
  );
};

export default Ticker;
