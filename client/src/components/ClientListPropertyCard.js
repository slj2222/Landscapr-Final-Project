import React from "react";

function CLientListPropertyCard({ property }) {
    return (
        <div className="client-list-property-card">
            property id: {property.id}
            
            {property.street_address}
            {property.city}
        </div>
    )
}

export default CLientListPropertyCard