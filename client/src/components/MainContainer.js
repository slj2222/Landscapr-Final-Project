import React, { useState, useEffect } from "react";
import ClientListContainer from "./ClientListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Header from "./Header";



function MainContainer({ user, onLogin, onLogout }) {
    const [userClientList, setUserClientList] = useState([])
    console.log(userClientList)

    //GET request to get clients for the user.
    useEffect(() => {
        fetch("/clients")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserClientList(data)
            })
    }, [])



    return (

        //     <Router>
        //         <Route exact path="/clients">
        //             <ClientListContainer userClientList={userClientList}/>
        //         </Route>

        //     </Router>
        // )

        <Router>
            <Header />
            {user ? <Navbar onLogout={onLogout}/> : null}
            <Routes>
                {user ? (
                    <>
                        <Route path="/" element={<LandingPage user={user} onLogin={onLogin} />} />
                        {/* <Route path="/" element={<Navbar onLogout={onLogout}/>} /> */}
                        <Route path="/clients" element={<ClientListContainer userClientList={userClientList} />} />
                        <Route path="login" element={<Login onLogin={onLogin}/>} />

                    </>
                ) : (
                    <>
                        <Route path="/" element={<LandingPage user={user} onLogin={onLogin} />} />
                        {/* <Route path="login" element={<Login onLogin={onLogin}/>} /> */}
                        <Route path="/signup" element={<Signup onLogin={onLogin}/>} />
                    </>
                )
                }
            </Routes>
        </Router>

    )
}

    //       <div>
    //         <Header />
    //           <Navbar onLogout={onLogout} />
    //         <Router>
    //           <MainContainer user={user}/>
    //         </Router>
    //       </div>
    //     )
    //   } else {
    //     return (
    //       <Router>
    //         <Route exact path="/">
    //           <LandingPage />
    //         </Route>
    //         <Route path="/login">
    //           <Login onLogin={onLogin} />
    //         </Route>
    //         <Route path="/signup">
    //           <Signup onLogin={onLogin}/>
    //         </Route>
    //       </Router>
    //     )
    //   }
    


export default MainContainer