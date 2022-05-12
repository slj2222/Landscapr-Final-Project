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
        <div className="client-info-card">
            <div className="client-name">
                <Link to={`/clients/${client.id}`}>
                    <div className="client-name-1">
                        <h3>{client.first_name} {client.last_name}</h3>
                    </div>
                    <div className="client-id">
                        <h5>client id: {client.id}</h5>
                    </div>
                </Link>
            </div>
            <div className="client-info-card-columns">
                {mapClientProperties}
            </div>
        </div>
    )
}

export default ClientListCard