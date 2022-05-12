import React from "react";

function CLientListPropertyCard({ property }) {
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
            <h5 className="property">
                property id: {property.id}
            </h5>
        </div>
    )
}

export default CLientListPropertyCard