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
        <div className="detail-client-property">
            <div>
                {property.street_address}
            </div>
            <div>
                {property.city}
            </div>
            <div>
                {property.state}
            </div>
            <div>
                {property.zip_code}
            </div>
            
            <h4>
                quoted amount: ${property.quoted_amount}
                </h4>
            <h5>Property id: {property.id}</h5>
            <div className="add-button">
                <Link to={`/clients/${id}/properties/${property.id}/edit`}>
                    <button>edit property </button>
                </Link>
            </div>
            <div className="add-button">
                <button onClick={handleDelete}>remove property</button>
            </div>

            
        </div>
    )
}

export default DetailClientPropertyCard