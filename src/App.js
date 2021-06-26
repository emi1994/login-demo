import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'
import Login from './components/Login'
import HeroList from './components/HeroList'
import React from 'react'
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
      <Switch>
        <Route path='/'>
      <div className="App">
            {user ? (
                <HeroList/>
            ): (
                  <Login 
                  email={email} 
                  setEmail={setEmail} 
                  password={password} 
                  setPassword={setPassword} 
                  setUser={setUser}/>
            )}
          </div>
          </Route>
        </Switch>
    </Router>
  )
}


export default App;
