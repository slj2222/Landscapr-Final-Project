import React, { useState, useEffect } from "react";

function InvoiceTotalsCard() {
    const [totalInvoiced, setTotalInvoiced] = useState()
    const [totalCollected, setTotalCollected] = useState()
    const [totalOutstanding, setTotalOutstanding] = useState()

    useEffect(() => {
        fetch("/total-invoiced")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTotalInvoiced(data)
            })
    }, [])

    useEffect(() => {
        fetch("/total-collected")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTotalCollected(data)
            })
    }, [])

    useEffect(() => {
        fetch("/total-outstanding")
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setTotalOutstanding(data)
            })
    }, [totalOutstanding])

    return (
        <div className="client-info-container">
            <div className="client-info-card">
                <div className="client-info-card-columns">
                    <div className="">
                        <h3>
                            total invoiced: $ {totalInvoiced}
                        </h3>
                    </div>
                    <div>
                        <h3>
                            total collected: $ {totalCollected}
                        </h3>
                    </div>
                    <div>
                        <h3>
                            total outstanding: $ {totalOutstanding}
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvoiceTotalsCard