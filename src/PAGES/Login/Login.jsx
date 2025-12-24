import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
const Login = () => {
    const[signstate , setsignstate] = useState("Sign In")


  return (
    <div className='Login'>
      <div className='Navbar'>
        <img src={logo} alt="Netflix logo" />
      </div>

      <div className='box'>
        <h2>{signstate }</h2>

        <form>
            {signstate==="Sign Up"? <input type="text" placeholder='Enter your name' />:<></>}
           
            <input type="email" placeholder='Email or phone number' />
            <input type="password" placeholder='Password' />
            <button type='submit'>{signstate}</button>
            <div className='login-help'>
                <label>Remember me</label>
                <input type="checkbox" name="" id="" />
              <p>Need Help</p>
            </div>
        </form>
        <div className='sign-uptext'>{signstate==="Sign In" ? <p >New to Netflix?<span onClick={() =>{setsignstate("Sign Up")}}>Sign Up Now</span></p> : <p>Already to Account<span onClick={()=>{setsignstate("Sign In")}}>Sign In</span></p>}
        
        
        </div>
      </div>      
    </div>
  );
};

export default Login
 