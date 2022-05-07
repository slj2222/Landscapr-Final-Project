import React from "react";
import InvoiceSimpleCard from "./InvoiceSimpleCard";

function InvoicesContainer({ userClientList }) {

 const mapUserClientList = userClientList.map(client => client.invoices.map(invoice => <InvoiceSimpleCard key={invoice.id} invoice={invoice} />))

    // const mapClientInvoices = client.invoices.map(invoice => {
    //     return (
    //         // <InvoiceSimpleCard key={invoice.id} invoice={invoice}/>
    //         {mapUserClientList}
    //     )
    // })


    return (
        <div className="invoices-container">
            {mapUserClientList}
        </div>
    )
}

export default InvoicesContainer