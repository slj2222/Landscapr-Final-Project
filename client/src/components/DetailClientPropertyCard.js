import React from "react";

function DetailClientPropertyCard({ property}) {
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

            
        </div>
    )
}

export default DetailClientPropertyCard