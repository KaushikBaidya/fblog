import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate()

  const signIn = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/')
    })
  }

  return (
    <div className="loginPage">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signIn}>
        Sign in with Google
      </button>
    </div>
  )
}

export default Login
