import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';



function NewClientForm({ updateUserClientList, user }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/clients", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email_address: emailAddress,
                total_invoiced: 0,
                total_collected: 0,
                user_id: user.id,
            })
        })
            .then(res => res.json())
            .then(newClient => {
                if (newClient.errors) {
                    setErrors(newClient.errors)
                } else {
                    updateUserClientList(newClient)
                    navigate("/clients")
                }
            })
    }



    return (
        <div className="client-info-container">
            <div className="client-info-card">
                <div className="inner-form">
                    <h2>add new client</h2>
                    {errors && errors.map(e => <h4 style={{ color: "red" }}>{e}</h4>)}
                    <h3 className="form-title">client information</h3>
                    <form className="add-client-form" onSubmit={handleSubmit}>

                        <div className="form-div">
                            <h5 className="form-input">first name:</h5>
                            <input required type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">last name:</h5>
                            <input required type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">phone number:</h5>
                            <input required type="text" placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                        </div>
                        <div className="form-div">
                            <h5 className="form-input">email address:</h5>
                            <input required type="text" placeholder="email address" onChange={(e) => setEmailAddress(e.target.value)} />
                        </div>

                        <Button variant="text" type="submit" value="submit">submit</Button>

                    </form>

                </div>
            </div>
        </div>
    )
}

export default NewClientForm