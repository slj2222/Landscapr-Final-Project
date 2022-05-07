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
import NewInvoiceForm from "./NewInvoiceForm";



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
    
    
    // const mapUserClientList = userClientList.map(client => {
    //     return (
    //         <InvoicesContainer key={client.id} client={client} />
    //     )
    // })

    function updateDeleteUserClientList(deletedClient) {
        setUserClientList(userClientList.filter(client => client !== deletedClient))
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
                        
                        <Route path="/invoices" element={<InvoicesContainer userClientList={userClientList}/>} />
                        {/* <Route path="/invoices" element={mapUserClientList} /> */}
                        <Route path="/clients/:id" element={<DetailClientContainer updateDeleteUserClientList={updateDeleteUserClientList}/>} />
                        <Route path="/clients/new" element={<NewClientForm updateUserClientList={updateUserClientList} user={user} />} />
                        <Route path="/clients/:id/invoices/new" element={<NewInvoiceForm />} />

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