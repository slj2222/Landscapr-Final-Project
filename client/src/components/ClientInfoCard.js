import React from "react";
import ClientListPropertyCard from "./ClientListPropertyCard";

function ClientInfoCard({ showClient }) {
    console.log(showClient.properties)
    

    // const mapShowClientProperty = showClient.properties.map(property => {
    //     return (
    //         <ClientListPropertyCard  property={property}/>
    //     )
    // })

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
            <div>
                needs work ~ client property ~ needs work
                {/* {mapShowClientProperty} */}
            </div>

        </div>
    )
}

export default ClientInfoCard