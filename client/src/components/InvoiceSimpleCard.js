import React, { useState } from "react";

function InvoiceSimpleCard({ invoice }) {
    const [isPaid, setIsPaid] = useState(false)



    function handleClick() {

        fetch(`/invoices/${invoice.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({collected: true})
        })
        .then(res => res.json())
        .then(data => console.log(data))

        setIsPaid(true)
    }


    return (
        <div className="container invoiceList">
            <span>{invoice.invoice_date}</span>
            <span>property id: {invoice.property_id}</span>
            <span>invoice amount: ${invoice.invoice_amount}</span>
            
            {isPaid ? <div> paid </div> :
                <div>
                    {invoice.collected ? <div> PAID </div> : 
                        <div>
                            <div> NOT PAID </div> 
                            <button onClick={handleClick}>mark as paid</button>
                        </div>}
                </div>}
                    
        </div>
    )
}

export default InvoiceSimpleCard