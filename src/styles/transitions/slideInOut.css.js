import React from 'react'
import { keyframes } from 'styled-components'
import Transition from 'react-transition-group/Transition'

const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }
`

const slideOutDown = keyframes`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`

// TODO: import from common once available
const timingFunction = 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'

const SlideInOut = ({ children, duration, defaultStyle, in: inProp }) => {

  // There needs to be a slight speed diff between the
  // duration (passed in via props), and the animation speed
  // to avoid a flickering bug that sometimes occurs
  const speed = (duration + 50) + 'ms'

  const transitionStyles = {
    entering: {
      animation: `${slideInUp} ${speed} ${timingFunction}`
    },
    entered: {
      opacity: 1,
      visibility: 'visible'
    },
    exiting: {
      animation: `${slideOutDown} ${speed} ${timingFunction}`
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

export default SlideInOut
