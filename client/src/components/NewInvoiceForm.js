import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


function NewInvoiceForm() {
    const [invoiceDate, setInvoiceDate] = useState('')
    const [invoiceAmount, setInvoiceAmount] = useState('')
    const [propertyId, setPropertyId] = useState('')
    const [showClientProperties, setShowClientProperties] = useState([])
    const { id } = useParams()
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()
    const [showClient, setShowClient] = useState([])
    // console.log(showClientProperties)

    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setShowClient(data)
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
                // console.log(data)
                navigate(`/clients/${id}`)
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
        
<div className="client-info-container">
<div className="client-info-card">
    <div className="inner-form">
        <h2>add new invoice</h2>
        {errors && errors.map(e => <h4 style={{ color: "red" }}>{e}</h4>)}
        <h3 className="form-title">new invoice information</h3>
        <form className="add-invoice-form" onSubmit={handleNewInvoice}>

            <div className="form-div">
                <h5 className="form-input">{showClient.first_name} {showClient.last_name}'s properties:</h5>
                    <select name="choose property" value={propertyId} onChange={(e) => setPropertyId(parseInt(e.target.value))}>
                        Property id:
                        <option revalue="nil">choose a property</option>
                        {mapShowClientProperties}
                    </select>
            </div>
            <div className="form-div">
                <h5 className="form-input">invoice date:</h5>
                <input required type="text" placeholder="MM/DD/YYYY" onChange={(e) => setInvoiceDate(e.target.value)} />
            </div>
            <div className="form-div">
                <h5 className="form-input">invoice amount: $</h5>
                <input required type="text" placeholder="$ 0.00" onChange={(e) => setInvoiceAmount(e.target.value)} />
            </div>
            

            <Button variant="text" type="submit" value="submit">submit</Button>

        </form>

    </div>
</div>
</div>
)
}
export default NewInvoiceForm