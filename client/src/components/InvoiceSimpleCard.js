import React, { useState } from "react";
import Button from '@mui/material/Button';

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
        <div className="invoice-container">
            
            <span className="invoice-span">{invoice.invoice_date}</span>
            <span className="invoice-span">property id: {invoice.property_id}</span>
            <span className="invoice-span">invoice amount: ${invoice.invoice_amount}</span>

            {isPaid ? <span className="invoice-span"> status: paid </span> :
                <span className="invoice-span">
                    {invoice.collected ? <span> status: paid </span> : 
                        <span>
                            <span className="invoice-span" id="not-paid"> status: not paid </span> 
                            <span className="invoice-span">
                                <Button variant="text"onClick={handleClick}>mark as paid</Button>
                            </span>
                        </span>}
                </span>}
            </div>        
        
    )
}

export default InvoiceSimpleCard