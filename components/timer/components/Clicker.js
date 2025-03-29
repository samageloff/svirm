import React from "react";
import Immutable from "immutable";
import { useSelector, useDispatch } from "react-redux";
import { bool } from "prop-types";
import { timerToggle } from "timer/actions";
import { initialized, timerStatus } from "timer/selectors";
import styles from "common/styles/variables.scss";
import StyledDiv from "common/styled/StyledDiv";
import Burst from "common/styles/transitions/burst.css";

Clicker.propTypes = {
  initialized: bool,
  timerStatus: bool,
};

const defaultStyle = {
  display: "flex",
  justifyContent: "center",
  transform: "scale(1)",
};

const wrapperStyle = Immutable.fromJS({
  bottom: "40px",
  display: "flex",
  height: "60px",
  position: "absolute",
  justifyContent: "center",
  textAlign: "center",
  width: "100%",
  zIndex: "5",
  button: {
    background: styles.color_wrapper,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    height: "60px",
    width: "60px",
  },
});

const Clicker = () => {
  const initializedValue = useSelector(initialized);
  const timerStatusValue = useSelector(timerStatus);
  const dispatch = useDispatch();

  return (
    <StyledDiv css={wrapperStyle}>
      <Burst>
        <button onClick={() => dispatch(timerToggle())}></button>
      </Burst>
    </StyledDiv>
  );
};

export default Clicker;
