import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AppBar from './Components/Appbar/AppBar'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'
import CreatePost from './Components/Create/CreatePost.jsx'
import './App.css'
import { useState } from 'react'

function App() {
  const [isAuth, setIsAuth] = useState(false)
  return (
    <Router>
      <AppBar isAuth={isAuth} setIsAuth={setIsAuth} />
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route exact path="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route
          exact
          path="/createpost"
          element={<CreatePost isAuth={isAuth} />}
        />
      </Routes>
    </Router>
  )
}

export default App
