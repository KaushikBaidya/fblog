import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppBar from './Components/Appbar/AppBar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import SignUp from './Components/SignUp/SignUp'
import './App.css'

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
