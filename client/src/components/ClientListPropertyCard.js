import React from "react";

function CLientListPropertyCard({ property }) {
    return (
        <div className="client-list-property-card">
            {property.street_address}
        </div>
    )
}

export default CLientListPropertyCard