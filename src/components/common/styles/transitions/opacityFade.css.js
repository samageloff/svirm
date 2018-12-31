import React from 'react'
import { keyframes } from 'styled-components'
import Transition from 'react-transition-group/Transition'

const opacityIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const opacityOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const timingFunction = 'cubic-bezier(0.165, 0.840, 0.440, 1.000)'

const OpacityFade = ({ children, duration, defaultStyle, in: inProp }) => {

  const speed = (duration + 50) + 'ms'

  const transitionStyles = {
    entering: {
      animation: `${opacityIn} ${speed} ${timingFunction}`
    },
    entered: {
      opacity: 1,
      visibility: 'visible'
    },
    exiting: {
      animation: `${opacityOut} ${speed} ${timingFunction}`
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

export default OpacityFade