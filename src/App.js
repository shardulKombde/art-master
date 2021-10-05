import React,{useState,useEffect} from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { AuthProvider } from './context/AuthContext';
import { auth } from './firebase';
import './index.css'
import { Create } from './pages';
import { 
    Home,
    About,
    Contact,
    Artist,
    Wishlist,
    Cart,
    Feedback,
    Login,
   
    
    MeetOurTeam,
    AddYourWork,
    BuyPaintings
  } from './pages'

  function App({painting}) {

    const [user,setUser] = useState(null)
    useEffect(()=>{
      auth.onAuthStateChanged(user => {
        if(user) setUser(user)
        else setUser(null)
      })
    },[])

    return (
    
    <Router>
      
      <Switch>
      <AuthProvider>
        <Route exact path="/login">
          <Login/>
        </Route>
        
        <Route exact path="/create">
          
            <Create/>
          
        </Route>
      
        
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/artist">
          <Artist/>
        </Route>
        <Route exact path="/meetOurTeam">
          <MeetOurTeam/>
        </Route>
        <Route exact path="/feedback">
          <Feedback/>
        </Route>
         
        <Route exact path="/AddYourWork">
          <AddYourWork user={user}/>
        </Route>
        {/* <Route exact path="/UserWork">
          <UserWork/>
        </Route> */}
        <Route exact path="/BuyPaintings">
          <BuyPaintings/>
        </Route>
        </AuthProvider>
      </Switch>
      
    </Router>
    
    )
  }
export default App
