import React from "react";

function CLientListPropertyCard({ property }) {
    return (
        <div className="client-list-property-card">
            <div>
                property id: {property.id}
            </div>
            <div>
                {property.street_address}
            </div>
            <div>
                {property.city}
            </div>
        </div>
    )
}

export default CLientListPropertyCard