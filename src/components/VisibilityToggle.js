import styled from 'styled-components';

import VisibilityIcon from '../icons/VisibilityIcon';
import VisibilityOffIcon from '../icons/VisibilityOffIcon';

const RawButton = styled.button`
  display: inline-block;
  vertical-align: top;
  padding: 0;

  border: none;
  cursor: pointer;
`;

function VisibilityToggle(props) {
  const {
    isItemShown = false,
    ...restProps
  } = props;

  return (
    <RawButton type="button" {...restProps}>
      {isItemShown
        ? <VisibilityOffIcon/>
        : <VisibilityIcon/>
      }
    </RawButton>
  );
}

export default VisibilityToggle;
