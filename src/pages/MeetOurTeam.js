import React from 'react'
import styled from 'styled-components'
import dot  from '../assets/dot.png'
import { Navbar, Sidebar, Footer } from '../components'


const MeetOurTeam = () => {
  return <MeetPage>
    <Navbar/>
    <Sidebar/>
   <section className="meetTeam">
     <div >
       <img className="circleimg"  src={dot}/>
       <h3 >Shardul Kombde</h3>
     </div>
     <div className="us2">
       <img  className="circleimg" src={dot}/>
      <h3 >Rajnandini Baheti</h3>
     </div>
   </section>
  </MeetPage>
}

const MeetPage = styled.section`
.meetTeam{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
    h3
{
    font-size: 4rem;
    margin-bottom:30%;
    font-family: 'tangerine',cursive;
   
}
}
 @media (max-width: 1032px)
{
  .circleimg{
    height:300px;
    width:300px;
  }
  .meetTeam{
  
    h3{
      font-size: 3rem;
    }
  }
 
} 
@media (max-width: 600px)
{
  .circleimg{
    height:250px;
    width:250px;
  }
  .meetTeam{
   
    h3{
      font-size: 2.5rem;
    }
  }
} 
@media (max-width: 515px)
{
  .circleimg{
    height:300px;
    width:300px;
  }
  .meetTeam{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    h3{
      font-size: 2.5rem;
      margin-bottom:10%;
    }
  }
} 
@media (max-width: 305px)
{
  .circleimg{
    height:250px;
    width:250px;
  }
  .meetTeam{
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    h3{
      font-size: 2.5rem;
    }
  }
} 


`
export default MeetOurTeam