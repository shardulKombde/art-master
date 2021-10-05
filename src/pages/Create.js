import React , { useRef ,useState} from 'react';
import { Link , useHistory} from 'react-router-dom';
import './Create.css';
import {FaRegEyeSlash, FaRegEye} from 'react-icons/fa';
import loginImage from '../assets/login-image.png';
import { auth } from '../firebase';
import { AuthProvider, useAuth } from '../context/AuthContext'


function Create() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passConfirmRef = useRef()
    const history = useHistory();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [confirm, setconfirm] = useState('');
    const[visible,setVisible]=useState(false);
    const Input = visible ? "text" : "password";
    const icon_pass = visible ? <FaRegEye/> : <FaRegEyeSlash/>;
    const[visbility,setVisibility]=useState(false);
    const InputType = visbility ? "text" : "password";
    const icon = visbility ? <FaRegEye/> : <FaRegEyeSlash/>;
    const { signup, currentUser } = useAuth()
    const[error,setError] = useState('')
    const[loading,setLoading] = useState(false);

    async function register(e) {
        e.preventDefault();

        if(passwordRef.current.value !== passConfirmRef.current.value){
            return setError('Passwords do not match')
        }
        
        
        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            history.push('/')
        } catch {
            setError(error => alert(error.message))
        }
        setLoading(false)
    }

         
    // auth.createUserWithEmailAndPassword(email,password)
    //     auth.then((auth) => {
    //             if(auth)  {
    //                 history.pushState('/');
    
    //             }

    //             if(password!==confirm){
    //                 return setError('Passwords do not match')
    //             }
    //             try{
    //                 setError('');
    //             }
    //         })
    //         .catch(error => alert(error.message));
            
            
    

    return (
        
        <div className="login">
            
            <img className="login-image" src={loginImage}/>
           <Link to='/'>
            <h1 className="heading_login">Lorem</h1>
           </Link>
           <div className="login-container">
                <h1 className="header">Sign-In</h1>
                
                {error && <span className="error" variant="danger">{error}</span>}
                <form onSubmit={register}>  
                    <h5>E-mail</h5>
                    <input type='text' placeholder="abc@gmail.com"  ref={emailRef} />
                    {/* onChange=
                    {e=>setEmail(e.target.value)}/> */}

                    <h5>Password</h5>
                    
                    <input type={InputType} placeholder='Password' ref={passwordRef} />
                    {/* // onChange=
                    // {e=>setPassword(e.target.value)}/> */}

                    <i className="icons" onClick={() => setVisibility(visbility => !visbility)}>
                        {icon}
                        </i>

                    <h5>Confirm Password</h5>

                    <input type={Input} placeholder='Password' ref={passConfirmRef} />
                    {/* // {e=>setconfirm(e.target.value)}/> */}

                    <i className="icons" onClick={() => setVisible(visible => !visible)}>
                        {icon_pass}
                        </i>
                    
                    <button disabled ={loading} type='submit' className="login_btn" onClick={register}>Sign-Up</button>
                </form>
                
                <Link to="/login">
                    <p className="para">Already have an account?</p>
                </Link>
            </div>
            
        </div>
        
    )

}

export default Create