import React from "react";

function InvoiceSimpleCard({ invoice }) {
    return (
        <div className="invoice-simple-card">
            <div>{invoice.invoice_date}</div>
            <div>property id: {invoice.property_id} </div>
            <div>invoice amount: ${invoice.invoice_amount}</div>
            <div>
                {invoice.collected ? <div> PAID </div> : 
                    <div>
                        <div> NOT PAID </div> 
                        <button>mark as paid</button>
                    </div>}
            </div>
                
        </div>
    )
}

export default InvoiceSimpleCard