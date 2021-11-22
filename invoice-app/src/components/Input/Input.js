const Input = ({ name, handleChange, value }) => {
  return (
    <div>
      <input name={name} onChange={handleChange} value={value} />
      <br />
    </div>
  );
};

export default Input;
