import React from "react";
import ClientListCard from "./ClientListCard";
import { Link } from "react-router-dom";

function ClientListContainer({ userClientList }) {


    const mapUserClientList = userClientList.map(client => {
        return (
            <ClientListCard key={client.id} client={client}/>
        )
    })

    return (
        <div className="client-list-container">
            <Link to="/clients/new">
                <div> add new client </div>
            </Link>
            {mapUserClientList}
        </div>
    )
}

export default ClientListContainer