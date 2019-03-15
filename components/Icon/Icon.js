import ReactSVG from 'react-svg'

const Icon = (props) => {

  const icon = {
    global: <ReactSVG src='../../static/img/icons/global.svg' style={{ fill: props.color, width: props.size }} />,
    accuracy: <ReactSVG src='../../static/img/icons/99-accuracy.svg' style={{ color: props.color, width: props.size }} />
  };

  return icon[props.name]

};

export default Icon;