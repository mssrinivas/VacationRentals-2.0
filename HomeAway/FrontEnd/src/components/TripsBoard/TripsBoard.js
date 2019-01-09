import React from 'react';
import TravelHistory from './TravelHistory.js'
import NavBar from '../NavBar/NavBar';
import Navigation from '../Navigation/Navigation';
import './tripsboard.css'
import SearchBar from '../SearchBar/SearchBar';
import cookie from 'react-cookies';
import {Redirect} from  'react-router';
import {connect} from 'react-redux'
import * as Actions from '../../actions/place_finder.js'
import TripsBoardPlaces from './TripsBoardPlaces';

const mapStateToProps = (state) => {
  console.log("here",state)
 return {
  SearchPlaces : state.PLACES
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateTrips : (places) => dispatch(Actions.updateLatestTrips(places)),
    noPlacesToShow : (value) => dispatch(Actions.setNoPlacestoShow(value))
        }
}

var len2 = 0;

class TripsBoard extends React.Component {
 constructor(props) {
    super(props);
   this.state = {
     latesttrips: [],
      NoPlacestoShow : true,
    currentPage: 1,
    todosPerPage: 2
  }
  this.handleClickPage = this.handleClickPage.bind(this);
  }

  handleClickPage(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  componentDidMount() {
     var url = 'http://localhost:4004/tripsboard/' + localStorage.getItem("usernamey")
    fetch(url, {
      method: 'get',
      credentials : 'include'
    })
    .then(response => response.json())
    .then(places => {
      console.log("PALCES RESILR", places)
      len2 = places.length
      console.log("Length is " + len2)
    if(len2)
    {
         this.props.updateTrips(places)
         this.props.noPlacesToShow(false)
         this.setState({latesttrips : places});
        // this.setState({NoPlacestoShow : false})
    }
    else
    {
        this.props.noPlacesToShow(true)
        //this.setState({NoPlacestoShow : true})
        //this.setState({redirecty: false})
    } 
  })
  }
  render() {
    let NoPlaces = null;
    let Redirect_to_Home = null;
    let redirecty_value = null;

   
    const { currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    let currentTodos = null;
    let renderPageNumbers =  null;

    if(cookie.load('cookie'))
    {
     if(this.props.SearchPlaces.NoPlacestoShow === true)
      {
          NoPlaces = (<p class="blueerror errorcenter"><h3>You currently do not have any bookings! Try out our service</h3></p> )
      }
      else
      {
        currentTodos  = this.state.latesttrips.slice(indexOfFirstTodo, indexOfLastTodo);
            // Logic for displaying page numbers
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(this.props.updateTrips.length / todosPerPage); i++) {
              pageNumbers.push(i);
            }
  
            renderPageNumbers = pageNumbers.map(number => {
              return (
                <button class="backgroundbutt btn"
                  key={number}
                  id={number}
                  onClick={this.handleClickPage}
                class="colorful">{number}</button>
              );
            });
        redirecty_value  = currentTodos.map((trip, index) => {
          return (
            <TripsBoardPlaces
              key={index}
              id={trip.Bookings.Property.prop_id}
              name={trip.Bookings.Property.name}
              type={trip.Bookings.Property.type}
              location={trip.Bookings.Property.location}
              bed={trip.Bookings.Property.bed}
              bath={trip.Bookings.Property.bath}
              description={trip.Bookings.Property.description}
              startdate={trip.Bookings.Property.startdate}
              enddate={trip.Bookings.Property.enddate}
              clicked={this.handleClick}
             value={trip.Bookings.Property.id}
             rate={trip.Bookings.Property.rate}
             unit={trip.Bookings.Property.unit}
              />
          ); //return
        }) //map
      }
    }
    else
    {
        Redirect_to_Home = (<Redirect to="/login" />)
    }
    return (
        <div>
        {Redirect_to_Home}
        <br />
         <hr />
         <div class="headingtrips">
            <h1> Trip Boards </h1>
            <h4> Trip Boards help you keep track of the places you love.</h4> 
        </div>
        {NoPlaces}
        <div >
            <ul>
            {redirecty_value}
            </ul>
       </div>
       <div class="centerofpage">
            <ul id="pagenumbers">
              {renderPageNumbers}
            </ul>
            </div> 
         </div>
        );

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TripsBoard);