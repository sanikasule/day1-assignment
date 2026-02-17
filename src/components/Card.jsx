import React from "react";

function Card({companyName, sharesCount, amount}) {
    return (
        <div style={{width: '300px', height:'300px', border: 'solid black', alignContent: 'center'}}>
            <p>Company Name: {companyName}</p>
            <p>Total Shares: {sharesCount}</p>
            <p>Amount: {amount}</p>
        </div>
    )
}

export default Card