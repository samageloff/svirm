import styles from '../variables.scss'
import React from 'react'
import { keyframes } from 'styled-components'
import Transition from 'react-transition-group/Transition'

const burstIn = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`

const burstOut = keyframes`
  100% {
    transform: scale(.75);
  }

  50% {
    transform: scale(1.25);
  }

  0% {
    transform: scale(1);
  }
`

const timingFunction = styles['transition_timing_function']

const Burst = ({ children, duration, defaultStyle, in: inProp }) => {

  // There needs to be a slight speed diff between the
  // duration (passed in via props), and the animation speed
  // to avoid a flickering bug that sometimes occurs
  const speed = styles['speed'] + 'ms'

  const transitionStyles = {
    entering: {
      animation: `${burstIn} ${speed} ${timingFunction}`
    },
    entered: {
      transform: 'scale(0)'
    },
    exiting: {
      animation: `${burstOut} ${speed} ${timingFunction}`
    },
    exited: {
      transform: 'scale(1)'
    }
  }

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }} className={state}>
          {children}
        </div>
      )}
    </Transition>
  )
}

export default Burst
