import React from "react";
import DetailClientPropertyCard from "./DetailClientPropertyCard";


function ClientInfoCard({ showClient, showClientProperties }) {
    console.log(showClient.properties)
    

    const mapShowClientProperties = showClientProperties.map(property => {
        return (
            <DetailClientPropertyCard key={property.id} property={property}/>
        )
    })

       return (
        <div className="client-info-card">
            <div>
                {showClient.first_name} {showClient.last_name}
            </div>
            <div>
                client id: {showClient.id}
            </div>
            <div>
                {showClient.phone_number} {showClient.email_address}
            </div>
            {/* <Link to={`/clients/${id}`}>
                <button className="button" >edit = not working</button>
            </Link> */}
            <div className="client-info-card-properties">
                needs work ~ client property ~ needs work
                {mapShowClientProperties}
            </div>

        </div>
    )
}

export default ClientInfoCard