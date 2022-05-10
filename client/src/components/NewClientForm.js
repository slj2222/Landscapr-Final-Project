import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


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
            headers: { 'Content-Type': 'application/json'},
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
        .then(newClient =>{
            if (newClient.errors) {
                setErrors(newClient.errors)
            } else {
                updateUserClientList(newClient)
                navigate("/clients")
            }
        })
    }



    return (
        <div className="new-client-form">
            <div>
                <h2>add new client</h2>
                {errors && errors.map(e => <h4 style={{color: "red"}}>{e}</h4>)}
                <form className="add-client-form" onSubmit={handleSubmit}>
                    <h3>contact information</h3>
                    <input required type="text" placeholder="first name" onChange={(e) => setFirstName(e.target.value)} />
                    <input required type="text" placeholder="last name" onChange={(e) => setLastName(e.target.value)} />
                    <input required type="text" placeholder="phone number" onChange={(e) => setPhoneNumber(e.target.value)} />
                    <input required type="text" placeholder="email address" onChange={(e) => setEmailAddress(e.target.value)} />
                    {/* for some reason the LINK is messing up the POST */}
                    {/* <Link to={"/clients"}> */}
                        <input type="submit" value="submit" />
                    {/* </Link> */}
                </form>

            </div>
        </div>
    )
}

export default NewClientForm