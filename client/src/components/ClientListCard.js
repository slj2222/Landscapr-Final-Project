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
                    <div className="client-name-1">
                        <h4>{client.first_name} {client.last_name}</h4>
                    </div>
                    <div className="client-id">
                        <h5>client id: {client.id}</h5>
                    </div>
                </Link>
            </div>
            <div>
                {mapClientProperties}
            </div>
        </div>
    )
}

export default ClientListCard