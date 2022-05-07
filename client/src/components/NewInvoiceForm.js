import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NewInvoiceForm() {
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState('')
    const [propertyId, setPropertyId] = useState('')
    const [showClientProperties, setShowClientProperties] = useState([])
    const { id } = useParams()
    console.log(showClientProperties)

    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setShowClientProperties(data.properties)
                // console.log(data)
            })
    }, [id])
    console.log(showClientProperties)

    function handleNewInvoice(e) {
        e.preventDefault()

        fetch("/invoices", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                invoice_date: invoiceDate, 
                invoice_amount: invoiceAmount, 
                client_id: id,
                property_id: propertyId,
                collected: false, 
                invoiced: true,   
            })
        })
        .then(res => res.json())
        .then(data =>{
            // updateNewInvoiceList(data)
            console.log(data)
            // history.push("/clients/:id")
        })
    }
    const mapShowClientProperties = showClientProperties.map(property => {
        console.log(property.id)
        return (
            <option value={property.id}>{property.address}, {property.city}, {property.state}, {property.zip_code} </option>
        )
    })

    return (
        <div className={"new-invoice-container"}>
            NEW INVOICE FORM
            <form className="new-invoice-form" onSubmit={handleNewInvoice}>
                <div> property id:
                    <select name="choose property" value={propertyId} onChange={(e) => setPropertyId(parseInt(e.target.value))}>
                        Property id:
                        <option value="nil">choose a property</option>
                        {mapShowClientProperties}
                    </select>
                </div>
                <input type="text" placeholder="invoice_date" onChange={(e) => setInvoiceDate(e.target.value)} />
                {/* <div>property quote: ${showClientProperties.amount_charged}</div> */}
                <input type="text" placeholder="invoice_amount" onChange={(e) => setInvoiceAmount(e.target.value)} />
                {/* <input type="text" placeholder="property_id" onChange={(e) => setPropertyId(e.target.value)} /> */}
                
                <input type="submit" value="submit" />
                
            </form>
        </div>
    )
}

export default NewInvoiceForm