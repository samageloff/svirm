import React from 'react'
import { keyframes } from 'styled-components'
import Transition from 'react-transition-group/Transition'

const burstIn = keyframes`
  0% {
    borderRadius: 50%,
    boxShadow: '0 0 30px 20px rgb(255, 110, 110)'
  }
  20% {
    borderRadius: 0%;
    boxShadow: '0',
    width: 100%
  }
`

const burstOut = keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
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
      opacity: 1,
      visibility: 'visible'
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
