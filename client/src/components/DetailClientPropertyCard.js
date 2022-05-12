import React from "react";
import { Link, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

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
            <div className="property">
                {property.street_address}
            </div>
            <div className="property">
                {property.city}, {property.state}
            </div>
            <div className="property">
                {property.zip_code}
            </div>
            
            <h4>
                quoted amount: ${property.quoted_amount}
                </h4>
            <h5>property id: {property.id}</h5>
            <div className="add-button">
                <Link to={`/clients/${id}/properties/${property.id}/edit`}>
                    <Button variant="text"> edit property </Button>
                </Link>
            </div>
            <div className="add-button">
                <Button variant="text" onClick={handleDelete}>remove property</Button>
            </div>

            
        </div>
    )
}

export default DetailClientPropertyCard