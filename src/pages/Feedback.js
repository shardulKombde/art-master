import React, {useState} from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { Navbar, Sidebar, Footer } from '../components'

const Feedback = () => {

const [state,setState] = useState({
    email:'',
    message: ''
});

const [result, setResult] = useState(null);

const sendEmail = event => {
  event.preventDefault();
  axios
     .post('/send', {...state })
     .then(response => {
       setResult(response.data);
       setState({
         email: '',
         message: ''
       });
     })
     .catch(() => {
       setResult({
         success: false,
         message: 'Something went wrong. Try again later'
       });
     });
};

const onInputChange = event => {
  const {name,value } = event.target;


  setState({
    ...state,
    [name]:value
  });

};



  return <FeedbackForm>
  <Navbar/>
    <Sidebar/>
  <section className="feedback-form">
    <div className="feedback-rectangle">
      <h2>Feedback Form</h2>
      {result && (
        <p className={`${result.success ? 'Success' : 'Error'}`}>
          {result.message}
        </p>
      )}
      <form onSubmit={sendEmail}>
      <div className="email-div">
      <label className="email" for="email">Email </label>  
      
      <input 
      className="emailI" 
      type="email" 
      id="email" 
      name="email"
      placeholder="Enter your email"
      value={state.email}
      onChange={onInputChange}
     

      />    

      </div>
      <div className="textarea-div">
        <label className="textarea-label">Feedback </label>
        <textarea 
        className="textarea-box" 
        type="text" 
        name="message"
        value={state.message}
        placeholder="Enter your Feedback"
        onChange={onInputChange}
       
        />
      </div>
      <button className="submit"><a>Submit</a></button>
      </form>
    </div>
  </section>
  
  </FeedbackForm>
}


const FeedbackForm = styled.section`
   input:focus, textarea:focus, select:focus{
        outline: none;
    }
.feedback-rectangle{
  position:relative;
  background-color:var(--white);
  width:50%;
  height:400px;
  align-content:center;
  margin-left:25%;
  margin-right:25%;
  margin-top:2%;
  border: 5px solid var(--exbtn);
  
  h2{
    font-family: 'tangerine', cursive;
    font-size:3rem;
    margin-top:2%;
  }
}
label {    
    font-family: 'Cabin', sans-serif;
    color: var(--circle1);
    font-size: 1.1rem;
    font-weight: bolder;
  }  
  input{
   width: 60%;
    height: 30px;
    border-radius: 40px;
    border:none;
    background-color:var(--circle3);
    text-align:center;
    font-size:1.2rem;
    font-family: 'Cabin', sans-serif;
    color: var(--circle1);
}
.textarea-label{
  position:absolute;
  left:11%;
 top:48%;
}
.textarea-box{
    width: 60%;
    height: 70px;
    font-size:1.2rem;
    font-family: 'Cabin', sans-serif;
    color: var(--circle1);
    border-radius: 10px;
    border:none;
    background-color:var(--circle3);
    text-align:center;
    position:absolute;
    left:25%;
    top:45%;
}
textarea::placeholder{
  font-size:1rem;
  font-family: 'Cabin', sans-serif;
  
}
input::placeholder
{
    font-size: 1rem;
    font-family: 'Cabin', sans-serif;
 
} 
.email-div{
  display:flex;
  flex-direction:row;
  flex-flow:wrap;
  
}
.email{
  position:absolute;
  left:14%;
 top:25%;
 
}
.emailI{
position:absolute;
left:25%;
top:25%;
}
.submit{
  position:absolute;
  top:80%;
  margin-left:-12%;  
  align-self:center;
  background-color: var(--addbtn); /* Green */
  border: none;
  padding: 15px 50px;
  text-align: center;
  border-radius: 20px;
  vertical-align:middle;
  &:hover{
        background-image: linear-gradient(to right, #88CFFD 0%, #CAE8FC 51%, #E3F1F7 100%);
  }
  a{
    font-family: 'Cabin', sans-serif;
    font-size: 20px;
    font-weight:bold;
    text-decoration: none;
    color: var(--black);
   }
}



  @media (max-width: 1026px){

 .feedback-rectangle{
  width:70%;
  align-content:center;
  margin-left:15%;
  justify-content:center;

}
    .email-div{
  display:flex;
  flex-direction:column;
  flex-flow:wrap;
  
}
.email{
  position:absolute;
  left:11%;
 top:25%;
 
}
.emailI{
position:absolute;
left:10%;
top:35%;
width:80%;
}
.textarea-label{
  position:absolute;
  left:11%;
  top:48%;
}
.textarea-box{
    width: 80%;
    height: 70px;
    position:absolute;
    left:10%;
    top:55%;
}


  }

  @media (max-width: 650px){
    .submit{
      position:absolute;
      top:80%;
      margin-left:-17%;
    }
  }
  @media (max-width: 540px){
    .submit{
      position:absolute;
      top:80%;
      margin-left:-19%;
    }
  }
  @media (max-width: 450px){
    .submit{
      position:absolute;
      top:80%;
      margin-left:-25%;
    }
  }
  @media (max-width: 420px){
    .feedback-rectangle{
  width:96%;
  align-content:center;
  margin-left:2%;
  margin-right:2%;
  justify-content:center;

}
    .submit{
      position:absolute;
      top:80%;
      margin-left:-21%;
    }
  }
  @media (max-width: 360px){
    .feedback-rectangle{
  width:96%;
  align-content:center;
  margin-left:2%;
  margin-right:2%;
  justify-content:center;

}
    .submit{
      position:absolute;
      top:80%;
      margin-left:-25%;
    }
  }
`
export default Feedback