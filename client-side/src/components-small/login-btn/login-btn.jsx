const styles = {
    width: '35%',
    height: '100%',
}

function LoginBtn({text}) {
    if ({text}) {
        return (
            <button style={styles}>{text}</button>
        )
    }
    return (
        <button style={styles}/>
    )
}

export default LoginBtn;