import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

function NewPropertyForm({ user }) {
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [quotedAmount, setQuotedAmount] = useState('')
    const { id } = useParams()
    const navigate = useNavigate()
    const [errors, setErrors] = useState('')


    function handleSubmit(e) {
        e.preventDefault()

        fetch("/properties", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                client_id: id,
                street_address: streetAddress,
                city: city,
                state: state,
                zip_code: zipCode,
                quoted_amount: quotedAmount,
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.errors) {
                    setErrors(data.errors)
                } else {
                    // console.log(data)
                    navigate(`/clients/${id}`)
                }
            })
    }


    return (


        <div className="client-info-container">
            <div className="client-info-card">
                <div className="inner-form">
                    <h2>add client's property</h2>
                    {errors && errors.map(e => <h4 style={{ color: "red" }}>{e}</h4>)}
                    <h3 className="form-title">property information</h3>
                    <form className="add-client-form" onSubmit={handleSubmit}>

                        <div className="form-div">
                            <h5 className="form-input">street address:</h5>
                            <input type="text" required value={streetAddress} placeholder="street address" onChange={(e) => setStreetAddress(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">city:</h5>
                            <input type="text" required value={city} placeholder="city" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">state:</h5>
                            <input type="text" required value={state} placeholder="state" onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">zip code:</h5>
                            <input type="text" required value={zipCode} placeholder="zip code" onChange={(e) => setZipCode(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">quoted amount:</h5>
                            <input type="text" required value={quotedAmount} placeholder="quoted amount" onChange={(e) => setQuotedAmount(e.target.value)} />
                        </div>

                        <Button variant="text" type="submit" value="submit">submit</Button>

                    </form>

                </div>
            </div>
        </div>
    )
}






export default NewPropertyForm