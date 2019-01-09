import React,{Component} from 'react';
import './PlaceDescription.css';
import  { Carousel, CarouselInner, CarouselItem, View, Container } from 'mdbreact';
import {Redirect} from 'react-router'
import cookie from 'react-cookies'
import {connect} from 'react-redux'
//import * as Actions from '../../actions/property_description.js'

const mapStateToProps = (state) => {
	console.log("here",state)
	
 return {
	/*Headline: state.Headline,
	PropertyDescription: state.PropertyDescription,
	PropertyType: state.PropertyType,
	Bedrooms : state.Bedrooms,
	Bathroom : state.Bathroom,
	MinStay: state.MinStay,
	People: state.People,
	PerNight: state.PerNight,
	AvailableStartDate: state.AvailableStartDate,
	AvailableEndDate: state.AvailableEndDate,
	Currency: state.Currency,
	Redirecty : state.Redirecty,
	placename : state.placename,
	startdate : state.startdate,
	enddate : state.enddate,
	adultlist : state.adultlist,
	childlist : state.childlist*/
	PlaceDescription : state.PROPERTY,
	SearchPlaces : state.PLACES
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    /*onPlaceChange : (value) => dispatch(Actions.setPlaceField(value)),
    onStartDateChange : (value) => dispatch(Actions.setStartDateField(value)),
    onEndDateChange : (value) => dispatch(Actions.setEndDateField(value)),
    onAdultListChange : (value) => dispatch(Actions.setAdultListField(value)),
	onChildListChange : (value) => dispatch(Actions.setChildListField(value)),
	onHeadlineChange : (value) => {dispatch(Actions.setHeadName(value))},
	onPropertyDescription : (value) => {dispatch(Actions.setDescription(value))},
	onPropertyType : (value) => {dispatch(Actions.setPropertyType(value))},
	onBedrooms : (value) => {dispatch(Actions.setBedRooms(value))},
	onBathroom : (value) => {dispatch(Actions.setBathRooms(value))},
	onMinStay : (value) => {dispatch(Actions.setMinStay(value))},
	onPeople : (value) => {dispatch(Actions.setPeople(value))},
	onPerNight : (value) => {dispatch(Actions.setPerNight(value))},
	onAvailableStartDate : (value) => {dispatch(Actions.setAvailableStartDate(value))},
	onAvailableEndDate : (value) => {dispatch(Actions.setAvailableEndDate(value))},
	onCurrency : (value) => {dispatch(Actions.setCurrency(value))},
	onRedirecty : (value) => {dispatch(Actions.setRedirect(value))} */
  }
}
var img1 = ''
class PlaceDescription extends Component 
{
	 constructor(props) {
	    super(props);
	    this.state = {
	      Headline: '',
	      PropertyDescription: '',
	      PropertyType: '',
	      Bedrooms : '',
	      Accomodates : '',
	      Bathroom : '',
	      MinStay: '',
	      People: '',
	      PerNight: '',
	      AvailableStartDate: '',
	      AvailableEndDate: '',
	      Currency: '',
	      Redirecty : false,
	      placename: this.props.SearchPlaces.placename,
	      startdate: this.props.SearchPlaces.startdate,
	      enddate: this.props.SearchPlaces.enddate,
	      adultlist: this.props.SearchPlaces.adultlist,
	      childlist: this.props.SearchPlaces.childlist,
	      photos: [],
		  Total : 0,
			message : '',
			ownername : ''
	    }
	}

	componentDidMount()
	{
		
	var id = localStorage.getItem("activekey");
	//var id = 15
		 var url = 'http://localhost:4004/places/propertydescription/' + id
		    fetch(url, {
		      method: 'get',
		      credentials : 'include',
		    })
		    .then(response => response.json())
		    .then(places => {
					console.log("INFO" , places.Property[0])
		     this.setState({Headline: places.Property[0].name})
		      this.setState({PropertyDescription: places.Property[0].description})
		      this.setState({PropertyType: places.Property[0].type})
		      this.setState({Bedrooms: places.Property[0].bed})
		      this.setState({Bathroom: places.Property[0].bath})
		      this.setState({MinStay: places.Property[0].minstay})
		      let res1= places.Property[0].maxadults;
		      let res2 = places.Property[0].maxchild;
		      let res = res1+res2;
		      this.setState({People: res})
		      this.setState({PerNight: places.Property[0].rate})
		      this.setState({AvailableStartDate: places.Property[0].startdate})
		      this.setState({AvailableEndDate: places.Property[0].enddate})
		      this.setState({Currency: places.Property[0].currencytype})
			  var one =  new Date(this.state.enddate);
			  var two =  new Date(this.state.startdate);
			  var timeDiff = Math.abs(one.getTime() - two.getTime());
	          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	          var totalAmount = diffDays * places.Property[0].rate;
						this.setState({Total : totalAmount})
						this.setState({ownername : places.Property[0].username})
		  })


	     fetch('http://localhost:4004/getPropertyImg', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		      credentials : 'include',
		      body : JSON.stringify({
		      	id : id
		      })
		    })
		    .then(response => response.json())
		    .then(data => {
		    	var imageArr = [];
		    	console.log("length is "+ data.results.length)
		    	for (let i = 0; i < data.results.length; i++) {
		    	let imagePreview = 'data:image/jpg;charset=utf-8;base64, ' + data.results[i];
                                imageArr.push(imagePreview);
                                const photoArr = this.state.photos.slice();
                                photoArr[i] = imagePreview;
                                this.setState({
                                    photos: photoArr
                                });
                                console.log('Photo State: ', this.state.photos);
                  }
			})

	}

	onMessageChange = (event) => {
		console.log(this.state.message)
	this.setState({message : event.target.value})
}

   onSubmitMessage = () => {
	   console.log("CAME HERE")
	   var url = 'http://localhost:4004/sendmessage'
	   var id = localStorage.getItem("activekey");
	   var name = localStorage.getItem("usernamey")
	fetch(url, {
		method: 'post',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			  property_id: id ,
			  username: name,
				message : this.state.message,
				ownername : this.state.ownername	  
			})
		})
		.then(response => {
		if(response.status === 400)
		{
			alert("Message not sent")
		}
		else
		{
			alert("Message sent successfully")
		}
		})
   }

	onSubmit = () => {
		var id = localStorage.getItem("activekey");
		var name = localStorage.getItem("usernamey");
		var url= 'http://localhost:4004/book/property'
		fetch(url, {
      		method: 'post',
      		headers: {'Content-Type': 'application/json'},
      		body: JSON.stringify({
       			 property_id: id,
       			 username: name,
       			 startdate : this.state.startdate,
				 enddate : this.state.enddate,
					
      })
    })

   .then(response => {
      if(response.status === 400)
        {
          alert("This Property Cannot be booked")
        }
      else
        {
          response.json()
          .then(places => {
          this.setState({Redirecty : true})
           alert("Property Booked Successfully")
          })

        }
      })
	}
 
  render()
  {
  	let Redirection_Value = null;
  	let Error_Display = null;
  	if(cookie.load('cookie'))
  	{
	  	if(this.state.Redirecty === true)
	  	{
	  		Redirection_Value = (<Redirect to="/home" />)
	  	}
  	}
  	else
  	{
  		Redirection_Value = (<Redirect to="/login" />)
  	}
  	

  	let carousalBlock = this.state.photos.map(function (item, index) {

            return (
                <div className={index == 0 ? "carousel-item active" : "carousel-item"} key={index}>
                    <img className=" carousel-img property-display-img" src={item} width="900" height="400" alt="property-image" />
                </div>
            )
        });

        let carousalIndicator = this.state.photos.map(function (item, index) {

            return (                
                    <li data-target="#myCarousel" data-slide-to={index} className={index == 0 ? "active" : ""} key={index}></li>     
            )
        });

  	return(
<div class="row rowy">
	<div class="col-md-8 bordering shadowingcontainertraveller">
	 <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    {carousalIndicator}
                                </ul>
                                <div className="carousel-inner">
                                    {carousalBlock}
                                </div>
                                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
      </div>
	{/*<img class="imagey" src="http://www.sjsu.edu/sjsuhome/pics/tower-hall.jpg" /> */}
		<hr />
		<div class="item itemy">
		<i class="home icon"> <p class="boldy">Type {this.state.PropertyType}</p></i>&nbsp;&nbsp;
		<i class="bed icon"> <p class="boldy">Bed {this.state.Bedrooms}</p></i>&nbsp;&nbsp;
		<i class="users icon"> <p class="boldy">Sleeps {this.state.People}</p></i>&nbsp;&nbsp;
		<i class="bath icon"><p class="boldy"> Bath {this.state.Bathroom}</p></i>&nbsp;&nbsp;
		<i class="moon icon"> <p class="boldy">MinStay {this.state.MinStay} </p></i>&nbsp;&nbsp;
		<div class="vspace">
		</div>

		</div>
		
		</div>
		<div class="col-md-4 shadowingcontainertraveller bordering booking">
				    <div class="contenty">	
				      <a class="header"><h1>{this.state.Headline}</h1></a>
				      <h3>Price : {this.state.Currency} {this.state.Total}</h3>
				      <h3> Dates Available </h3>
				      <label for="firstName">Start Date</label>
                     <input type="date" class="form-controly form-control form-control-lg roundy" id="startdate" placeholder="" value={this.state.startdate} required="" disabled />	
                     <label for="firstName">End Date</label>
                     <input type="date" class="form-controly form-control form-control-lg roundy" id="enddate" placeholder="" value={this.state.enddate} required=""  disabled/>	
                     <br />
					 <br />
					 <br />

<div class="centerbutton">
<button type="button" class="btn btn-primary btn-lg roundy" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Ask Manager a Question</button>
</div>
<br />
<br />
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
		<div class="form-group">
            <label for="recipient-name" class="col-form-label">Sender:</label>
            <input type="text" class="form-control" id="recipient-name" value={localStorage.getItem("usernamey")}/>
          </div>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient: Manager</label>
            <input type="text" class="form-control" id="recipient-name" value={localStorage.getItem("activekey")}/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text" onChange = {this.onMessageChange}></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={this.onSubmitMessage}>Send message</button>
      </div>
    </div>
  </div>
</div>

				     <button type="button" class="booknow btn btn-lg roundy" onClick = {this.onSubmit}>Book Now</button>
				     </div>
				  <br />
				  </div>
				  {Redirection_Value}
		</div>
		);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaceDescription);


/*

/*class PlaceDescription extends Component 
{
	 constructor(props) {
	    super(props);
	    this.state = {
	      Headline: '',
	      PropertyDescription: '',
	      PropertyType: '',
	      Bedrooms : '',
	      Accomodates : '',
	      Bathroom : '',
	      MinStay: '',
	      People: '',
	      PerNight: '',
	      AvailableStartDate: '',
	      AvailableEndDate: '',
	      Currency: '',
	      Redirecty : false,
	      placename: '',
	      startdate: 0,
	      enddate: 0,
	      adultlist: 0,
	      childlist: 0,
	      photos: [],
	      Total : 0
		}
		/*this.state = {
			photos: [],
			Total : 0
		}
	}

	componentDidMount()
	{
	var id = localStorage.getItem("activekey");
	//var id = 15
		 var url = 'http://localhost:4004/places/propertydescription/' + id
		    fetch(url, {
		      method: 'get',
		      credentials : 'include',
		    })
		    .then(response => response.json())
		    .then(places => {
		      this.props.onHeadlineChange(places[0].name)
		      this.props.onPropertyDescription(places[0].description)
		      this.props.onPropertyType(places[0].type)
		      this.props.onBedrooms(places[0].bed)
		      this.props.onBathroom(places[0].bath)
		      this.props.onMinStay(places[0].minstay)
		      let res1= places[0].maxadults;
		      let res2 = places[0].maxchild;
		      let res = res1+res2;
		      this.props.onPeople(res)
		      this.props.onPerNight(places[0].rate)
		      this.props.onAvailableStartDate(places[0].startdate)
		      this.props.onAvailableEndDate(places[0].enddate)
		      this.props.onCurrency(places[0].currencytype)
			  var one =  new Date(this.props.enddate);
			  var two =  new Date(this.props.startdate);
			  var timeDiff = Math.abs(one.getTime() - two.getTime());
	          var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	          var totalAmount = diffDays * places[0].rate;
	          this.setState({Total : totalAmount})
		  })

		fetch('http://localhost:4004/placefilters')
	    .then((response) => response.json())
	    .then((data) => {
	      console.log("HERE" + data.placename)
	      this.props.onPlaceChange(data.placename)
	      this.props.onAdultListChange(data.adultlist)
	      this.props.onChildListChange(data.childlist)
	      this.props.onStartDateChange(data.startdate)
	      this.props.onEndDateChange(data.enddate)
	      console.log("ADULTS " + data.adultlist)
	      console.log("CHILDREN " + data.childlist)
	 	 })

	     fetch('http://localhost:4004/getPropertyImg', {
		      method: 'post',
		      headers: {'Content-Type': 'application/json'},
		      credentials : 'include',
		      body : JSON.stringify({
		      	id : id
		      })
		    })
		    .then(response => response.json())
		    .then(data => {
		    	var imageArr = [];
		    	console.log("length is "+ data.results.length)
		    	for (let i = 0; i < data.results.length; i++) {
		    	let imagePreview = 'data:image/jpg;charset=utf-8;base64, ' + data.results[i];
                                imageArr.push(imagePreview);
                                const photoArr = this.state.photos.slice();
                                photoArr[i] = imagePreview;
                                this.setState({
                                    photos: photoArr
                                });
                                console.log('Photo State: ', this.state.photos);
                  }
		    })

	}

	onSubmit = () => {
		var id = localStorage.getItem("activekey");
		var name = localStorage.getItem("usernamey")
		var url= 'http://localhost:4004/book/property'
		fetch(url, {
      		method: 'post',
      		headers: {'Content-Type': 'application/json'},
      		body: JSON.stringify({
       			 property_id: id,
       			 username: name,
       			 startdate : this.props.startdate,
       			 enddate : this.props.enddate
      })
    })

   .then(response => {
      if(response.status === 400)
        {
          alert("This Property Cannot be booked")
        }
      else
        {
          response.json()
          .then(places => {
          this.props.onRedirecty(true)
           alert("Property Booked Successfully")
          })

        }
      })
	}
 
  render()
  {
  	let Redirection_Value = null;
  	let Error_Display = null;
  	if(cookie.load('cookie'))
  	{
	  	if(this.props.Redirecty === true)
	  	{
	  		Redirection_Value = (<Redirect to="/home" />)
	  	}
  	}
  	else
  	{
  		Redirection_Value = (<Redirect to="/login" />)
  	}

  	let carousalBlock = this.state.photos.map(function (item, index) {

            return (
                <div className={index == 0 ? "carousel-item active" : "carousel-item"} key={index}>
                    <img className=" carousel-img property-display-img" src={item} width="900" height="400" alt="property-image" />
                </div>
            )
        });

        let carousalIndicator = this.state.photos.map(function (item, index) {

            return (                
                    <li data-target="#myCarousel" data-slide-to={index} className={index == 0 ? "active" : ""} key={index}></li>     
            )
        });

  	return(
<div class="row rowy">
	<div class="col-md-8 bordering shadowingcontainertraveller">
	 <div id="myCarousel" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators">
                                    {carousalIndicator}
                                </ul>
                                <div className="carousel-inner">
                                    {carousalBlock}
                                </div>
                                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                </a>
                                <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                </a>
      </div>
	{/*<img class="imagey" src="http://www.sjsu.edu/sjsuhome/pics/tower-hall.jpg" /> }
		<hr />
		<div class="item itemy">
		<i class="home icon"> <p class="boldy">Type {this.props.PropertyType}</p></i>&nbsp;&nbsp;
		<i class="bed icon"> <p class="boldy">Bed {this.props.Bedrooms}</p></i>&nbsp;&nbsp;
		<i class="users icon"> <p class="boldy">Sleeps {this.props.People}</p></i>&nbsp;&nbsp;
		<i class="bath icon"><p class="boldy"> Bath {this.props.Bathroom}</p></i>&nbsp;&nbsp;
		<i class="moon icon"> <p class="boldy">MinStay {this.props.MinStay} </p></i>&nbsp;&nbsp;
		</div>
		
		</div>
		<div class="col-md-4 shadowingcontainertraveller bordering booking">
				    <div class="contenty">	
				      <a class="header"><h1>{this.props.Headline}</h1></a>
				      <h3>Price : {this.props.Currency} {this.props.Total}</h3>
				      <h3> Dates Available </h3>
				      <label for="firstName">Start Date</label>
                     <input type="date" class="form-controly form-control form-control-lg roundy" id="startdate" placeholder="" value={this.props.startdate} required="" disabled />	
                     <label for="firstName">End Date</label>
                     <input type="date" class="form-controly form-control form-control-lg roundy" id="enddate" placeholder="" value={this.props.enddate} required=""  disabled/>	
                     <br />
				     <button type="button" class="booknow btn-lg" onClick = {this.onSubmit}>Book Now</button>
				     </div>
				  <br />
				  </div>
				  {Redirection_Value}
		</div>
		);
  }
}

*/
