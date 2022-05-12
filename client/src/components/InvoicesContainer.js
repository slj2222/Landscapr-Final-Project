import React, { useState, useEffect } from "react";
import InvoiceSimpleCard from "./InvoiceSimpleCard";

function InvoicesContainer() {
    // const [clientListInvoices, setClientListInvoices] = useState([])
    const [userClientList, setUserClientList] = useState([])
    const [invoices, setInvoices] = useState([])
 

    // useEffect(() => {
    //     fetch("/clients")
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setUserClientList(data)
                
    //         })
    // }, [])

    useEffect(() => {
        fetch("/invoices-ordered")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInvoices(data)
                
            })
    }, [])

    
    // const mapUserClientList = userClientList.map(client => client.invoices.map(invoice => <InvoiceSimpleCard key={invoice.id} invoice={invoice} />))

    const mapInvoices = invoices.map(invoice => <InvoiceSimpleCard key={invoice.id} invoice={invoice} />)

    return (
        <div className="client-info-container">
        <div className="client-info-card">
        <h3 className="info-name"> list of invoices </h3>
            
            <div className="invoice-list-container">
                {/* {mapUserClientList} */}
                {mapInvoices}
            </div>
        </div>
        </div>
    )
}

export default InvoicesContainer