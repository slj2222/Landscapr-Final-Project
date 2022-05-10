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
        <div className="invoice-totals-card">
            <div id="totals">
                <div>
                total invoiced: $ {totalInvoiced}
                </div>
                <div>
                    total collected: $ {totalCollected}
                </div>
                <div>
                    total outstanding: $ {totalOutstanding}
                </div>
        </div>
    </div>
    )
}

export default InvoiceTotalsCard