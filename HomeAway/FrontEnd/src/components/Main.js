import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Navigation from './Navigation/Navigation';
import TripsBoard from './TripsBoard/TripsBoard.js';
import SignIn from './SignIn/SignIn';
import PlaceFinder from './PlaceFinder/PlaceFinder';
import SearchPlaces from './SearchPlaces/SearchPlaces';
import TravelerAccount from './TravelerAccount/TravelerAccount';
import SignUp from './SignUp/SignUp';
import database from './Database';
import SearchBar from './SearchBar/SearchBar'
import PlaceDescription from './PlaceDescription/PlaceDescription';
import NavBar from './NavBar/NavBar'
import StarterPage from './StarterPage/StarterPage';
import Inbox from './Inbox/Inbox';

class Main extends Component {
  constructor (props) {
  super(props)
  this.state ={
    user: {
    name: ''
  },
  startdate: '',
  enddate: '',
  guests: '' 
  }
}

  componentDidMount()
  {
    var userabc = localStorage.getItem("usernamey")
    console.log("LOCAL STORAGE value is " + userabc)
    if(userabc) {
    this.setState({user: {
    name: userabc
    }});
  }
}

  loadUser = (data) => {
    console.log("DATA IS " + JSON.stringify(data));
    this.setState({user: {
    name: data
  }})

    localStorage.setItem("usernamey", data)
    console.log("SET localStorage ITEM AS " +  localStorage.getItem("usernamey"))

}
render() {
console.log("STATE IS  " + this.state.user.name);
  return (
        <div>
        <Route exact path="/" render={()=>(<StarterPage value={this.state.user.name} />)} />                         {/* redux done */}
        <Route exact path="/login" render={()=>(<SignIn loadUser={this.loadUser}/>)} />                              {/* redux done */}
        <Route exact path="/traveller/signup" render={()=>(<SignUp loadUser={this.loadUser}/>)} />                   {/* redux done */}
        <Route exact path="/home" render={()=>(<PlaceFinder value={this.state.user.name} />)} />                     {/* redux done */}
        <Route exact path="/home/places" render={()=>(<Navigation value={this.state.user.name} />)} />               {/* redux done */}
        <Route exact path="/home/places" render={()=>(<SearchBar />)} />                                             {/* redux done */}
        <Route exact path="/tripsboard" render={()=>(<Navigation value={this.state.user.name} />)} />                {/* redux done */}
        <Route exact path="/tripsboard" render={()=>(<TripsBoard value={this.state.user.name} />)} />                {/* redux done */}
        <Route exact path="/traveller/accounty" render={()=>(<Navigation value={this.state.user.name} />)} />        {/* redux done */}
        <Route exact path="/traveller/accounty" render={()=>(<TravelerAccount value={this.state.user.name} />)} />   {/* redux done */}
        <Route path="/places/propertydescription" render={()=>(<Navigation value={this.state.user.name} />)} />      {/* redux done */}
        <Route path="/places/propertydescription" render={()=>(<PlaceDescription />)} />                             {}
        <Route exact path="/inbox" render={()=>(<Navigation value={this.state.user.name} />)} /> 
        <Route exact path="/inbox" render={()=>(<Inbox />)} />   

       </div>
  );
}
}

export default Main;



