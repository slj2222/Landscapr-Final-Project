import React, { useState, useEffect } from "react";
import ClientListCard from "./ClientListCard";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';



function ClientListContainer() {
    const [userClientList, setUserClientList] = useState([])


    useEffect(() => {
        fetch("/clients")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setUserClientList(data)

            })
    }, [])

    // console.log(userClientList)
    const mapUserClientList = userClientList.map(client => {
        return (
            <ClientListCard key={client.id} client={client} />
        )
    })

    return (
        <div className="client-info-container">
            <div className="add-button">
                <Link to="/clients/new">
                    <Button variant="text" size="large" color="secondary"> add new client </Button>
                </Link>
            </div>
            <div>
                {mapUserClientList}
            </div>
        </div>
    )
}

export default ClientListContainer