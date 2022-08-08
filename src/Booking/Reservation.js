import React from "react";


function Main(){
    return (
        <div className="wrapper reservationWrapper">
            <h1>Book seats for your show</h1>
            <div className="listItem">
                <div>
                    <h5>Date</h5>
                    <h3>Bethoven</h3>
                    <h5>Location</h5>
                </div>
                <h5>Start - End</h5>
            </div>
            <div className="reservationContainer">
                <div className="seatsBlock">
                    <div className="stage">Stage</div>
                    <div className="allSeats">
                        <div className="row">
                            <h5>Stall 01</h5>
                            <div className="seats">
                                {Array.from(Array(50).keys()).map((el, i) => <div key={el} className="seat" />)}
                            </div>
                        </div>
                        <div className="row">
                            <h5>Stall 01</h5>
                            <div className="seats">
                                {Array.from(Array(50).keys()).map((el, i) => <div key={el} className="seat" />)}
                            </div>
                        </div>
                        <div className="row">
                            <h5>Stall 01</h5>
                            <div className="seats">
                                {Array.from(Array(50).keys()).map((el, i) => <div key={el} className="seat" />)}
                            </div>
                        </div>
                        <div className="row">
                            <h5>Stall 01</h5>
                            <div className="seats">
                                {Array.from(Array(50).keys()).map((el, i) => <div key={el} className="seat" />)}
                            </div>
                        </div>


                        <div className="row">
                            <h5>Stall 01</h5>
                            <div className="seats">
                                {Array.from(Array(50).keys()).map((el, i) => <div key={el} className="seat" />)}
                            </div>
                        </div>
                        <div className="row">
                            <h5>Stall 01</h5>
                            <div className="seats">
                                {Array.from(Array(50).keys()).map((el, i) => <div key={el} className="seat" />)}
                            </div>
                        </div>
                        <div className="row">
                            <h5>Stall 01</h5>
                            <div className="seats">
                                {Array.from(Array(50).keys()).map((el, i) => <div key={el} className="seat" />)}
                            </div>
                        </div>
                        <div className="row">
                            <h5>Stall 01</h5>
                            <div className="seats">
                                {Array.from(Array(50).keys()).map((el, i) => <div key={el} className="seat" />)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="detailsReservedBlock">
                    <h3>Selected seats</h3>
                    <div className="listSeats">
                        <p>Row: Stall 01, Seat: 6</p>
                        <p>Row: Stall 01, Seat: 6</p>
                        <p>Row: Stall 01, Seat: 6</p>
                    </div>
                    <p>Your seats expire in 02:35</p>
                    <div className="btnv2 enterBookingBtn">
                        Enter Booking<br/>
                        Details
                    </div>
                </div>
            </div>
            <div className="h30" />
        </div>
    )
}

export default Main