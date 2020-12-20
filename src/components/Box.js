function Box(props) {
  const {
    padding = '15px 20px',
    maxWidth,
    children,
  } = props;

  const hasMaxWidth = Number.isFinite(
    parseFloat(maxWidth)
  );

  const sx = {
    display: 'block',
    width: hasMaxWidth ? '100%' : 'auto',
    maxWidth,
    padding,

    backgroundColor: '#eee',
    border: '1px solid black',
    borderRadius: '3px',

    boxSizing: 'border-box',
  };

  return (
    <div style={sx}>
      {children}
    </div>
  );
}

export default Box;
