import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup } from '../../firebase'

const Login = () => {
  const [signState, setSignState] = useState('Sign In')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (signState === 'Sign In') {
        await login(email, password)
      } else {
        await signup(name, email, password)
      }
    } catch (err) {
      setError(err.message)
    }

    setLoading(false)
  }

  return (
    <div className="login">
      
      <div className="Navbar">
        <img src={logo} alt="Netflix logo" />
      </div>

      <div className="box">
        <h2>{signState}</h2>

        <form onSubmit={handleSubmit}>
          {/* Name only for Sign Up */}
          {signState === 'Sign Up' && (
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Please wait...' : signState}
          </button>

          <div className="login-help">
            <div>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>

        <div className="sign-uptext">
          {signState === 'Sign In' ? (
            <p>
              New to Netflix?
              <span onClick={() => setSignState('Sign Up')}>
                {' '}Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setSignState('Sign In')}>
                {' '}Sign In
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
