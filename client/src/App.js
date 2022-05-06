
import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/Login';
import Signup from './components/Signup';

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


  if (user) {
    return (

      <div>
        header
        <Navbar onLogout={onLogout} />
        main container
      </div>
    )
  } else {
    return (
      <Router>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route path="/login">
          <Login onLogin={onLogin} />
        </Route>
        <Route path="/signup">
          <Signup onLogin={onLogin}/>
        </Route>
      </Router>
    )
  }

}

export default App;
