import React from 'react';
import TravelHistory from '../TripsBoard/TravelHistory.js'
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';
import FetchPlaces from '../FetchPlaces/FetchPlaces';
import Places from '../Places/Places';
import SearchBar from '../SearchBar/SearchBar';
import './SearchPlaces.css'

class SearchPlaces extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      allListedPlaces: [],
      selectedPlace : '',
      propId:"",
      displayplaces: false
    };
    this.handleClick=this.handleClick.bind(this)
  }
  componentWillMount() {
  //var url =   'http://localhost:4004/tripsboard/' + localStorage.getItem("usernamey")
   var url = 'http://localhost:4004/places/'
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response => response.json())
    .then(places => {
    this.setState({allListedPlaces : places});
    console.log("Search Places value " + places)
  })
  }

  handleClick(key){
    console.log("KEY IS " +key);
    localStorage.setItem("activekey" , key)
    this.setState(
      {propId:key})
    console.log(this.state)
}

  render() {
    return (
      <div class="padtop">{
     this.state.allListedPlaces.map((trip, i) => {
          return (
            <Places
              key={trip.id}
              id={trip.id}
              name={trip.name}
              type={trip.type}
              location={trip.location}
              bed={trip.bed}
              bath={trip.bath}
              description={trip.description}
              startdate={trip.startdate}
              enddate={trip.enddate}
             clicked={this.handleClick}
             value={trip.id}
              />
          );
        })
    }
    </div>
        );
  }
}

export default SearchPlaces;