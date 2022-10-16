function FajlInput(props) {
    const { fileInputChange } = props;
    return ( 
        <input type="file" onChange={(e) => fileInputChange(e.target.files[0])} className="form-control"/>
     );
}

export default FajlInput;