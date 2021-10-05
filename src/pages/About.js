import React from 'react'
import styled from 'styled-components'
import { Navbar, Sidebar, Footer } from '../components'


const About = () => {
  return <AboutPage>
     <Navbar/>
    <Sidebar/>
  <article className="aboutus">
  <div className="about-rectangle">
    <h1>About Us</h1>
    <p> Lorem Ipsum is simply dummy text of the printing <br/>
                and typesetting industry. Lorem Ipsum has been the <br/>
                industry's standard dummy text ever since the 1500s, <br/>
                when an unknown printer took a galley of type and <br/>
                scrambled it to make a type specimen book. It has <br/>
                survived not only five centuries, but also the leap <br/>
                into electronic typesetting <br/>
               </p>
                </div>
  </article>
  <Footer/>
  </AboutPage>
}

const AboutPage = styled.section`

.about-rectangle{
  margin-left:25%;
  margin-top:10%;
  margin-bottom:15%;
  background-color:var(--white);
  width:50%;
  height:650px;
  position:center;
  text-align:center;
  border: 7px solid var(--exbtn);
    h1{
    font-size: 5rem;
    padding-bottom: 0.2rem;
    color: var(--black);
    filter: drop-shadow(1px 1px 1px gray);
    cursor: pointer;
    font-family: 'tangerine', cursive;
    font-weight: bold;
    margin-top:10%;
    
    }
    p{
    margin-top:5%;
    font-size: 2rem;
    color: var(--circle2);
    font-family: 'Pompiere', cursive;
    font-weight:bold;
   
    }
}

@media (max-width: 992px)
{
  .aboutus{
    align-content:center;
  }
  .about-rectangle{
    margin-left:18%;
    width:65%;
    height:600px;
    align-self:center;
    h1{
      font-size:3.9rem;
    }
    p{
      font-size:1.8rem;
      padding:1rem;
    }
  }

}
@media (max-width: 730px)
{
  .aboutus{
    align-content:center;
  }
  .about-rectangle{
 
    width:96%;
    height:550px;
    margin-left:2%;
    margin-right:2%;
    align-self:center;
    border: 5px solid var(--exbtn);
    h1{
      font-size:3.5rem;
    }
    p{
      font-size:1.5rem;
      padding:1rem;
    }
  }


}
@media (max-width: 412px)
{
  .aboutus{
    align-content:center;
  }
  .about-rectangle{
 
    width:96%;
    height:620px;
    margin-left:2%;
    margin-right:2%;
    align-self:center;
    border: 5px solid var(--exbtn);

  }


}
   
   


`

export default About