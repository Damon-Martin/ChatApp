import RoundagleCard from '../../components/roundagle-card';
import './login-page.css';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
function LoginPage() {
    let width = '50%'
    let height = '70%'
    return (
        <div className='login-page'>
            <RoundagleCard width={width} height={height} color='#04f'> 
                <h1>Login</h1>
            </RoundagleCard>
        </div>
    );
  }
  
  export default LoginPage;