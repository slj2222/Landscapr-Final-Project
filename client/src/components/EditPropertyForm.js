import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditPropertyForm() {
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [quotedAmount, setQuotedAmount] = useState('')
    const { id } = useParams()
    


    function handleSubmit(e) {
        e.preventDefault()
        
        fetch(`/properties/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                street_address: streetAddress, 
                city: city, 
                state: state, 
                zip_code: zipCode,
                quoted_amount: quotedAmount,
            })
        })
        .then(res => res.json())
        .then(data => 
            console.log(data))
            
    }


    return (
        <div>
            <div>
                <h2>add client's property</h2>

                <form className="add-property-form" onSubmit={handleSubmit}>

                    <input type="text" value={streetAddress} placeholder="street address" onChange={(e) => setStreetAddress(e.target.value)} />
                    <input type="text" value={city} placeholder="city" onChange={(e) => setCity(e.target.value)} />
                    <input type="text" value={state} placeholder="state" onChange={(e) => setState(e.target.value)} />
                    <input type="text" value={zipCode} placeholder="zip code" onChange={(e) => setZipCode(e.target.value)} />
                    <input type="text" value ={quotedAmount} placeholder="quoted amount" onChange={(e) => setQuotedAmount(e.target.value)} />

                    {/* for some reason the LINK is messing up the POST */}
                    {/* <Link to={"/client-list"}> */}
                    <input type="submit" value="submit" />
                    {/* </Link> */}
                </form>

            </div>
        </div>
    )
}

export default EditPropertyForm