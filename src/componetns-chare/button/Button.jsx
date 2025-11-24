const Button = (props) => {
  const { children, type = "button", className, onClick, disabled } = props;
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
