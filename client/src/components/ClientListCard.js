import React from "react";



function ClientListCard({ client }) {

    const mapClientProperties = client.properties.map(property => <div> {property.street_address}</div>)
        
    


    return (
        <div>
            <div className="client-name">
                {/* <Link to={`/clients/${client.id}`}> */}
                    
                    <h5>{client.first_name} {client.last_name}</h5>
                    <h3>client id: {client.id}</h3>
                {/* </Link> */}
                
            </div>
            {mapClientProperties}
        </div>
    )
}

export default ClientListCard