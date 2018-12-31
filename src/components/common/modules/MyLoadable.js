import Loadable from 'react-loadable'
import Immutable from 'immutable'
import StyledDiv from 'common/styled/StyledDiv'

const Loader = props => {
  const loaderStyles = Immutable.fromJS({
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  })

  return (
    <StyledDiv css={loaderStyles}>{props.children}</StyledDiv>
  )
}

function LoadingComponent(props) {
  if (props.error) {
    return <Loader>Error! <button onClick={ props.retry }>Retry</button></Loader>
  } else if (props.timedOut) {
    return <Loader>Taking a long time... <button onClick={ props.retry }>Retry</button></Loader>
  } else if (props.pastDelay) {
    return <Loader>Loading...</Loader>
  } else {
    return null
  }
}

export default function MyLoadable(opts) {
  return Loadable(Object.assign({
    loading: LoadingComponent
  }, opts))
}