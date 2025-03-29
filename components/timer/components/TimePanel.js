import React from "react";
import { useSelector } from "react-redux";
import Immutable from "immutable";
import { bool, number } from "prop-types";
import { timerStatus, currentTick, defaultTick } from "timer/selectors";
import StyledDiv from "common/styled/StyledDiv";
import variables from "common/styles/variables.scss";

TimePanel.propTypes = {
  currentTick: number,
  defaultTick: number,
  timerStatus: bool,
};

const TimePanel = () => {
  const currentTickValue = useSelector(currentTick);
  const defaultTickValue = useSelector(defaultTick);
  const timerStatusValue = useSelector(timerStatus);

  const calculatePercentage = () => (currentTickValue / defaultTickValue) * 100;

  const styles = Immutable.fromJS({
    background: variables.color_wrapper,
    position: "absolute",
    bottom: 0,
    height: timerStatusValue ? `${calculatePercentage()}%` : "0",
    width: "100%",
    opacity: 1,
    transition: `all .35s ${variables.transition_timing_function}`,
    zIndex: 1,
  });

  return <StyledDiv css={styles} />;
};

export default TimePanel;
