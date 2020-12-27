import Input from './Input';

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
      {...restProps}
    />
  );
}

export default PasswordInput;
