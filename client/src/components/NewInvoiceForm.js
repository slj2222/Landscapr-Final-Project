import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function NewInvoiceForm() {
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState('')
    const [propertyId, setPropertyId] = useState('')
    const [showClientProperties, setShowClientProperties] = useState([])
    const { id } = useParams()
    const [errors, setErrors] = useState('')
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
            headers: { 'Content-Type': 'application/json' },
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
            .then(data => {
                if (data.errors) {
                    setErrors(data.errors)
                }   else {
                // updateNewInvoiceList(data)
                console.log(data)
                }
                // history.push("/clients/:id")
            })
    }
    const mapShowClientProperties = showClientProperties.map(property => {
        console.log(property.id)
        return (
            <option required value={property.id}>{property.street_address}, {property.city}, {property.state}, {property.zip_code}, quoted amount: ${property.quoted_amount}</option>
        )
    })

    return (
        <div className={"new-invoice-container"}>
            NEW INVOICE FORM
            {errors && errors.map(e => <h4 style={{color: "red"}}>{e}</h4>)}
            <form className="new-invoice-form" onSubmit={handleNewInvoice}>
                <div>
                    <div>
                        property id: <select name="choose property" value={propertyId} onChange={(e) => setPropertyId(parseInt(e.target.value))}>
                            Property id:
                            <option revalue="nil">choose a property</option>
                            {mapShowClientProperties}
                        </select>
                    </div>
                </div>
                <div>
                    invoice date: <input required type="text" placeholder="MM/DD/YYYY" onChange={(e) => setInvoiceDate(e.target.value)} />
                </div>
                <div>
                    invoice amount: $ <input required type="text" placeholder="00.00" onChange={(e) => setInvoiceAmount(e.target.value)} />
                </div>

                <input type="submit" value="submit" />

            </form>
        </div>
    )
}

export default NewInvoiceForm