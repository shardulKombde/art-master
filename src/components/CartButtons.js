import React from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { usePaintingsContext } from '../context/paintings_context'
import { useAuth  } from '../context/AuthContext'
import { auth } from '../firebase'


const CartButtons = () => {

const { closeSidebar } = usePaintingsContext()

const { currentUser } = useAuth()

const handleAuthentication = () => {
  if(currentUser){
    auth.signOut();
  }
}

  return <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
          <span className="cart-container">
            <FaShoppingCart/>
            <span className="cart-value">12</span>
          </span>
      </Link>
      <Link to="/login">
      <div className="login">
      <button onClick={handleAuthentication} type='button' className="auth-btn">
        {currentUser ? 'LOGOUT ' : 'LOGIN ' } 
      </button>
      </div>
      </Link>
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 225px;
  .cart-btn {
    font-size: 2rem;
    letter-spacing: var(--spacing);
    color: var(--heading);
    display:flex;

    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: absolute;
    right:18%;
    top:2.5%;
    svg {
      height:4rem;
      
    }
  }
  .cart-value {
    position: absolute;
    top: 0px;
    right: -16px;
    background: var(--black);
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.9rem;
    font-weight:bolder;
    color: var(--white);
    padding: 12px;
  }
  .auth-btn {
   
    background: transparent;
    border-color: transparent;
    cursor: pointer;
    color: var(--black);
    letter-spacing:1px;
    font-size: 1.1rem;
    font-weight:bold;
    display:flex;
    align-items: center;
    position: absolute;
    right:6%;
    top:5%;
    
    svg {
      font-size:1.1rem;
      margin-left:5px;
    }
    &:hover{
      color:var(--circle1);
      border-bottom: 2px  solid var(--heading);
    }
  }

  
  @media (max-width: 444px){
    .cart-container {
    display: flex;
    align-items: center;
    position: absolute;
    right:20%;
    top:4.5%;
    svg {
      height:3rem;
      
    }
  }
  .cart-value {
    position: absolute;
    top: -7.5px;
    right: -16px;
   
    width: 10px;
    height: 10px;
    display: flex;
   
  }

  }
  @media (max-width: 300px){
    .cart-btn {
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--heading);
    display:flex;

    align-items: center;
  }
    .cart-container {
    display: flex;
    align-items: center;
    position: absolute;
    right:20%;
    top:4.5%;
    svg {
      height:2rem;
      
    }
  }
  .cart-value {
    position: absolute;
    top: -6.5px;
    right: -16px;
   
    width: 5px;
    height: 5px;
    display: flex;
   
  }

  }
`
export default CartButtons
