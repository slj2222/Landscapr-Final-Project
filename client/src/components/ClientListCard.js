import React from "react";
import ClientListPropertyCard from "./ClientListPropertyCard"
import { Link } from "react-router-dom";



function ClientListCard({ client }) {

    const mapClientProperties = client.properties.map(property => {
        return (
            <ClientListPropertyCard key={property.street_name} property={property} />
        )
    })




    return (
        <div className="client-list-card">
            <div className="client-name">
                <Link to={`/clients/${client.id}`}>

                    <h5>{client.first_name} {client.last_name}</h5>
                    <h3>client id: {client.id}</h3>
                </Link>

            </div>
            {mapClientProperties}
        </div>
    )
}

export default ClientListCard