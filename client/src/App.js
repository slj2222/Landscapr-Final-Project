
import './App.css';
import { useEffect, useState } from 'react';



import MainContainer from './components/MainContainer';

function App() {
  const [user, setUser] = useState(null)
  console.log(user)


  //auth function
  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, [])

  //sets the current user state when login form is submitted
  function onLogin(loggedInUser) {
    setUser(loggedInUser)
  }

  //resets user state to null when logged out
  function onLogout() {
    setUser(null)
  }

  return (

    <MainContainer user={user} onLogin={onLogin} onLogout={onLogout} />

  )
}

export default App;
