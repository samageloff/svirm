import React from 'react'
import { keyframes } from 'styled-components'
import Transition from 'react-transition-group/Transition'

const burstIn = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(0);
  }
`

const burstOut = keyframes`
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);    
  }

  0% {
    transform: scale(1);    
  }
`

// TODO: import from common once available
const timingFunction = 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'

const Burst = ({ children, duration, defaultStyle, in: inProp }) => {

  // There needs to be a slight speed diff between the
  // duration (passed in via props), and the animation speed
  // to avoid a flickering bug that sometimes occurs
  const speed = (duration + 50) + 'ms'

  const transitionStyles = {
    entering: {
      animation: `${burstIn} ${speed} ${timingFunction}`
    },
    entered: {
      opacity: 0,
      scale: 1
    },
    exiting: {
      animation: `${burstOut} ${speed} ${timingFunction}`
    }
  }

  return (
    <Transition in={inProp} timeout={duration}>
      {state => (
        <div style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          {children}
        </div>
      )}
    </Transition>
  )
}

export default Burst
