import LoginCard from '../../components/login-card';
import './login-page.css';

function LoginPage() {
    let width = '50%'
    let height = '70%'
    return (
        <div className='login-page'>
            <LoginCard width={width} height={height} color='#04f'/>
        </div>
    );
  }
  
  export default LoginPage;