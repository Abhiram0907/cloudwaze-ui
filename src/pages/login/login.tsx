import './login.css';
import cloudwazeLogo from '../../assets/cloudwaze.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin: any = () => {
        console.log('Login button clicked');
        // route to client dashboard
        navigate('/client');
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="img">
                    <img src={cloudwazeLogo} alt="CloudWaze" className="login-logo" />
                </div>
                <input type="text" className="forms" placeholder="Username" />
                <input type="text" className="forms" placeholder="Password" />
                
                <a className="forgot-password" href="#">Forgot Password?</a>
                
                <button className="login-button" onClick={handleLogin}>Login</button>

                {/* <label className="remember-me">
                    <input type="checkbox" className="remember-me-checkbox" />
                    Remember me on this device
                </label> */}
            </div>
        </div>
    );
};

export default Login;

{/* <div className="header"></div>
<div className="content"></div>
<div className="footer"></div> */}