import React, { useState } from "react";
import { useParams } from "react-router-dom";

function EditClientForm({ updateUserClientList}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const { id } = useParams()

    

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
        .then(editedClient =>{
            console.log(editedClient)
            // updateUserClientList(newClient)
        })

    }



    return (
        <div className="new-client-form">
            <div>
                <h2> edit client</h2>

                <form className="add-client-form" onSubmit={handleSubmit}>
                    <h3>contact information</h3>
                    <input type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
                    <input type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                    <input type="text" placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input type="text" placeholder="email address" onChange={(e) => setEmailAddress(e.target.value)} />


                    <input type="submit" value="submit" />

                </form>

            </div>
        </div>
    )
}




export default EditClientForm