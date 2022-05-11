import React from "react";
import DetailClientPropertyCard from "./DetailClientPropertyCard";
import InvoiceSimpleCard from "./InvoiceSimpleCard";
import { Link, useParams } from "react-router-dom";


function ClientInfoCard({ showClient, showClientProperties, showClientInvoices, updateDeleteUserClientList, updateDeleteClientPropertiesList }) {
    console.log(showClient.properties)
    const { id } = useParams()

    function handleDelete() {
        fetch(`/clients/${showClient.id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        // .catch(error => console.log(error))
        // console.log(client)
        updateDeleteUserClientList(showClient)
    }



    const mapShowClientProperties = showClientProperties.map(property => {
        return (
            <DetailClientPropertyCard key={property.id} property={property} updateDeleteClientPropertiesList={updateDeleteClientPropertiesList} />
        )
    })

    const mapShowClientInvoices = showClientInvoices.map(invoice => {
        return (
            <InvoiceSimpleCard invoice={invoice} />
        )
    })

    return (
        <div className="client-info-container">
            <div className="client-info-card">
                <h2>
                    {showClient.first_name} {showClient.last_name}
                </h2>
                <div>
                    client id: {showClient.id}
                </div>
                <div>
                    phone number: {showClient.phone_number} 
                </div>
                <div>
                    email address: {showClient.email_address}
                </div>
            </div>

            <div className="add-button">
                <Link to={`/clients/${id}/properties/new`}>
                    <button> add a property </button>
                </Link>
            </div>
            <div className="client-info-card">
                <h3> list of properties </h3>
                <div className="client-info-card-columns">
                    {mapShowClientProperties}
                    </div>
            </div>
            <div>
                {showClientProperties.length === 0 ? <></>
                    :
                    <div className="add-button">
                        <Link to={`/clients/${id}/invoices/new`}>
                            <button> add an invoice</button>
                        </Link>
                    </div>
                }
                <div className="client-info-card">
                    <h3> list of invoices </h3>
                    {mapShowClientInvoices}
                </div>
            </div>

            <div className="add-button">
                <Link to={`/clients/${id}/edit`}>
                    <button className="button" >edit client information</button>
                </Link>
                <Link to="/clients">
                    <button className="button" onClick={handleDelete}>remove client</button>
                </Link>
            </div>

        </div>
    )
}

export default ClientInfoCard