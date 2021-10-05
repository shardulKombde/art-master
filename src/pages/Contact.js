import React from 'react'
import styled from 'styled-components'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter,FaRegEnvelope,FaPhoneAlt} from 'react-icons/fa'
import { Navbar, Sidebar, Footer } from '../components'


const Contact = () => {
  return <ContactPage>
  <Navbar/>
    <Sidebar/>
    <article className="contactus">
      <div className="contact-rectangle">
        <h1>Contact Us</h1>
          <FaRegEnvelope className="icons"/> <br/><br/>
          <p class="contact1"><a>random@gmail.com</a></p><br/>
          <FaPhoneAlt className="icons"/><br/><br/>
          <p>Shardul Kombde - 7057154104 <br/>
             Rajnandini Baheti - 9307960515 </p>
             <div className="icons-down">
          <FaLinkedin className="ic" />
          <FaFacebook className="ic"/>
         <FaInstagram className="ic"/>
        <FaTwitter className="ic" />
        </div>
      </div>
    </article>
    <Footer/>
  </ContactPage>
}

const ContactPage = styled.section`
.contact-rectangle{
  margin-left:25%;
  margin-top:10%;
  margin-bottom:15%;
  background-color:var(--white);
  width:50%;
  height:800px;
  position:center;
  text-align:center;
  align-content:center;
  border: 7px solid var(--exbtn);
    h1{
      font-size: 5rem;
    padding-bottom: 2rem;
    color: var(--heading);
    filter: drop-shadow(1px 1px 1px gray);
    cursor: pointer;
    font-family: 'tangerine', cursive;
    font-weight: bold;
    margin-top:10%;
    }
    p{
      margin-top:5%;
    font-size: 2rem;
    letter-spacing:.1rem;
    color: var(--circle1);
    font-family: 'Pompiere', cursive;
    font-weight:bold;
    }
}
.icons-down{
 color:var(--addbtn);
 font-size:3.5rem;
 margin-top:3rem;
 
}
.ic{
  margin-right:2rem;
  &:hover{
  font-size: 4rem;    
  color: #3BACF5;
  
 }
}
.icons{
 color:var(--addbtn);
 font-size:3.5rem;
 &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}
@media (max-width: 992px)
{
  .contact-rectangle{
    margin-left:18%;
    width:65%;
    position:center;
  }
@media (max-width: 730px)
{
  .contactus{
    align-content:center;
  }
  .contact-rectangle{
 
    width:80%;
    height:750px;
    margin-left:10%;
    margin-right:10%;
    align-self:center;
    align-content:center;
    border: 5px solid var(--exbtn);
    h1{
      font-size: 5rem;
    padding-bottom: 2rem;
    margin-top:10%;
    }
    p{
      margin-top:5%;
    font-size: 2rem;
    
    }
   
  }
.icons-down{
 color:var(--addbtn);
 font-size:3.5rem;
 margin-top:3rem;
 align-self:center;
 margin-left:10%;
}
.ic{
  margin-right:2rem;
  &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}
.icons{
 color:var(--addbtn);
 font-size:3.5rem;
 &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}

}
@media (max-width: 520px)
{
  .contactus{
    align-content:center;
  }
  .contact-rectangle{
 
    width:80%;
    height:650px;
    margin-left:10%;
    margin-right:10%;
    align-self:center;
    align-content:center;
    border: 5px solid var(--exbtn);
    h1{
      font-size: 4rem;
    padding-bottom: 2rem;
    margin-top:10%;
    }
    p{
      margin-top:5%;
    font-size: 1.5rem;
    
    }
   
  }
.icons-down{
 color:var(--addbtn);
 font-size:2.8rem;
 margin-top:3rem;
 align-self:center;
 margin-left:10%;
}
.ic{
  margin-right:2rem;
  &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}
.icons{
 color:var(--addbtn);
 font-size:3.5rem;
 &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}

}
@media (max-width: 440px)
{
  .contactus{
    align-content:center;
  }
  .contact-rectangle{
 
    width:80%;
    height:650px;
    margin-left:10%;
    margin-right:10%;
    align-self:center;
    align-content:center;
    border: 5px solid var(--exbtn);
    h1{
      font-size: 4rem;
    padding-bottom: 2rem;
    margin-top:10%;
    }
    p{
      margin-top:5%;
    font-size: 1.5rem;
    
    }
   
  }
.icons-down{
 color:var(--addbtn);
 font-size:2rem;
 margin-top:3rem;
 align-self:center;
 margin-left:10%;
}
.ic{
  margin-right:2rem;
  &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}
.icons{
 color:var(--addbtn);
 font-size:3rem;
 &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}

}
@media (max-width: 369px)
{
  .contactus{
    align-content:center;
  }
  .contact-rectangle{
 
    width:80%;
    height:650px;
    margin-left:10%;
    margin-right:10%;
    align-self:center;
    align-content:center;
    border: 5px solid var(--exbtn);
    h1{
      font-size: 4rem;
    padding-bottom: 2rem;
    margin-top:10%;
    }
    p{
      margin-top:5%;
    font-size: 1.5rem;
    
    }
   
  }
.icons-down{
 color:var(--addbtn);
 font-size:2.5rem;
 margin-top:3rem;
 align-self:center;
 margin-left:10%;
}
.ic{
  margin-right:2rem;
  &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}
.icons{
 color:var(--addbtn);
 font-size:3rem;
 &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}

}
@media (max-width: 344px)
{
  .contactus{
    align-content:center;
  }
  .contact-rectangle{
 
    width:96%;
    height:650px;
    margin-left:2%;
    margin-right:2%;
    align-self:center;
    align-content:center;
    border: 5px solid var(--exbtn);
    h1{
      font-size: 4rem;
    padding-bottom: 2rem;
    margin-top:10%;
    }
    p{
      margin-top:5%;
    font-size: 1.5rem;
    
    }
   
  }
.icons-down{
 color:var(--addbtn);
 font-size:2.1rem;
 margin-top:3rem;
 align-self:center;
 margin-left:10%;
}
.ic{
  margin-right:2rem;
  &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}
.icons{
 color:var(--addbtn);
 font-size:3rem;
 &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}

}
@media (max-width: 314px)
{
  .contactus{
    align-content:center;
  }
  .contact-rectangle{
 
    width:96%;
    height:650px;
    margin-left:2%;
    margin-right:2%;
    align-self:center;
    align-content:center;
    border: 5px solid var(--exbtn);
    h1{
      font-size: 4rem;
    padding-bottom: 2rem;
    margin-top:10%;
    }
    p{
      margin-top:5%;
    font-size: 1.5rem;
    
    }
   
  }
.icons-down{
 color:var(--addbtn);
 font-size:1.9rem;
 margin-top:3rem;
 align-self:center;
 margin-left:10%;
}
.ic{
  margin-right:2rem;
  &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}
.icons{
 color:var(--addbtn);
 font-size:3rem;
 &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}

}
@media (max-width: 289px)
{
  .contactus{
    align-content:center;
  }
  .contact-rectangle{
 
    width:96%;
    height:650px;
    margin-left:2%;
    margin-right:2%;
    align-self:center;
    align-content:center;
    border: 5px solid var(--exbtn);
    h1{
      font-size: 3rem;
    padding-bottom: 2rem;
    margin-top:10%;
    }
    p{
      margin-top:5%;
    font-size: 1.5rem;
    
    }
   
  }
.icons-down{
 color:var(--addbtn);
 font-size:1.7rem;
 margin-top:3rem;
 align-self:center;
 margin-left:10%;
}
.ic{
  margin-right:2rem;
  &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}
.icons{
 color:var(--addbtn);
 font-size:3rem;
 &:hover{
  font-size: 4rem;    
  color: #3BACF5;
 }
}

}

`

export default Contact