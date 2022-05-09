import React from "react";
import { Link, useParams } from "react-router-dom";

function DetailClientPropertyCard({ property, updateDeleteClientPropertiesList }) {
    const { id } = useParams()
    

    function handleDelete() {
        fetch(`/properties/${property.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'}
            })
            .catch(error => console.log(error))
            // console.log(client)
            // updateDeleteUserClientList(showClient)
            updateDeleteClientPropertiesList(property)
        }

    return (
        <div>
            <p>Property id: {property.id}</p>
            <h5>
            {property.street_address}
            </h5>
            <h5>
            {property.city}
            </h5>
            <h5>
            {property.state}
            </h5>
            <h5>
            {property.zip_code}
            </h5>
            <Link to={`/clients/${id}/properties/${property.id}/edit`}>
                <button>edit property </button>
            </Link>
            <button onClick={handleDelete}>remove property</button>

            
        </div>
    )
}

export default DetailClientPropertyCard