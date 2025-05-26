import React, {useState} from 'react'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';  // your path may vary


function Login() {
    // allow programtically change the URL
    const navigate = useNavigate();
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState(""); 
    const signIn = e=>{
        e.preventDefault(); // Prevents the page from refreshing
        // Do some fancy firebase login stuff
        console.log("Sign In");
    }
    const register = e=>{
        e.preventDefault(); // Prevents the page from refreshing
        // Do some fancy firebase register stuff

        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
          console.log('User auth:', auth);
          if(auth) {
            // Successfully created a new user
            navigate('/');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    
    }

  return (
    <div className='login'>
        <Link to="/">
        
            <img className='login__logo'
            src = "https://pngimg.com/uploads/amazon/amazon_PNG6.png" />

        </Link>
        <div className='login__container'>
            <h1>Sign-In</h1>

            <form>
                <h5>Email</h5>
                <input type="text" value = {email} 
                onChange = {e => setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value = {password} 
                onChange = {e=>setPassword(e.target.value)} />
                <button type = "submit" onClick={signIn}
                className='login__signInButton' >Sign In</button>
            
            </form>

            <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions 
                of Use & and Privacy Notice. </p>
            <button  type="submit" onClick = {register} 
            className='login__registerButton'>Create your Amazon Account</button>
        </div>
    </div>

  )
}

export default Login
