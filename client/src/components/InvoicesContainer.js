import React, { useState, useEffect } from "react";
import InvoiceSimpleCard from "./InvoiceSimpleCard";

function InvoicesContainer() {
    // const [clientListInvoices, setClientListInvoices] = useState([])
    const [userClientList, setUserClientList] = useState([])
    
 

    useEffect(() => {
        fetch("/clients")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUserClientList(data)
                
            })
    }, [])

    


    const mapUserClientList = userClientList.map(client => client.invoices.map(invoice => <InvoiceSimpleCard key={invoice.id} invoice={invoice} />))

    // const mapClientInvoices = client.invoices.map(invoice => {
    //     return (
    //         // <InvoiceSimpleCard key={invoice.id} invoice={invoice}/>
    //         {mapUserClientList}
    //     )
    // })


    return (
        <div className="invoices-container">
            
            <div>
                {mapUserClientList}
            </div>
        </div>
    )
}

export default InvoicesContainer