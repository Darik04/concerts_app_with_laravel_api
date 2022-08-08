import React, { useEffect } from "react";


function Main(props){
    let [allConcerts, setAllConcerts] = React.useState([])
    let [concerts, setConcerts] = React.useState([])
    let [filter, setFilter] = React.useState({
        locations: [],
        artists: []
    })
    let [selectedArtist, setSelectedArtist] = React.useState(null)
    let [selectedLocation, setSelectedLocation] = React.useState(null)
    let [selectedDate, setSelectedDate] = React.useState(null)
        
    useEffect(() => {
        fetch('http://0.0.0.0/api/v1/concerts')
        .then(response => response.json())
        .then(data => {
            setConcerts(data.concerts)
            setAllConcerts(data.concerts)
            let newFilter = {
                locations: [],
                artists: []
            }
            data.concerts.forEach(concert => {
            let isSameLocation = false;
            let isSameArtist = false;
            let isSameTime = false;
            newFilter.locations.forEach(loc => {
                if(loc.id === concert.location.id){
                isSameLocation = true
                }
            })
            newFilter.artists.forEach(artist => {
                if(artist === concert.artist){
                isSameArtist = true
                }
            })
            if(!isSameLocation){
                newFilter.locations.push(concert.location)
            }
            if(!isSameArtist){
                newFilter.artists.push(concert.artist)
            }
            });
            setFilter(newFilter)
        })
    }, [])

    function filterByArtist(event){
        setSelectedArtist(event.target.value)
        filterAll(event.target.value, selectedLocation)
    }
    function filterByLocation(event){
        let item = filter.locations[event.target.value]
        setSelectedLocation(item)
        filterAll(selectedArtist, item)
    }
    function filterByDate(event){
        setSelectedDate(event.target.value)
        filterAll(selectedArtist, selectedLocation, event.target.value)
    }

    function filterAll(artist = selectedArtist, location = selectedLocation, date = selectedDate){
        setConcerts(allConcerts.filter(concert => {
            console.log(Intl.DateTimeFormat('ru', {month: 'numeric', day: 'numeric', year: 'numeric'}).format(Date.parse(date)))
            let isValid = true
            if(artist != null && artist != concert.artist){
                isValid = false
            }

            if(location != null && location.id != concert.location.id){
                isValid = false
            }

            if(date != null 
                && Intl.DateTimeFormat('ru', {month: 'numeric', day: 'numeric', year: 'numeric'}).format(Date.parse(date)) != Intl.DateTimeFormat('ru', {month: 'numeric', day: 'numeric', year: 'numeric'}).format(Date.parse(concert.shows[0].start))){
                isValid = false
            }
            return isValid
        }))
    }
    
    return (
        <div className="wrapper">
            <h1>Checkout these amazing concerts in Graz</h1>
            <form className="formFilter">
                <select className="selectableItem" name="artist" placeholder="Artist" onChange={filterByArtist}>
                    <option disabled selected value>Artist</option>
                    {filter.artists.map((el, i) => <option key={i} value={el}>{el}</option>)}
                </select>
                <select className="selectableItem" name="artist" placeholder="Location" onChange={filterByLocation}>
                    <option disabled selected value>Location</option>
                    {filter.locations.map((el, i) => <option key={el.id} value={i} >{el.name}</option>)}
                </select>
                <input className="selectableItem" type="date" name="artist" placeholder="Date" onChange={filterByDate}/>
            </form>
            <div className="listConcerts">
                {concerts.map(concert => 
                    (<div key={concert.id} className="listItem">
                        <div>
                            <h5>{Intl.DateTimeFormat('ru', { day: 'numeric', month: 'short'}).format(Date.parse(concert.shows[0].start))}</h5>
                            <h3>{concert.artist}</h3>
                            <h5>{concert.location.name}</h5>
                        </div>
                        <h5>{Intl.DateTimeFormat('ru', {hour: '2-digit', minute: '2-digit'}).format(Date.parse(concert.shows[0].start))} 
                        &nbsp;-&nbsp;{Intl.DateTimeFormat('ru', {hour: '2-digit', minute: '2-digit'}).format(Date.parse(concert.shows[0].end))}</h5>
                    </div>)
                )}
            </div>
            {
                concerts.length == 0
                ? (
                    <center><p style={{fontSize: '26px'}}>No concerts</p></center>
                ) : (<div></div>)
            }
            <div className="h30" />
        </div>
    )
}

export default Main