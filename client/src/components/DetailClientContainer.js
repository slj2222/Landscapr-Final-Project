import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientInfoCard from "./ClientInfoCard";


function DetailClientContainer() {
    const [showClient, setShowClient] = useState([])
    const { id } = useParams()


    useEffect(() => {
        fetch(`/clients/${id}`)
            .then(res => res.json())
            .then(data => {
                setShowClient(data)
                // setShowClientInvoices(data.invoices)
                // setShowClientProperties(data.properties)
            })
    }, [id])



    return (
        <div>
            <div className="detail-client-container">
                <ClientInfoCard showClient={showClient}/>
            {/* {mapClientProperties} */}
            {/* <Link to={`/clients/${id}/invoices/new`}> */}
                <button>add an invoice</button>
            {/* </Link> */}
            {/* <Link to={`/clients/${id}/properties/new`}> */}
                <button>add a property</button>
            {/* </Link> */}

            {/* <div> */}
            {/* {mapShowClientInvoices} */}
            {/* </div> */}
        </div>
        </div>
    )
}

export default DetailClientContainer