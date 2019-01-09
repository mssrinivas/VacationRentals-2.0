import React, { Component } from 'react';
import 'tachyons';
import {Route} from 'react-router-dom'
import OwnerSignIn from './OwnerSignIn/OwnerSignIn';
import OwnerDashBoard from './OwnerDashBoard/OwnerDashBoard';
import OwnerDetails from './OwnerDetails/OwnerDetails';
import OwnerProperty from './OwnerProperty/OwnerProperty';
import AddProperty from './AddProperty/AddProperty';
import OwnerSideBar from './OwnerSideBar/OwnerSideBar';
import OwnerNavigation from './OwnerNavigation/OwnerNavigation';
import PropertyLocation from './PropertyLocation/PropertyLocation';
import PropertyDetails from './PropertyDetails/PropertyDetails';
import PropertyBooking from './PropertyBooking/PropertyBooking';
import PropertyPhotos from './PropertyPhotos/PropertyPhotos';
import PropertyPricing from './PropertyPricing/PropertyPricing';
import ProgressBar from './ProgressBar/ProgressBar';
import OwnerAccount from './OwnerAccount/OwnerAccount';
import OwnerHome from './OwnerHome/OwnerHome';
import OwnerSignUp from './OwnerSignUp/OwnerSignUp';


class OwnerMain extends Component {
    constructor (props) {
    super(props)
    this.state = {
       user: {
          name: ''
      }
    };
  }

  componentDidMount()
  {
    var userabc = localStorage.getItem("ownery")
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
    localStorage.setItem("ownery", data)
    console.log("SET localStorage ITEM AS " +  localStorage.getItem("ownery"))
}


/*
  <Route exact path="/" render={()=>(<StarterPage value={this.state.user.name} />)} />
        <Route exact path="/login" render={()=>(<SignIn loadUser={this.loadUser}/>)} />
        <Route exact path="/traveller/signup" render={()=>(<SignUp loadUser={this.loadUser}/>)} />
        <Route exact path="/home" render={()=>(<PlaceFinder value={this.state.user.name} />)} /> 
        <Route exact path="/home/places" render={()=>(<Navigation value={this.state.user.name} />)} /> 
       <Route exact path="/home/places" render={()=>(<SearchPlaces />)} /> 
        <Route exact path="/home/places" render={()=>(<SearchBar />)} />  
       <Route exact path="/home/places" render={()=>(<SearchPlaces />)} /> 
        <Route exact path="/tripsboard" render={()=>(<Navigation value={this.state.user.name} />)} />
        <Route exact path="/tripsboard" render={()=>(<TripsBoard value={this.state.user.name} />)} />
        <Route exact path="/traveller/accounty" render={()=>(<Navigation value={this.state.user.name} />)} />
        <Route exact path="/traveller/accounty" render={()=>(<TravelerAccount value={this.state.user.name} />)} /> 
        <Route path="/places/propertydescription" render={()=>(<Navigation value={this.state.user.name} />)} /> 
        <Route path="/places/propertydescription" render={()=>(<PlaceDescription />)} />

*/
  render() {
    return (
          <div>
          <Route exact path="/owner/latestpostings" render={()=>(<OwnerDashBoard loadUser={this.loadUser}/>)} />
          <Route exact path="/owner/home" render={()=>(<OwnerHome loadUser={this.loadUser}/>)} />
          <Route exact path="/owner/login" render={()=>(<OwnerSignIn loadUser={this.loadUser}/>)} />
          <Route exact path="/owner/signup" render={()=>(<OwnerSignUp loadUser={this.loadUser}/>)} />
          <Route path="/addproperty" render={()=>(<OwnerNavigation loadUser={this.loadUser}/>)} />
          <Route exact path="/owner/account" render={()=>(<OwnerNavigation loadUser={this.loadUser}/>)} />
          <Route path="/addproperty"render={()=>(<AddProperty loadUser={this.loadUser}/>)} />
          <Route path="/owner/account" render={()=>(<OwnerAccount loadUser={this.loadUser}/>)} />
          </div>
    );
  }
}
export default OwnerMain;