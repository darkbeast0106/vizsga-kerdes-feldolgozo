function FajlInput(props) {
  const { fileInputChange } = props;
  return (
    <div className="mt-2">
      <input
        placeholder="Letöltött kérdésbank"
        type="file"
        onChange={(e) => fileInputChange(e.target.files[0])}
        className="form-control"
      />
    </div>
  );
}

export default FajlInput;
