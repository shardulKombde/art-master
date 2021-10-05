import React from 'react'
import {HomePage } from '../components'
import { Navbar, Sidebar, Footer } from '../components'
import { AuthProvider } from '../context/AuthContext'

const Home = () => {
  return (
  <main>
    <AuthProvider>
     <Navbar/>
    <Sidebar/>
    <HomePage/>
   </AuthProvider>
  </main>
  )
}

export default Home
