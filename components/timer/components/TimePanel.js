import React from "react";
import { useSelector } from "react-redux";
import {
  timerStatus,
  currentTick,
  defaultTick,
} from "../../../lib/redux/selectors";
import variables from "../../common/styles/variables.scss";
import styled from "styled-components";

// Define the styled component
const StyledTickerDiv = styled.div`
  align-items: center;
  color: ${variables.color_white};
  display: flex;
  font-size: 1rem;

  flex-direction: column;
  position: relative;
  font-weight: bold;
  justify-content: center;
  width: 100%;
  z-index: ${variables.zindex_ticker};
`;

const TimePanel = () => {
  const currentTickValue = useSelector(currentTick);
  const defaultTickValue = useSelector(defaultTick);
  const timerStatusValue = useSelector(timerStatus);

  // height: timerStatusValue ? `${calculatePercentage()}%` : "0",
  const calculatePercentage = () => (currentTickValue / defaultTickValue) * 100;

  return <StyledTickerDiv className="time-panel" />;
};

export default TimePanel;
