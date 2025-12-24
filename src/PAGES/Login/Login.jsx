import React from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <div className='Login'>
      <div className='Navbar'>
        <img src={logo} alt="Netflix logo" />
      </div>

      <div className='box'>
        <h2>Sign In</h2>

        <form>
            <input type="email" placeholder='Email or phone number' />
            <input type="password" placeholder='Password' />
            <button type='submit'>Sign in</button>
            <div className='login-help'>
                <label>Remember me</label>
                <input type="checkbox" name="" id="" />
              <p>Need Help</p>
            </div>
        </form>
        <p className='sign-uptext'>New to Netflix?     <span>Sign Up Now</span></p>
        <p className='sign-uptext'>Already to Account     <span>Sign In</span></p>
      </div>      
    </div>
  );
};

export default Login
 