import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppBar from './Components/Appbar/AppBar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import CreatePost from './Components/Create/CreatePost.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/createpost" element={<CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App
