import React from "react";
import DetailClientPropertyCard from "./DetailClientPropertyCard";
import InvoiceSimpleCard from "./InvoiceSimpleCard";
import { Link, useParams } from "react-router-dom";


function ClientInfoCard({ showClient, showClientProperties, showClientInvoices, updateDeleteUserClientList, updateDeleteClientPropertiesList }) {
    console.log(showClient.properties)
    const {id} = useParams()    

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
            <DetailClientPropertyCard key={property.id} property={property} updateDeleteClientPropertiesList={updateDeleteClientPropertiesList}/>
        )
    })

    const mapShowClientInvoices = showClientInvoices.map(invoice => {
        return(
            <InvoiceSimpleCard invoice={invoice} />
        )
    })

       return (
        <div className="client-info-card">
            <div className="client-info-card-info">
                <div>
                {showClient.first_name} {showClient.last_name}
                </div>
                <div>
                    client id: {showClient.id}
                </div>
                <div>
                {showClient.phone_number} {showClient.email_address}
                </div>
            </div>
         
                
         
            
            {/* <Link to={`/clients/${id}`}>
                <button className="button" >edit = not working</button>
            </Link> */}
            <Link to={`/clients/${id}/properties/new`}>
             <button> add a property </button>
             </Link>
            <div className="client-info-card-properties">
               
                <p>needs work ~ client property ~ needs work</p>
                {mapShowClientProperties}
            </div>
            <div className="client-infor-card-invoices">
                <Link to={`/clients/${id}/invoices/new`}>
                    <button> add an invoice</button>
                </Link>
                <div>
                    {mapShowClientInvoices}
                </div>
            </div>
            
            
            <Link to={`/clients/${id}/edit`}>
                <button className="button" >edit client information</button>
            </Link>
            
            <Link to="/clients">
                <button className="button" onClick={handleDelete}>remove client</button>
            </Link>
           
        </div>
    )
}

export default ClientInfoCard