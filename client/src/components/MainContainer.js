import React, { useState, useEffect } from "react";
import ClientListContainer from "./ClientListContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import LandingPage from "./LandingPage";
import Navbar from "./Navbar";
import Header from "./Header";
// import DetailClientContainer from "./DetailClientContainer";
import InvoicesContainer from "./InvoicesContainer";
import DetailClientContainer from "./DetailClientContainer";
import NewClientForm from "./NewClientForm";



function MainContainer({ user, onLogin, onLogout }) {
    const [userClientList, setUserClientList] = useState([])
    console.log(userClientList)
    // const [userInvoiceList, setUserInvoiceList] = useState([])
    // console.log(userInvoiceList)
    

    //GET request to get clients for the user.
    useEffect(() => {
        fetch("/clients")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserClientList(data)
            })
    }, [])


    
    
    function updateUserClientList(newClient) {
        const plusNewClient = [...userClientList, newClient]
        setUserClientList(plusNewClient)
    }
    
    
    
    
    return (

        <Router>
            <Header />
            {user ? <Navbar onLogout={onLogout}/> : null}
            <Routes>
                {user ? (
                    <>
                        <Route path="/" element={<LandingPage user={user} onLogin={onLogin} />} />
                        {/* <Route path="/" element={<Navbar onLogout={onLogout}/>} /> */}
                        <Route path="/clients" element={<ClientListContainer userClientList={userClientList} />} />
                        <Route path="/login" element={<Login onLogin={onLogin}/>} />
                        
                        <Route path="/invoices" element={<InvoicesContainer />} />
                        <Route path="/clients/:id" element={<DetailClientContainer />} />
                        <Route path="/clients/new" element={<NewClientForm updateUserClientList={updateUserClientList} user={user} />} />

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

    
    


export default MainContainer