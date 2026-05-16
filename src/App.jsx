import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Logincard from './users/Logincard'
import Signupcard from './users/Signupcard'
import AdminLogin from './admin/Login'
import AdminSignup from './admin/Signup'
import Header from './users/dashbaord'
import './users/style.css'
import Home from './Home'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Logincard />} />
        <Route path="/signup" element={<Signupcard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/dashboard" element={<Header />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App