const Field = (props) => {
  const { id, type, text, className = "", value, onInput, svg } = props;
  return (
    <div className={className}>
      <input
        id={id}
        type={type}
        onInput={onInput}
        value={value}
        placeholder=""
        maxLength={300}
      ></input>
      <label htmlFor={id}>{text}</label>
      {!value ? svg : ""}
    </div>
  );
};
export default Field;
