import React,{Component} from 'react';
import './AddProperty.css';
import {Redirect} from 'react-router-dom';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropertyDetails from '../PropertyDetails/PropertyDetails';
import PropertyLocation from '../PropertyLocation/PropertyLocation';
import PropertyBooking from '../PropertyBooking/PropertyBooking';
import PropertyPhotos from '../PropertyPhotos/PropertyPhotos';
import PropertyPricing from '../PropertyPricing/PropertyPricing';
import axios from 'axios';

class AddProperty extends Component {

   constructor(props) {
      super(props);
      this.state = {
        dateTime: '',
        Country: '',
        StreetAddress: '',
        Suite: '',
        City : '',
        State : '',
        ZipCode : '',
        Headline: '',
        PropertyDescription: '',
        PropertyType: '',
        Bedrooms : 0,
        MaxAdult : 0,
        MaxChild : 0,
        Bathroom : 0,
        startdate: '',
        enddate: '',
        MinimumStay : 1,
        Currency : '',
        NightCharge : 0,
        isUploaded : false,
        showPhotos : false,
        photos : [],
        RedirecttoLocation: false,
        RedirecttoDetail: false,
        RedirecttoPhotos: false,
        RedirecttoPricing: false,
        RedirecttoBookingDetails : false,
        Redirection_Value : false
      }
      this.inputHandler = this.inputHandler.bind(this);
  }


  inputHandler = (event) => {
    //console.log("HERE in Handler")
    this.setState({[event.target.name] : [event.target.value]})
  }

  onDrop = (acceptedFiles, rejectedFiles) => {
   var photos = [...this.state.photos]
    photos.push(acceptedFiles);
    this.setState({
      photos: photos,
      isUploaded: true,
      showPhotos: true
    });
    console.log("photos", photos);
}

handleDeleteFile = (event, name) => {
    event.preventDefault();
    console.log("event.target.value", name);
    var fileName = name;
    var oldPhotos = [...this.state.photos];

    var newPhotos = [];
    for (let position = 0; position < oldPhotos.length; position++) {
      if (oldPhotos[position][0].name === fileName) {
        newPhotos = oldPhotos.splice(position, 1);
      }
    }
    console.log("newPhotos", newPhotos);

    {
      this.setState({
        photos: oldPhotos
      });
    }
  };

  onSubmitClicked = () => {
let file = this.state.photos;
      if (file.length > 0) {
        let filenames = "";
        filenames = this.uploadFiles(file);
        fetch('http://localhost:4004/postproperty', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          credentials : 'include',
          body: JSON.stringify({
           Country: this.state.Country,
            StreetAddress: this.state.StreetAddress,
            Suite: this.state.Suite,
            City : this.state.City,
            State : this.state.State,
            ZipCode : this.state.ZipCode,
            Headline: this.state.Headline,
            PropertyDescription: this.state.PropertyDescription,
            PropertyType: this.state.PropertyType,
            Bedrooms : this.state.Bedrooms,
            MaxAdult : this.state.MaxAdult,
            MaxChild : this.state.MaxChild,
            Bathroom : this.state.Bathroom,
            startdate: this.state.startdate,
            enddate: this.state.enddate,
            MinimumStay : this.state.MinimumStay,
            Currency : this.state.Currency,
            NightCharge : this.state.NightCharge,
            username : localStorage.getItem("ownery")
      })
    })
    .then(user => {
          window.alert("Property Posted Successfully by"  + localStorage.getItem("ownery"));
      //console.log("NAME" + user)
        //  this.props.loadUser(user);
       this.setState({Redirection_Value : true})
      })
  }
else
{
      window.alert("Uploading Photos is Mandatory");
}
//console.log(this.state)
  }


uploadFiles = files => {
    const uploadFiles = new FormData();
    var filenames = "";
    for (let index = 0; index < files.length; index++) {
      if (index === files.length - 1) {
        filenames = filenames.concat(files[index][0].name);
      } else {
        filenames = filenames.concat(files[index][0].name + ",");
      }
      uploadFiles.append("file", files[index][0]);
    }

    axios.post("http://localhost:4004/upload-files", uploadFiles).then(
      response => {
        console.log(response.data.message);
      },
      error => {
        console.log(error);
      }
    );

    return filenames;
  };


  onClickRedirecttoLocation = () => {
    console.log("CLICKED")
    this.setState({RedirecttoLocation : true })
    this.setState({RedirecttoDetails : false})
    this.setState({RedirecttoBookingDetails : false })
    this.setState({RedirecttoPricing : false })
    this.setState({RedirecttoPhotos : false })

  }

  onClickRedirecttoDetails = () => {
    this.setState({RedirecttoLocation : false })
    this.setState({RedirecttoDetails : true})
    this.setState({RedirecttoBookingDetails : false })
    this.setState({RedirecttoPricing : false })
    this.setState({RedirecttoPhotos : false })
  }

  onClickRedirecttoPhotos = () => {
    this.setState({RedirecttoLocation : false })
    this.setState({RedirecttoDetails : false})
    this.setState({RedirecttoBookingDetails : false })
    this.setState({RedirecttoPricing : false })
    this.setState({RedirecttoPhotos : true})
  }

  onClickRedirecttoPricing = () => {
    this.setState({RedirecttoLocation : false})
    this.setState({RedirecttoDetails : false})
    this.setState({RedirecttoBookingDetails : false })
    this.setState({RedirecttoPricing : true })
    this.setState({RedirecttoPhotos : false })
  }

  onClickRedirecttoBookingDetails = () => {
    this.setState({RedirecttoLocation : false})
    this.setState({RedirecttoDetails : false})
    this.setState({RedirecttoBookingDetails : true })
    this.setState({RedirecttoPricing : false })
    this.setState({RedirecttoPhotos : false })
  }

  componentDidMount() {
     fetch('http://localhost:4004/getmaxpropertyid')
      .then(
      console.log("Fetched Max Property"))
  }

  render ()
  {
    let Redirecty = null;
    let Redirect_to_home = null;
    if(this.state.Redirection_Value === true)
    {
      Redirect_to_home = (<Redirect to="/owner/home" />)
    }
    if(this.state.RedirecttoLocation === true)
    {
      console.log("Loading Location")
      Redirecty = (<PropertyLocation 
        Country = {this.state.Country}
        StreetAddress = {this.state.StreetAddress}
        Suite = {this.state.Suite}
        City  = {this.state.City}
        State = {this.state.State}
        ZipCode = {this.state.ZipCode}
        Change = {this.inputHandler}
        />)
      //Redirecty = (<Redirect to="/addproperty/location" />)
    }
    if(this.state.RedirecttoDetails === true)
    {
      Redirecty = (<PropertyDetails 
        Headline = {this.state.Headline} 
        PropertyDescription = {this.state.PropertyDescription}
        PropertyType = {this.state.PropertyType}
        Bedrooms = {this.state.Bedrooms}
        MaxAdult = {this.state.MaxAdult}
        MaxChild = {this.state.MaxChild}
        Bathroom = {this.state.Bathroom}
        Change = {this.inputHandler}

        />)
    } 
     if(this.state.RedirecttoPhotos === true)
    {
      Redirecty = (<PropertyPhotos 
        photos = {this.state.photos}
        isUploaded = {this.state.isUploaded}
        showPhotos = {this.state.showPhotos}
        onDrop = {this.onDrop}
        handleDeleteFile = {this.handleDeleteFile}
        />)
    }
     if(this.state.RedirecttoBookingDetails === true)
    {
      Redirecty = (<PropertyBooking 
        startdate = {this.state.startdate}
        enddate = {this.state.enddate}
        Change = {this.inputHandler}
        />)
    }
     if(this.state.RedirecttoPricing === true)
    {
      Redirecty = (<PropertyPricing 
        MinimumStay = {this.state.MinimumStay}
        Currency = {this.state.Currency}
        NightCharge  =  {this.state.NightCharge}
        Change = {this.inputHandler}
        onSubmitClicked = {this.onSubmitClicked}
        />)
    }
    return (
      <div>
      {Redirect_to_home}
      <div class ="addtexttocenter"> 
      Welcome back! Add Property now
      </div>
      <div class="row">
      <div class="lefty col-2">
      <Button size="large" onClick = {this.onClickRedirecttoLocation} >
        Location
      </Button>
      <br />
      <br />
      <Button size="large" onClick = {this.onClickRedirecttoDetails} >
        Details
      </Button>
      <br />
      <br />
      <Button size="large" onClick = {this.onClickRedirecttoBookingDetails} >
        Booking Details
      </Button>
      <br />
      <br />
      <Button size="large"  onClick =  {this.onClickRedirecttoPhotos} >
        Photos
      </Button>
      <br />
      <br />
      <Button size="large" onClick = {this.onClickRedirecttoPricing} >
        Pricing
      </Button>
      </div>
      <div class="right col-8">
      {Redirecty}
      </div>
      </div>
      </div>
    );
  }

}

export default AddProperty;

/*


import React,{Component} from 'react';
import './AddProperty.css';
import {Redirect} from 'react-router-dom';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import CircularProgress from '@material-ui/core/CircularProgress';
import PropertyDetails from '../PropertyDetails/PropertyDetails';
import PropertyLocation from '../PropertyLocation/PropertyLocation';
import PropertyBooking from '../PropertyBooking/PropertyBooking';
import PropertyPhotos from '../PropertyPhotos/PropertyPhotos';
import PropertyPricing from '../PropertyPricing/PropertyPricing';

class AddProperty extends Component {

   constructor(props) {
      super(props);
      this.state = {
       dateTime: null,
        Country: '',
        StreetAddress: '',
        Suite: '',
        City : '',
        State : '',
        ZipCode : '',
        RedirecttoLocation: false,
        RedirecttoDetail: false,
        RedirecttoPhotos: false,
        RedirecttoPricing: false,
        RedirecttoBookingDetails : false
      }
  }


  onClickRedirecttoLocation = () => {
    console.log("CLICKED")
    this.setState({RedirecttoLocation : true })
    this.setState({RedirecttoDetails : false})
    this.setState({RedirecttoBookingDetails : false })
    this.setState({RedirecttoPricing : false })
    this.setState({RedirecttoPhotos : false })

  }

  onClickRedirecttoDetails = () => {
    this.setState({RedirecttoLocation : false })
    this.setState({RedirecttoDetails : true})
    this.setState({RedirecttoBookingDetails : false })
    this.setState({RedirecttoPricing : false })
    this.setState({RedirecttoPhotos : false })
  }

  onClickRedirecttoPhotos = () => {
    this.setState({RedirecttoLocation : false })
    this.setState({RedirecttoDetails : false})
    this.setState({RedirecttoBookingDetails : false })
    this.setState({RedirecttoPricing : false })
    this.setState({RedirecttoPhotos : true})
  }

  onClickRedirecttoPricing = () => {
    this.setState({RedirecttoLocation : false})
    this.setState({RedirecttoDetails : false})
    this.setState({RedirecttoBookingDetails : false })
    this.setState({RedirecttoPricing : true })
    this.setState({RedirecttoPhotos : false })
  }

  onClickRedirecttoBookingDetails = () => {
    this.setState({RedirecttoLocation : false})
    this.setState({RedirecttoDetails : false})
    this.setState({RedirecttoBookingDetails : true })
    this.setState({RedirecttoPricing : false })
    this.setState({RedirecttoPhotos : false })
  }

  componentDidMount() {
   
  }

  render ()
  {
    let Redirecty = null;
    if(this.state.RedirecttoLocation === true)
    {
      console.log("Loading Location")
      Redirecty = (<PropertyLocation />)
      //Redirecty = (<Redirect to="/addproperty/location" />)
    }
    if(this.state.RedirecttoDetails === true)
    {
      Redirecty = (<PropertyDetails />)
    } 
     if(this.state.RedirecttoPhotos === true)
    {
      Redirecty = (<PropertyPhotos />)
    }
     if(this.state.RedirecttoBookingDetails === true)
    {
      Redirecty = (<PropertyBooking />)
    }
     if(this.state.RedirecttoPricing === true)
    {
      Redirecty = (<PropertyPricing />)
    }
    return (
      <div>
      <div class ="addtexttocenter"> 
      Welcome back! Add Property now
      </div>
      <div class="row">
      <div class="lefty col-2">
      <Button size="large" onClick = {this.onClickRedirecttoLocation} data-target="#Location">
        Location
      </Button>
      <br />
      <br />
      <Button size="large" onClick = {this.onClickRedirecttoDetails} data-target="#Details">
        Details
      </Button>
      <br />
      <br />
      <Button size="large" onClick = {this.onClickRedirecttoBookingDetails} data-target="#Booking">
        Booking Details
      </Button>
      <br />
      <br />
      <Button size="large"  onClick =  {this.onClickRedirecttoPhotos} data-target="#Photos">
        Photos
      </Button>
      <br />
      <br />
      <Button size="large" onClick = {this.onClickRedirecttoPricing} data-target="#Pricing">
        Pricing
      </Button>
      </div>
      <div class="right col-8">
      {Redirecty}
      </div>
      </div>
      </div>
    );
  }

}

export default AddProperty;


*/