import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
            headers: { 'Content-Type': 'application/json'},
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
        <div className="new-client-form">
            <div>
                <h2> edit client</h2>
                {errors && errors.map(e => <h4 style={{color: "red"}}>{e}</h4>)}
                <form className="add-client-form" onSubmit={handleSubmit}>
                    <h3>contact information</h3>
                    <input required type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
                    <input required type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                    <input required type="text" placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input required type="text" placeholder="email address" onChange={(e) => setEmailAddress(e.target.value)} />


                    <input type="submit" value="submit" />

                </form>

            </div>
        </div>
    )
}




export default EditClientForm