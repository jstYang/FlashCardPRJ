import React, { useState } from 'react'
import './SignInSignUp.css'


import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import logo_icon from '../Assets/logo.png'
//import login_icon from '../Assets/login.png'


// SIGN UP SIGN IN SECTION 
const SignInSignUp = () => {
    const [action,setAction] = useState("Sign In");
  return (
<div className=" parent-container">
    
        <div className='logo-container'>
          <img src={logo_icon} alt='Logo' className='logo' />
        </div>
    
      <div className='container'>
        <div className="header">
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>
        
        <div className="inputs">

          {action === "Sign In" ? <div> </div>:
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name"/>
          </div>}
          
          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email"/>
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password"/>
          </div>
        </div>

        {action === "Sign Up" ? <div> </div> :
          <div className="forgot-password">Forgot Password?
            <span>Click Here!</span></div>}

        <div className="submit-container" >
          <div className={action === "Sign In" ? "submit gray" : "submit"} onClick={() =>{setAction("Sign Up")}}> Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() =>{setAction("Sign In")}}> Sign In</div>
        </div>

      </div> 
</div>   
  );
}
// END
export default SignInSignUp