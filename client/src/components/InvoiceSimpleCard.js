import React, { useState } from "react";
import Button from '@mui/material/Button';

function InvoiceSimpleCard({ invoice }) {
    const [isPaid, setIsPaid] = useState(false)

    console.log(invoice)

    function handleClick() {

        fetch(`/invoices/${invoice.id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ collected: true })
        })
            .then(res => res.json())
            .then(data => console.log(data))

        setIsPaid(true)
    }


    return (
        <div className="invoice-container">

            <span className="invoice-span">
                <h5>{invoice.invoice_date}</h5>
            </span>
            <span className="invoice-span">
                <h5>client id: {invoice.client_id}</h5>
            </span>
            <span className="invoice-span">
                <h5>property id: {invoice.property_id}</h5>
            </span>
            <span className="invoice-span">
                <h5>invoice amount: ${invoice.invoice_amount}</h5>
            </span>

            {isPaid ? <span className="invoice-span">
                <h5>status: paid</h5>
            </span> :
                <span className="invoice-span">
                    {invoice.collected ? <span>
                        <h5>status: paid</h5>
                    </span> :
                        <span>
                            <span className="invoice-span" id="not-paid"> 
                                <h5>status: not paid</h5> 
                            </span>
                            <span className="invoice-span">
                                <Button variant="text" onClick={handleClick}>mark as paid</Button>
                            </span>
                        </span>}
                </span>}
        </div>

    )
}

export default InvoiceSimpleCard