function Input(props) {
  const {
    labelText,
    id,
    ...restProps
  } = props;

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',

    fontSize: '18px',
  };

  const inputStyle = {
    display: 'block',
    width: '100%',
    padding: '15px',

    fontFamily: 'inherit',
    fontSize: '16px',

    color: 'inherit',
    border: '1px solid rgba(0, 0, 0, .25)',
    borderRadius: '3px',

    boxSizing: 'border-box',
  };

  return (
    <div>
      <label style={labelStyle} htmlFor={id}>
        {labelText}
      </label>
      <input
        style={inputStyle}
        id={id}
        {...restProps}
      />
    </div>
  );
}

export default Input;
