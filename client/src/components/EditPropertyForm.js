import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from '@mui/material/Button';


function EditPropertyForm() {
    const [streetAddress, setStreetAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [quotedAmount, setQuotedAmount] = useState('')
    const { id } = useParams()
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()



    function handleSubmit(e) {
        e.preventDefault()

        fetch(`/properties/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
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
            }
            )

    }


    return (
        
<div className="client-info-container">
            <div className="client-info-card">
                <div className="inner-form">
                    <h2>edit client's property</h2>
                    {errors && errors.map(e => <h4 style={{ color: "red" }}>{e}</h4>)}
                    <h3 className="form-title">update property's information</h3>
                    <form className="add-client-form" onSubmit={handleSubmit}>

                        <div className="form-div">
                            <h5 className="form-input">updated street address:</h5>
                            <input type="text" required value={streetAddress} placeholder="street address" onChange={(e) => setStreetAddress(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">updated city:</h5>
                            <input type="text" required value={city} placeholder="city" onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">updated state:</h5>
                            <input type="text" required value={state} placeholder="state" onChange={(e) => setState(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">updated zip code:</h5>
                            <input type="text" required value={zipCode} placeholder="zip code" onChange={(e) => setZipCode(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">updated quoted amount:</h5>
                            <input type="text" required value={quotedAmount} placeholder="$ 0.00" onChange={(e) => setQuotedAmount(e.target.value)} />
                        </div>

                        <Button variant="text" type="submit" value="submit">submit</Button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default EditPropertyForm