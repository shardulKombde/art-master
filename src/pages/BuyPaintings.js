import React, {useState} from 'react'
import styled from 'styled-components'
import { Navbar, Sidebar, Footer } from '../components'
import {db,auth} from '../firebase'

const BuyPaintings = ({user}) => {

  
  return <BuyWork>
     <Navbar/>
    <Sidebar/>
  <h1>Buy painting</h1>
  </BuyWork>
}

const BuyWork = styled.section`



`

export default BuyPaintings