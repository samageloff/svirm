import Loadable from 'react-loadable'

function LoadingComponent(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>
  } else if (props.pastDelay) {
    return <div>Loading...</div>
  } else {
    return null
  }
}

export default function MyLoadable(opts) {
  return Loadable(Object.assign({
    loading: LoadingComponent
  }, opts))
}