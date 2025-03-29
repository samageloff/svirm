import React from "react";
import { css } from "styled-components";
import Transition from "react-transition-group/Transition";
import styles from "../../styles/variables.scss";

const burstIn = css`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`;

const burstOut = css`
  100% {
    transform: scale(0.75);
  }

  50% {
    transform: scale(1.25);
  }

  0% {
    transform: scale(1);
  }
`;

const timingFunction = styles.transition_timing_function;

const Burst = ({ children, duration, defaultStyle, in: inProp }) => {
  const speed = `${duration + 50}ms`;

  const transitionStyles = {
    entering: {
      animation: `${burstIn} ${speed} ${timingFunction}`,
    },
    entered: {
      transform: "scale(0)",
    },
    exiting: {
      animation: `${burstOut} ${speed} ${timingFunction}`,
    },
    exited: {
      transform: "scale(1)",
    },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          className={state}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Burst;
