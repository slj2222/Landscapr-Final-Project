import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';


function EditClientForm({ updateUserClientList }) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const { id } = useParams()
    const [errors, setErrors] = useState('')
    const navigate = useNavigate()



    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/clients/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                email_address: emailAddress,
            })
        })
            .then(res => res.json())
            .then(editedClient => {
                if (editedClient.errors) {
                    setErrors(editedClient.errors)
                } else {
                    console.log(editedClient)
                    // updateUserClientList(newClient)
                    navigate(`/clients/${id}`)
                }

            })

    }



    return (

        <div className="client-info-container">
            <div className="client-info-card">
                <div className="inner-form">
                    <h2>edit client</h2>
                    {errors && errors.map(e => <h4 style={{ color: "red" }}>{e}</h4>)}
                    <h3 className="form-title">update client's information</h3>
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


export default EditClientForm