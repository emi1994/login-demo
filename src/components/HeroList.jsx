import React from 'react'
import './styles/Hero.css'
import {Button, Container, Navbar} from 'react-bootstrap'
import './HeroCard'
import HeroDetails from './HeroDetails'
import HeroCard from './HeroCard'
import fire from '../fire'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
  } from 'react-router-dom'


const Hero = () => {

   const handleLogOut = () =>{
    fire
    .auth()
    .signOut()
  }
  


    
    return (
      <section className="hero">
      <Router>
        <nav>
          <Navbar className="justify-content-center">
          <h3 className="m-1 p-2">Welcome to SuperHeroes App!!</h3>
            <Link to="/search"><Button variant="primary" className="m-1 p-2">Home</Button></Link>
            <Button variant='primary' onClick={()=>handleLogOut()} className="m-1 p-2">Logout</Button>
            </Navbar>
        </nav>
        <Switch>
          <Route path="/search">
             <HeroCard />
          </Route>
          <Route path="/hero-details">
            <HeroDetails/>
          </Route>
        </Switch>
      </Router>
    </section>
    )

}

export default Hero
