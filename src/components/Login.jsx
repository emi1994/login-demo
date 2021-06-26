import React from 'react'
import fire from '../fire'
import {useState, useEffect} from 'react'

const LogIn = (props) => {
    const [emailError,setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);
    

    const clearInputs = () =>{
        setEmail('');
        setPassword('');
      }
    
      const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
      }
    
      const handleLogin = () =>{
        clearErrors();
        fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(err => {
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
              setEmailError(err.message);
              break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;
            default:
              break;
          }
        })
      }
    
      const handleSignUp = () =>{
        clearErrors();
        fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
              setPasswordError(err.message);
              break;
            default:
              break;
          }
        })
      }
      

    
      const authListener = ()=>{
        fire
        .auth()
        .onAuthStateChanged(user =>{
          if(user){
            clearInputs();
            setUser(user);
          }else{
            setUser('');
          }
        })
      }
    
      useEffect(()=>{
        authListener();
      })

    const {email, setEmail, password,setPassword,setUser} = props;
    return (
        <section className="login">
           <div className="loginContainer">
               <label>Username</label>
               <input type="text" autoFocus required value={email} onChange={e => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount?(
                      <>
                      <button onClick={handleSignUp}>Sign up</button>
                      <p>Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span></p>
                      </>
                    ) : (
                      <>
                      <button onClick={handleLogin}>Sign in</button>
                      <p>Dont have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
                      </>
                    )}
                </div>
           </div>
        </section>
    )
}

export default LogIn


