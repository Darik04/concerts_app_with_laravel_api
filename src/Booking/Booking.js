import React from "react";




function Booking(){
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
                <div className="detailsReservedBlock">
                    <h3>Selected seats</h3>
                    <div className="listSeats">
                        <p>Row: Stall 01, Seat: 6</p>
                        <p>Row: Stall 01, Seat: 6</p>
                        <p>Row: Stall 01, Seat: 6</p>
                    </div>
                    <p>Your seats expire in 02:35</p>
                    <div className="btnv2 enterBookingBtn">
                        Change seats
                    </div>
                </div>
                <div className="enterDetailsBlock">
                    <h3>Please enter your details</h3>
                    <div className="space-between">
                        <form className="enterDetailsForm">
                            <div>
                                <label for="name">Name</label>
                                <input id="name" name="name" type="text" placeholder="Name"/>
                            </div>
                            <div>
                                <label for="address">Address</label>
                                <input id="address" name="address" type="text" placeholder="Address"/>
                            </div>
                            <div className="rowLine">
                                <div>
                                    <label for="zipcode">ZIP code</label>
                                    <input id="zipcode" name="zipcode" type="text" placeholder="ZIP code"/>
                                </div>
                                <div>
                                    <label for="city">City</label>
                                    <input id="city" name="city" type="text" placeholder="City"/>
                                </div>
                            </div>
                            <div>
                                <label for="country">Country</label>
                                <select id="country" name="country" placeholder="Country">
                                    <option value="1">USA</option>
                                    <option value="2">Kazakhstan</option>
                                </select>
                            </div>
                        </form>
                        <div className="infoBooking">
                            <div className="h30" />
                            <p>
                                By clicking "Book" you accept that you are bot actually booking a <br />
                                ticket as this is a test project and not real website.
                            </p>
                            <div className="space-between">
                                <div className="btnv2 enterBookingBtn">
                                    Your ticket will be available <br />
                                    immediately after booking
                                </div>
                                <div className="btnv2 enterBookingBtn">
                                    Book
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h30" />
        </div>
    )
}


export default Booking