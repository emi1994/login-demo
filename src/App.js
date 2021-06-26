import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Login from './components/Login'
import Hero from './components/Hero'
import React from 'react'
import HeroDetails from './components/HeroDetails'

import {
  BrowserRouter as Router,
  Route,
  Switch,

} from 'react-router-dom'


export const App = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  return (
    <Router>
        <div className="App">
          <Switch>
          {user ? (
            <Hero/>
          ): (
              <Route path="/">
                <Login 
                email={email} 
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                setUser={setUser}/>
              </Route>
          )}

              <Route path="hero-details">
              <HeroDetails/>
            </Route>
            </Switch>
        </div>
    </Router>
  )
}


export default App;
