import styles from './text-input.module.css';

function TextInput({ placeholder = null, type = 'text', required = false}) {
    return (
            <input type={type} className={styles.loginInputDefault} placeholder={placeholder} required={required}/>
    );
}

export default TextInput;