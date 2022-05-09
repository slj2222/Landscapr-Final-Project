import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientInfoCard from "./ClientInfoCard";



function DetailClientContainer({ updateDeleteUserClientList }) {
    const [showClient, setShowClient] = useState([])
    const [showClientProperties, setShowClientProperties] = useState([])
    const [showClientInvoices, setShowClientInvoices] = useState([])
    const { id } = useParams()
    


    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                setShowClient(data)
                setShowClientInvoices(data.invoices)
                setShowClientProperties(data.properties)
            })
    }, [id])


    function updateDeleteClientPropertiesList(removedProperty) {
        setShowClientProperties(showClientProperties.filter(property => property !== removedProperty))
    }
    
    

    return (
        <div>
            <div className="detail-client-container">
                <ClientInfoCard key={showClient.id} showClient={showClient} showClientProperties={showClientProperties} showClientInvoices={showClientInvoices} updateDeleteUserClientList={updateDeleteUserClientList} updateDeleteClientPropertiesList={updateDeleteClientPropertiesList}/>
            </div>
        </div>
    )
}

export default DetailClientContainer