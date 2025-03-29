import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { timerToggle } from "../../../lib/redux/actions";
import { initialized, timerStatus } from "../../../lib/redux/selectors";
import styled from "styled-components";
import Burst from "../../common/styles/transitions/burst.css";

// Example color value, replace with actual value or import from a theme
const colorWrapper = "#f0f0f0"; // Replace with the actual value from your variables

const Wrapper = styled.div`
  bottom: 40px;
  display: flex;
  height: 60px;
  position: absolute;
  justify-content: center;
  text-align: center;
  width: 100%;
  z-index: 5;
`;

const StyledButton = styled.button`
  background: ${colorWrapper};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 60px;
  width: 60px;
`;

function Clicker() {
  const initializedValue = useSelector(initialized);
  const timerStatusValue = useSelector(timerStatus);
  const dispatch = useDispatch();

  return (
    <Wrapper className="clicker">
      <Burst>
        <StyledButton onClick={() => dispatch(timerToggle())}></StyledButton>
      </Burst>
    </Wrapper>
  );
}

export default Clicker;
