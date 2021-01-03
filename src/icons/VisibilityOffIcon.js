import Icon from './Icon';
import { ReactComponent as RawVisibilityOffIcon } from '../assets/visibility_off.svg';

function VisibilityOffIcon(props) {
  return (
    <Icon as={RawVisibilityOffIcon} {...props} />
  );
}

export default VisibilityOffIcon;
