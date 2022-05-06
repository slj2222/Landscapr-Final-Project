import React from "react";
import ClientListCard from "./ClientListCard";

function ClientListContainer({ userClientList }) {


    const mapUserClientList = userClientList.map(client => {
        return (
            <ClientListCard key={client.id} client={client}/>
        )
    })

    return (
        <div>
            {mapUserClientList}
        </div>
    )
}

export default ClientListContainer