function Logincard() {
    return(
        <>
          <div className="title">
            <h1>Welcome to my Leaderboard</h1>
          </div>
          <div>
            <button>User</button>
            <button>Admin</button>
          </div>
          <div>
            <p>Hey👋, this is Amrah. If you already have an account login here</p>
          </div>
          <div>
            <h5>Username</h5>
            <input type="text"
            placeholder="Enter your Username"
            />
          </div>
          <div>
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
        </>
    );
}
export default Logincard