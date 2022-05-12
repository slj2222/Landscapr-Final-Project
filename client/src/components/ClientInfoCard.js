import React from "react";
import DetailClientPropertyCard from "./DetailClientPropertyCard";
import InvoiceSimpleCard from "./InvoiceSimpleCard";
import { Link, useParams } from "react-router-dom";
import Button from '@mui/material/Button';

function ClientInfoCard({ showClient, showClientProperties, showClientInvoices, updateDeleteUserClientList, updateDeleteClientPropertiesList }) {

    // console.log(showClientInvoices)
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

    const mapShowClientInvoices = showClientInvoices.sort((a, b) => b.id - a.id).map(invoice => {
        return (
            <InvoiceSimpleCard invoice={invoice} />
        )
    })

    return (
        <div className="client-info-container">
            <div className="client-info-card">

                <h2 className="info-name">
                    {showClient.first_name} {showClient.last_name}
                </h2>
                <div className="main-name">
                    <div>
                        <h5>
                            client id: {showClient.id}
                        </h5>
                    </div>
                    <div>
                        <h5>
                            phone number: {showClient.phone_number}
                        </h5>
                    </div>
                    <div>
                        <h5>
                            email address: {showClient.email_address}
                        </h5>
                    </div>
                </div>
            </div>

            <div className="add-button">
                <Link to={`/clients/${id}/properties/new`}>
                    <Button variant="text"> add a property </Button>
                </Link>
            </div>
            <div className="client-info-card">
                <h3 className="info-name"> list of properties </h3>
                <div className="client-info-card-columns">
                    {mapShowClientProperties}
                </div>
            </div>
            <div>
                {showClientProperties.length === 0 ? <></>
                    :
                    <div className="add-button">
                        <Link to={`/clients/${id}/invoices/new`}>
                            <Button variant="text"> add an invoice</Button>
                        </Link>
                    </div>
                }
                <div className="client-info-card">
                    <h3 className="info-name"> list of invoices </h3>
                    <div className="info-name-invoice">
                        {mapShowClientInvoices}
                    </div>
                </div>
            </div>

            <div className="add-button">
                <Link to={`/clients/${id}/edit`}>
                    <Button variant="text">edit client information</Button>
                </Link>
                <Link to="/clients">
                    <Button variant="text" onClick={handleDelete}> remove client </Button>
                </Link>
            </div>

        </div>
    )
}

export default ClientInfoCard