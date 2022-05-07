import React from "react";
import DetailClientPropertyCard from "./DetailClientPropertyCard";
import InvoiceSimpleCard from "./InvoiceSimpleCard";
import { Link } from "react-router-dom";


function ClientInfoCard({ showClient, showClientProperties, showClientInvoices, updateDeleteUserClientList }) {
    console.log(showClient.properties)
    

    function handleDelete() {
        fetch(`/clients/${showClient.id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json'}
            })
            // .catch(error => console.log(error))
            // console.log(client)
            updateDeleteUserClientList(showClient)
        }



    const mapShowClientProperties = showClientProperties.map(property => {
        return (
            <DetailClientPropertyCard key={property.id} property={property}/>
        )
    })

    const mapShowClientInvoices = showClientInvoices.map(invoice => {
        return(
            <InvoiceSimpleCard invoice={invoice} />
        )
    })

       return (
        <div className="client-info-card">
            <div>
                {showClient.first_name} {showClient.last_name}
            </div>
            <div>
                client id: {showClient.id}
            </div>
            <div>
                {showClient.phone_number} {showClient.email_address}
            </div>
            {/* <Link to={`/clients/${id}`}>
                <button className="button" >edit = not working</button>
            </Link> */}
            <div className="client-info-card-properties">
                needs work ~ client property ~ needs work
                {mapShowClientProperties}
            </div>
            <div className="client-infor-card-invoices">{mapShowClientInvoices}</div>
            <Link to="/clients">
                <button className="button" onClick={handleDelete}>remove client</button>
            </Link>
        </div>
    )
}

export default ClientInfoCard