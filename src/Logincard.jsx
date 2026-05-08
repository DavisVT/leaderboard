function Logincard() {
    return(
        <>
     <div className="container">
         <div className="mainbody">
            <div className="title">
            <h5>Welcome to Leaderboard</h5>
          </div>
          <div className="togglebtn">
            <button>User</button>
            <button>Admin</button>
          </div>
          <div>
            <p className="subtitle">Hey👋, this is Amrah. If you already have an account login here</p>
          </div>
          <div className="usernameinput">
            <h5 className="usertext">Username</h5>
            <input type="text"
            placeholder="Enter your Username"
            className="userinputfield"
            />
          </div>
          <div className="passwordinput">
            <h5>Password</h5>
            <input type="text"
            placeholder="Enter your Password"
            />
          </div>
          <div>
            <input type="checkbox" />
            <span>Remember Me</span>
            <span>Forgot Password?</span>
          </div>
          <div>
            <span>Forgot Password?</span>
          </div>
          <button>Login</button>
        </div>
     </div>
        </>
    );
}
export default Logincard