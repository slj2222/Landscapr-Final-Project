import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientInfoCard from "./ClientInfoCard";
import CLientListPropertyCard from "./ClientListPropertyCard";


function DetailClientContainer() {
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


    
    // const mapShowClientProperties = showClient.properties.map(property => {
    //     return (
    //         <CLientListPropertyCard />
    //     )
    // })

    return (
        <div>
            <div className="detail-client-container">
                <ClientInfoCard showClient={showClient} showClientProperties={showClientProperties} showClientInvoices={showClientInvoices}/>
            {/* {mapShowClientProperties} */}
            {/* <Link to={`/clients/${id}/invoices/new`}> */}
                <button>add an invoice</button>
            {/* </Link> */}
            {/* <Link to={`/clients/${id}/properties/new`}> */}
                <button>add a property</button>
            {/* </Link> */}

            
            
            
        </div>
        </div>
    )
}

export default DetailClientContainer