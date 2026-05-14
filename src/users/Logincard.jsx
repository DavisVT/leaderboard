import { useNavigate } from 'react-router-dom'
import './style.css'

function Logincard() {
    const navigate = useNavigate()

    return(
        <>
        <div className="signup-container">
            <button className="signupbtn" onClick={() => navigate('/signup')}>SignUp</button>
        </div>
     <div className="container">
         <div className="mainbody">
            <div className="title">
              <h5 className="title-text">Welcome Back!</h5>
            </div>
            <div className="toggle-container">
              <input type="checkbox" id="toggle" />
              <label htmlFor="toggle" className="toggle-label">
                <span className="option user">User</span>
                <span className="option admin">Admin</span>
                <div className="slider"></div>
              </label>
            </div>
            <p className="subtitle">Hey👋, this is Amrah. If you already have an account login here</p>
            <div className="inputgroup">
              <h5 className="inputlabel">Username</h5>
              <input type="text" placeholder="Enter your Username" className="inputfield"/>
            </div>
            <div className="inputgroup">
              <h5 className="inputlabel">Password</h5>
              <input type="text" placeholder="Enter your Password" className="inputfield"/>
            </div>
            <div className="remember-forgot">
              <div>
                <input type="checkbox" />
                <span>Remember Me</span>
              </div>
              <div>
                <span>Forgot Password?</span>
              </div>
            </div>
            <div className="loginbtn-container">
              <button className="loginbtn">Login</button>
            </div>
          </div>
     </div>
        </>
    );
}
export default Logincard