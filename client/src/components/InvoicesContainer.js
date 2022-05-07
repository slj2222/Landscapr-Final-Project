import React from "react";
import InvoiceSimpleCard from "./InvoiceSimpleCard";

function InvoicesContainer({ client }) {


    const mapClientInvoices = client.invoices.map(invoice => {
        return (
            <InvoiceSimpleCard key={invoice.id} invoice={invoice}/>
        )
    })


    return (
        <div className="invoices-container">
            {mapClientInvoices}
        </div>
    )
}

export default InvoicesContainer