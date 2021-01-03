import { useState } from 'react';
import { Link } from 'react-router-dom';

import Input from './Input';
import VisibilityToggle from './VisibilityToggle';

const toggleType = (doToggle) => doToggle ? 'text' : 'password';
const toggleTitle = (doToggle) => `${doToggle ? 'Hide' : 'Show'} password`;
const toggleAriaLabel = (doToggle) => doToggle
  ? 'Hide password'
  : 'Show password as plain text. Warning: this will display your password on the screen';

function PasswordInput(props) {
  const {
    labelText = 'Password:',
    id = 'password',
    name = 'password',
    placeholder = 'Enter your password',
    autoComplete = 'current-password',
    ...restProps
  } = props;

  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleVisibilityToggleClick = () => {
    setIsPasswordShown((value) => !value);
  };

  const visibilityToggle = (
    <VisibilityToggle
      aria-label={toggleAriaLabel(isPasswordShown)}
      title={toggleTitle(isPasswordShown)}
      isItemShown={isPasswordShown}
      onClick={handleVisibilityToggleClick}
    />
  );

  return (
    <Input
      type={toggleType(isPasswordShown)}
      labelText={labelText}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      link={<Link to="/password-recovery">Forgot password?</Link>}
      icon={visibilityToggle}
      {...restProps}
    />
  );
}

export default PasswordInput;
