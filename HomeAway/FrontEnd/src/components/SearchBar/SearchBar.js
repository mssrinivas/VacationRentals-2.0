import React from 'react';
import TravelHistory from '../TripsBoard/TravelHistory'
import PlaceFinder from '../PlaceFinder/PlaceFinder'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBar.css'
import {Redirect} from 'react-router-dom';
import Places from '../Places/Places';
import cookie from 'react-cookies'
import {connect} from 'react-redux'
import * as Actions from '../../actions/place_finder.js'
import serializeForm from 'form-serialize'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import Checkbox from 'muicss/lib/react/checkbox';
import ReactPaginate from 'react-paginate';

const mapStateToProps = (state) => {
  console.log("here",state)
 return {
   SearchPlaces : state.PLACES
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    Trips : (places) => dispatch(Actions.updateTrips(places)),
    onRedirect : (value) => {dispatch(Actions.setRedirectValue(value))},
    setNoPlacestoShow : (value) => dispatch(Actions.setNoPlacestoShow(value)),
    onSubmit : (event) => {
      event.preventDefault();
      const values = serializeForm(event.target, { hash: true })
      var PlaceFinder = { placename: values.places, startdate : values.startdate, enddate: values.enddate, adultlist : values.adultlist, childlist : values.childlist }
        console.log("JSON is "+ JSON.stringify(PlaceFinder))
        dispatch(Actions.SearchPlaces(PlaceFinder))
    }
        }
}

var len0 = 0;
var len1 = 0;
var len2 = 0;


class SearchBar extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      placename: this.props.SearchPlaces.placename,
      startdate: this.props.SearchPlaces.startdate,
      enddate: this.props.SearchPlaces.enddate,
      adultlist: this.props.SearchPlaces.adultlist,
      childlist: this.props.SearchPlaces.childlist,
      placeslist: this.props.SearchPlaces.trips,
      redirection: this.props.SearchPlaces.redirection,
      NoPlacestoShow : this.props.SearchPlaces.NoPlacestoShow,
      pricevalue : 0,
      bedroomsvalue : 0,
      bathroomsvalue : 0,
      oceanfrontchecked : false,
      oceanchecked : false,
      mountainschecked : false,
      villagechecked : false,
      beachviewchecked : false,
      villachecked : false,
      apartmentchecked : false,
      townhousechecked : false,
      bungalowchecked : false,
      housechecked : false,
      currentPage: 1,
      todosPerPage: 2
    };
    this.handleClickPage = this.handleClickPage.bind(this);
  }

  handleClickPage(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }

  onSubmitSearch = (event) => { 



    const request = async () => {
      await this.props.onSubmit(event)
      await fetch('http://localhost:4004/places', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        placename: this.state.placename,
        startdate: this.state.startdate,
        enddate: this.state.enddate,
        adultlist: this.state.adultlist,
        childlist: this.state.childlist,
        NoPlacestoShow : this.state.NoPlacestoShow
      })
    })
    .then(response => response.json())
    .then(places => {
      console.log("Places are " ,places)
       this.setState({placeslist : places})
       this.props.Trips(places)
      len0 = Object.keys(this.state.placeslist).length
       if(len0)
      {
        console.log("Setting True")
      //  this.props.onRedirect(true)
      //  this.props.setNoPlacestoShow(false)
      this.setState({redirection:true})
      this.setState({NoPlacestoShow : false})

     }
     else
     {
      // this.props.onRedirect(false)
      // this.props.setNoPlacestoShow(true)
      this.setState({NoPlacestoShow : true})
      this.setState({redirection : false})
     }
    })
  }
  request();
  }

  componentDidMount() {
    /*fetch('http://localhost:4004/placefilters')
    .then((response) => response.json())
    .then((data) => {
      console.log("geiuwgvuiwrghviuwhviruwhvuet", data)
      console.log("HERE" + data.placename)
      this.setState({placename: data.placename})
      this.setState({adultlist: data.adultlist})
      this.setState({childlist : data.childlist})
      this.setState({startdate: data.startdate})
      this.setState({enddate: data.enddate})
      console.log("ADULTS " + data.adultlist)
      console.log("CHILDREN " + data.childlist)
  })*/

  this.setState({placename: this.props.SearchPlaces.placename})
  this.setState({adultlist: this.props.SearchPlaces.adultlist})
  this.setState({childlist : this.props.SearchPlaces.childlist})
  this.setState({startdate: this.props.SearchPlaces.startdate})
  this.setState({enddate: this.props.SearchPlaces.enddate})

  fetch('http://localhost:4004/places', {
    method: 'post',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      placename: this.state.placename,
      startdate: this.state.startdate,
      enddate: this.state.enddate,
      adultlist: this.state.adultlist,
      childlist: this.state.childlist,
    })
  })
  .then(response => response.json())
  .then(places => {
    console.log("Places are " ,places)
     this.setState({placeslist : places})
     this.props.Trips(places)
    len0 = Object.keys(this.state.placeslist).length
     if(len0)
    {
      console.log("Setting True")
    //  this.props.onRedirect(true)
    //  this.props.setNoPlacestoShow(false)
    this.setState({redirection:true})
    this.setState({NoPlacestoShow : false})

   }
   else
   {
    // this.props.onRedirect(false)
    // this.props.setNoPlacestoShow(true)
    this.setState({NoPlacestoShow : true})
    this.setState({redirection : false})
   }
  })
  
/*
    var url = 'http://localhost:4004/places/'
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response => response.json())
    .then(places => {
    this.props.Trips(places);
    this.setState({placeslist : places})
    console.log("PLACE LIST",places)
    //len1 = Object.keys(this.state.placeslist).length
    len1 = places.length
     if(len1)
    {
       console.log("came here and Setting True")
        this.setState({redirection:true})
         this.setState({NoPlacestoShow : false})
       //  this.setState({showinconsole : true})
        // this.props.onRedirect(true)
        // this.props.setNoPlacestoShow(false)
    }
    else
    {
      // this.props.onRedirect(false)
      // this.props.setNoPlacestoShow(true)
      this.setState({NoPlacestoShow : true})
      this.setState({redirection : false})
    }
    // if(this.props.value === false)
    // {
    //   this.props.onRedirect(false)
    // }
  })*/
    
  }
  
  componentWillMount()
  {
    /*
    var url = 'http://localhost:4004/places/'
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response => response.json())
    .then(places => {
    this.props.Trips(places);
    console.log(places)
    this.setState({placeslist : places})
     len2 = Object.keys(this.state.placeslist).length
    if(len2)
    {
      console.log("Setting True")
       this.setState({redirection: true})
        this.setState({NoPlacestoShow : false})
       //  this.props.onRedirect(true)
      //   this.props.setNoPlacestoShow(false)
    }
    else
    {
      // this.props.onRedirect(false)
      // this.props.setNoPlacestoShow(true)
      this.setState({NoPlacestoShow : true})
      this.setState({redirection : false})
    }
  })
    */
  }

  onPlaceChange = (event) => {
    this.setState({placename : event.target.value})
  }

  onStartDateChange = (event) => {
    this.setState({startdate : event.target.value})
  }

  onEndDateChange = (event) => {
    this.setState({enddate : event.target.value})
  }

  onAdultListChange = (event) => {
    this.setState({adultlist : event.target.value})
  }

  onChildListChange = (event) => {
    this.setState({childlist : event.target.value})
  }

handleClick(key){
    console.log("KEY IS " +key);
    localStorage.setItem("activekey" , key)
   // this.setState(
     // {propId:key})
    //console.log(this.state)
}

handleChangePrice = value => {
  this.setState({
    pricevalue: value
  })
};

handleChangeBedRooms = value => {
  this.setState({
    bedroomsvalue: value
  })
};


handleChangeBathRooms = value => {
  this.setState({
    bathroomsvalue: value
  })
};


onChange(ev, parameter) {
  this.setState({parameter: ev.target.checked});
}
  render() {
    const { currentPage, todosPerPage } = this.state;

    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = this.state.placeslist.slice(indexOfFirstTodo, indexOfLastTodo);
        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.state.placeslist.length / todosPerPage); i++) {
          pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
          return (
            <button class="backgroundbutt btn"
              key={number}
              id={number}
              onClick={this.handleClickPage}
            class="colorful">{number}</button>
          );
        });
    let redirecty_value = null;
    let NoPlaces = null;
    const { pricevalue, bedroomsvalue, bathroomsvalue } = this.state
    if(cookie.load('cookie'))
    {
     // {console.log("showinconsole = " + this.state.showinconsole)}
        if(this.state.redirection === true)
        {
          redirecty_value  = currentTodos.map((trip, index) => {
              return (
                <Places
                  key={index}
                  id={trip.Property.prop_id}
                  name={trip.Property.name}
                  type={trip.Property.type}
                  location={trip.Property.location}
                  bed={trip.Property.bed}
                  bath={trip.Property.bath}
                  description={trip.Property.description}
                  startdate={trip.Property.startdate}
                  enddate={trip.Property.enddate}
                  clicked={this.handleClick}
                 value={trip.Property.prop_id}
                 rate={trip.Property.rate}
                 unit={trip.Property.unit}
                  />
              ); //return
            }) //map
      } //if

      if(this.state.NoPlacestoShow === true)
      {
          NoPlaces = (<p class="error"><h3> No Places to show! Please select a different criteria</h3></p> )
      }
    }
     else
      {
        redirecty_value = (<Redirect to="/login" />)
      }
    return (
        <div>
        <hr />
{/**/ }
         <div class="row centery">
                              <div class="info-form">
                                  <form onSubmit={this.onSubmitSearch} action="" class="form-inline justify-content-center">
                                      <div class="form-group">
                                          <input type="text" name="places" class="form-control form-control-lg roundy" value={this.state.placename} placeholder="" onChange= {this.onPlaceChange}/>
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                         <input type="date" name="startdate" class="form-control form-control-lg roundy"
                                         value={this.state.startdate}
                              onChange={this.onStartDateChange}
                                       />
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                        <input type="date" name="enddate" class="form-control form-control-lg roundy"
                                        value = {this.state.enddate}
                              onChange={this.onEndDateChange}
                                           />
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <div class="form-group">
                                          <input type="text" name="adultlist" class="reduce form-control form-control-lg roundy smally" placeholder="" value={this.state.adultlist} onChange = {this.onAdultListChange} />
                                          <input type="text" name="childlist" class="reduce form-control form-control-lg roundy smally" placeholder="" value={this.state.childlist} onChange = {this.onChildListChange} />
                                      </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                      <input type="submit" class="bluebutton btn btn-primary btn-lg roundy" value="Search" />
                                  </form>
                              </div>
                        <br />  
           </div>
           <br />
           <div class="movetocenter">
<button type="button"  data-toggle="modal" data-target="#exampleModal"  data-whatever="@getbootstrap"> <p class="boldy">More Filters</p></button>
</div>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">More Filters</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
        <p class="boldy"><h1>Price per night</h1></p>
          <div className='slider'>
          <Slider
            min={300}
            max={1000}
            value={pricevalue}
            onChange={this.handleChangePrice}
          />
          <div className='value'>{pricevalue}</div>
        </div>
        <p class="boldy"><h1>Bed rooms</h1></p>
          <div className='slider'>
          <Slider
            min={1}
            max={5}
            value={bedroomsvalue}
            onChange={this.handleChangeBedRooms}
          />
          <div className='value'>{bedroomsvalue}</div>
        </div>
        <p class="boldy"><h1>Bath rooms</h1></p>
          <div className='slider'>
          <Slider
            min={1}
            max={5}
            value={bathroomsvalue}
            onChange={this.handleChangeBathRooms}
          />
          <div className='value'>{bathroomsvalue}</div>
        </div>
        <p class="boldy"><h1>Property Type</h1></p>
        <Checkbox
        label="Villa"
        checked={this.state.villachecked}
        onChange={this.onChange.bind(this)}
         />
          <Checkbox
        label="Apartment"
        checked={this.state.apartmentchecked}
        onChange={this.onChange.bind(this)}
         />
          <Checkbox
        label="Town House"
        checked={this.state.townhousechecked}
        onChange={this.onChange.bind(this)}
         />
          <Checkbox
        label="Bungalow"
        checked={this.state.bungalowchecked}
        onChange={this.onChange.bind(this)}
         />
          <Checkbox
        label="House"
        checked={this.state.housechecked}
        onChange={this.onChange.bind(this)}
         />
          <p class="boldy"><h1>Location</h1></p>
        <Checkbox
        label="Ocean Front"
        checked={this.state.oceanfrontchecked}
        onChange={this.onChange.bind(this)}
         />
          <Checkbox
        label="Beach View"
        checked={this.state.beachviewchecked}
        onChange={this.onChange.bind(this)}
         />
          <Checkbox
        label="Ocean"
        checked={this.state.oceanchecked}
        onChange={this.onChange.bind(this)}
         />
          <Checkbox
        label="Village"
        checked={this.state.villagechecked}
        onChange={this.onChange.bind(this)}
         />
          <Checkbox
        label="Mountains"
        checked={this.state.mountainschecked}
        onChange={this.onChange.bind(this)}
         />
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal" >Close</button>
        <button type="button" class="btn btn-primary" onClick={this.onSubmitMessage}>Send message</button>
      </div>
    </div>
    </div>
  </div>
       <div >
            <ul>
            {redirecty_value}
            </ul>   
       </div>
              <div class="centery errorcenter">
                  {NoPlaces} 
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);


/*



Features & amenities

Pool

Internet/WiFi

Air conditioning

Full Kitchen

Hot tub

TV

Laundry machines

Outdoor grill/BBQ

Parking available

Dishwasher

Fireplace

Garden or backyard

Balcony

Bed linens provided

Heated/indoor pool

Patio or deck

King-sized bed

Oven/stove

Microwave

Crib

DVD player

Iron & ironing board

Kids' high chair

Heating

Gym/fitness equipment

Private pool
More
House rules

Pets allowed

Children welcome

Smoking allowed

Events allowed
Services

Housekeeping
Property type

Cottage

Cabin

Bungalow

Townhouse

House

Boat

Villa

Apartment/condo

Studio

Estate

Guest house
Yacht
Houseboat
Resort
Bed & breakfast
Castle
Lodge

Mobile home/caravan

Hotel
Chateau/country house
Chalet
Farmhouse

Barn
Mill
Tower
More
Properties good for

Families with kids

Luxury
Safety & accessibility

Low-allergen environment

Wheelchair accessible

Elevator
Booking Options

24 Hour Confirmation
Location

Oceanfront

Beach view

Ocean

Village
Town

Mountains

Rural

Downtown

Golf course

Beach

Waterfront

Lake

Beachfront

Ski-in/ski-out
More
Property reviews

★★★★☆ 4+ stars

★★★☆☆ 3+ stars
Nearby activities

Golfing


*/