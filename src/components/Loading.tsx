
interface LoadingInterface {
  text?: string
}

const Loading: React.FunctionComponent<LoadingInterface> = ({text}) => {
  return <span className="gw-temperature-loading">{text === '' ? 'Loading' : text }</span>
}

export default Loading