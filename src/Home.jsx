import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()

    return(
        <div className="home-container">
            <h1 className="home-title">Welcome to Leaderboard</h1>
            <div className="home-cards">
                <div className="home-card">
                    <h2>User</h2>
                    <button onClick={() => navigate('/login')}>Login</button>
                    <button onClick={() => navigate('/signup')}>Sign Up</button>
                </div>
                <div className="home-card">
                    <h2>Admin</h2>
                    <button onClick={() => navigate('/admin/login')}>Login</button>
                    <button onClick={() => navigate('/admin/signup')}>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default Home