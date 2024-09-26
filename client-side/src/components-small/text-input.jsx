function TextInput({ placeholder = null, type = 'text', required = false}) {
    return (
            <input type={type} placeholder={placeholder} required={required}/>
    );
}

export default TextInput;