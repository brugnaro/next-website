import Global from '../../static/img/icons/global.svg'
import Accuracy from '../../static/img/icons/99-accuracy.svg'

const Icon = (props) => {

  const icon = {
    global: <Global style={{ fill: props.fill, width: props.size }} />,
    accuracy: <Accuracy style={{ fill: props.fill, width: props.size }} />
  };

  return icon[props.name]

};

export default Icon;