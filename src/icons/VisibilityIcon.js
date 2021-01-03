import Icon from './Icon';
import { ReactComponent as RawVisibilityIcon } from '../assets/visibility.svg';

function VisibilityIcon(props) {
  return (
    <Icon as={RawVisibilityIcon} {...props} />
  );
}

export default VisibilityIcon;
