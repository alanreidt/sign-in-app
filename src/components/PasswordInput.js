import Input from './Input';
import VisibilityToggle from './VisibilityToggle';

function PasswordInput(props) {
  const {
    labelText = 'Password:',
    id = 'password',
    name = 'password',
    placeholder = 'Enter your password',
    autoComplete = 'current-password',
    ...restProps
  } = props;

  return (
    <Input
      type="password"
      labelText={labelText}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
      icon={<VisibilityToggle/>}
      {...restProps}
    />
  );
}

export default PasswordInput;
