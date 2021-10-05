import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { usePaintingsContext } from '../context/paintings_context'

const HeartButtons = () => {

  const { closeSidebar } = usePaintingsContext()
  
  return <Wishlist className="heart-btn-wrapper">
      <Link to="/wishlist" className="heart-btn" onClick={closeSidebar}>
          <span className="heart-container">
            <FaHeart/>
           </span>
      </Link>
  </Wishlist>
}

const Wishlist  = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;

  .heart-btn {
    font-size: 2rem;
    letter-spacing: var(--spacing);
    color: var(--heart);
    display:flex;

    align-items: center;
  }
  .heart-container {
    display: flex;
    align-items: center;
    position: absolute;
    right:25%;
    top:2.5%;
    svg {
      height:4rem;
      
    }
  }

  @media (max-width: 444px){
    .heart-container {
    display: flex;
   
    position: absolute;
    right:29%;
    top:4.5%;
    svg {
      height:3rem;
      
    }
  }
  
  }
  @media (max-width: 300px){
    .heart-btn {
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--heart);
    display:flex;

    align-items: center;
  }
    .heart-container {
    display: flex;
   
    position: absolute;
    right:20%;
    top:4.5%;
    svg {
      height:2rem;
      
    }
  }
  }
  @media (max-width: 586px){
    .heart-container {
    display: flex;
   
    position: absolute;
    right:31%;
    top:4.5%;
    svg {
      height:3rem;
      
    }
  }
  
  }

 
`
export default HeartButtons
