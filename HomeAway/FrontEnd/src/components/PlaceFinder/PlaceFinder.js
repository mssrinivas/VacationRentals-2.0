import React from 'react';
import DatePicker from 'react-datepicker';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
//import DatePicker from 'material-ui/DatePicker'
import ActionHome from 'material-ui/svg-icons/action/home';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
//import NavBar from '../NavBar/NavBar';
import TravelHistory from '../TripsBoard/TravelHistory';
import {Redirect} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar';
import NavBar from '../NavBar/NavBar';
import './PlaceFinder.css'
import { DateTimePicker } from 'react-widgets'
import Navigation from '../Navigation/Navigation';
import BackgroundImage from 'react-background-image-loader';
import Image from './BackgroundPic.jpg'; // Import using relative path
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import cookie from 'react-cookies'
import {connect} from 'react-redux'
import * as Actions from '../../actions/place_finder.js'
import serializeForm from 'form-serialize'

const mapStateToProps = (state) => {
  console.log("here",state)
 return {
  /* placename : state.placename,
   startdate : state.startdate,
   enddate : state.enddate,
   adultlist : state.adultlist,
   childlist : state.childlist,
   trips : state.trips,
   errors : state.errors,
   redirection : state.redirection*/
   SearchPlaces : state.PLACES
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Trips : (places) => dispatch(Actions.updateTrips(places)),
    setErrorsasTrue : () => { console.log("Called" ) 
                               dispatch(Actions.setErrorsasTrue(true))
                            },
    setErrorsasFalse: ()  => { console.log("Called" ) 
                               dispatch(Actions.setErrorsasFalse(false))
                             }, 
    setRedirectionasTrue : (value) => {dispatch(Actions.setRedirectValue(value))},                                       
    onSubmit : (event) => {
        event.preventDefault();
        const values = serializeForm(event.target, { hash: true })
        var PlaceFinder = { placename: values.places, startdate : values.startdate, enddate: values.enddate, adultlist : values.adultlist, childlist : values.childlist }
        console.log("JSON is "+ JSON.stringify(PlaceFinder))
        dispatch(Actions.SearchPlaces(PlaceFinder))
        }
    }
}

class PlaceFinder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : props.value
    }
  }

  componentWillMount(){
  }

  componentDidMount()
  {
      this.props.setErrorsasFalse()
  }

  onSubmitSearch = (event) => { 
    const request = async () => {
      await this.props.onSubmit(event)
      await fetch('http://localhost:4004/places', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        placename: this.props.SearchPlaces.placename,
        startdate: this.props.SearchPlaces.startdate,
        enddate: this.props.SearchPlaces.enddate,
        adultlist: this.props.SearchPlaces.adultlist,
        childlist: this.props.SearchPlaces.childlist
      })
    })
    .then(response => response.json())
    .then(places => {
      console.log("PLACES are" ,places)
      this.props.Trips(places)
      if(places.length == 0 || places.length === undefined || places.length === null)
      {
        this.props.setErrorsasTrue()
        this.props.setRedirectionasTrue(false)
      }
      else
      {
        this.props.setErrorsasFalse()
        this.props.setRedirectionasTrue(true)
      }
    })
    //.then(place => this.setState({trips : place}))
  }
  request();
}
  render()
  {
     //let AddTag = null;
     let Redirecty = null;
     let No_Place = null;
     if(cookie.load('cookie'))
      {
          //Object.keys(this.state.trips).length
    // if((this.props.trips).length > 0)
        if(this.props.SearchPlaces.errors === false && this.props.SearchPlaces.redirection === true)
        {
         Redirecty = <Redirect to="/home/places" />
        }
      }
      else
      {
        Redirecty = <Redirect to="/login" />
      }
      if(this.props.errors === true)
      {
        No_Place = "No Places found, Please select a different Criteria"
        alert(No_Place)
        this.props.setErrorsasTrue()
      }

    return (
          <div class="backgroundcontainer" >
          <img class="bg" src='https://greenvalleyranch.sclv.com/~/media/Images/Page-Background-Images/GVR/Hotel/GV_Hotel_Exterior4Pool-2012.jpg?h=630&la=en&w=1080'/>
      {Redirecty}

      <Navigation value={this.props.value} />
      <div class="centering row centered">
                              <div class="info-form">
                                  <form onSubmit={this.onSubmitSearch} action="" class="form-inline justify-content-center">
                                      <div class="form-group">
                                          <input type="text" name="places" class="form-control form-control-lg roundy" placeholder="City" onChange = {this.props.onPlaceChange}/>
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                          <input type="date" name="startdate" class="form-control form-control-lg roundy"
                              onChange={this.props.onStartDateChange}
                                       /> 
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                          <input type="date" name="enddate" class="form-control form-control-lg roundy"
                              onChange={this.props.onEndDateChange}
                                           />
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                          <input type="text" name="adultlist" class="reduce form-control form-control-lg roundy" placeholder="Adults" onChange = {this.props.onAdultListChange} />
                                          <input type="text" name="childlist" class="reduce form-control form-control-lg roundy" placeholder="Children" onChange = {this.props.onChildListChange} />
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="submit" class="bluebutton btn btn-primary btn-lg roundy" value="Search" />
                                  </form>
                              </div>
                        <br />  
           </div>
</div>


    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PlaceFinder);

/*
 //let AddTag = null;
     let Redirecty = null;
    if(Object.keys(this.state.trips).length > 0)
    {
    // AddTag = <TravelHistory trips={this.state.trips} />
     Redirecty = <Redirect to="/home/places" />
    }
    return (
          <div class="centering">
      {Redirecty}
      <div class="centering row">
          <section id="cover">
              <div id="cover-caption">
                  <div id="container" class="container">
                      <div class="row text-white">
                          <div class="col-sm-10 offset-sm-1 text-center">
                              <h1 class="display-3"></h1>
                              <div class="info-form">
                                  <form action="" class="form-inline justify-content-center">
                                      <div class="form-group">
                                          <label class="sr-only">Name</label>
                                          <input type="text" class="form-control form-control-lg" placeholder="" onChange = {this.onPlaceChange}/>
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                          <DatePicker class="form-control form-control-lg"
                              selected={this.state.startdate}
                              onChange={this.handleStartDateChange}
                                       />
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                          <DatePicker class="form-control"  width="500"
                              selected={this.state.startdate}
                              onChange={this.handleStartDateChange}
                                           />
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                          <label class="sr-only">Guest List</label>
                                          <input type="text" class="form-control form-control-lg" placeholder="" onChange = {this.onGuestListChange} />
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <button type="button" class="btn btn-primary btn-lg" onClick = {this.onSubmit}>Search</button>
                                  </form>
                              </div>
                              <br />
                          </div>
                      </div>
                  </div>
              </div>
          </section>
    </div>
</div>


*/