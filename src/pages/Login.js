import React , {useState, useRef} from 'react';
import { Link , useHistory} from 'react-router-dom';
// import './Login.css';
import { FaRegEyeSlash , FaRegEye } from 'react-icons/fa';
import loginImage from '../assets/sidebarbg.jpg';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext'

import styled from 'styled-components'



function Login() {
    const history = useHistory();
    const emailRef = useRef()
    const passwordRef = useRef()
    const[visible,setVisible]=useState(false);
    const Input = visible ? "text" : "password";
    const icon_pass = visible ? <FaRegEye/> : <FaRegEyeSlash/>;
    const[visbility,setVisibility]=useState(false);
    const InputType = visbility ? "text" : "password";
    const icon = visbility ? <FaRegEye/> : <FaRegEyeSlash/>;
    const { login } = useAuth()
    const[error,setError] = useState('')
    const[loading,setLoading] = useState(false);

    async function signIn(e) {
        e.preventDefault();

        
        
        
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    }


    return (
   
        <div className="login">
        
                <img className="login-image" src={loginImage}/>
               
           <Link to='/'>
            <h1 className="heading_login">Lorem</h1>
           </Link>
           <div className="login-container">
                <h1 className="header">Login</h1>
                {error && <span className="error" variant="danger">{error}</span>}
                <form>
                    <h5>E-mail</h5>
                    <input type='text' placeholder="abc@gmail.com" ref={emailRef}/>
                    

                    <h5>Password</h5>
                    
                    <input type={InputType} placeholder='Password'  ref={passwordRef}/>
                    <i className="icons" onClick={() => setVisibility(visbility => !visbility)}>
                        {icon}
                        </i>
                    
                    
                    <button type='submit' className="login_btn" onClick={signIn}>Login</button>
                </form>
                <p className="para">Not registered?</p>
                <Link to="/create">
                <button className="create_btn" >Create new Account</button>
                </Link>
            </div>
        </div>
        
       )

}

// const LoginPage = styled.section`



// `

export default Login