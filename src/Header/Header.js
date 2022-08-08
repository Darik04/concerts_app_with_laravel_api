import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="wrapper space-berween">
                <h2>EuroSkills Concerts</h2>
                <div className="header-right">
                    <p>Already booked?</p>
                    <div className="btn get-ticket-btn">Get Tickets</div>
                </div>
            </div>
        </div>
    )
}

export default Header