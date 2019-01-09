import React,{Component} from 'react';
import './TravelerAccount.css';
import { Button,
  Container,
  Divider,
  Dropdown,
  Header,
  Message,
  Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import {connect} from 'react-redux'
import * as Actions from '../../actions/traveler_profile.js'
import serializeForm from 'form-serialize'
  
  const mapStateToProps = (state) => {
    console.log("here",state)
   return {
    Traveler : state.TRAVELER
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      onSubmitUpdate : (event) => {
        event.preventDefault();
        const values = serializeForm(event.target, { hash: true })
        console.log(values)
       var UserProfile = { FirstName: values.firstname , LastName : values.lastname , PrimaryEmail : values.email, Contact : values.contact ,Gender: values.gender, AboutMe : values.aboutme,  Languages : values.language, SchoolName : values.school, CompanyName : values.company ,StreetAddress : values.street, City : values.city, State:values.state, Country: values.country }
       console.log("OBJECT IS " + JSON.stringify(UserProfile))
       dispatch(Actions.UpdateUserInformation(UserProfile))
          }
        }
  }
  
class TravelerAccount extends Component {

	 constructor(props) {
	    super(props);
	    this.state = {
	      FirstName: this.props.Traveler.FirstName,
	      LastName: this.props.Traveler.LastName,
	      PrimaryEmail: this.props.Traveler.PrimaryEmail,
        Contact: this.props.Traveler.Contact,
        Gender: this.props.Traveler.Gender,
        AboutMe: this.props.Traveler.AboutMe,
        Languages: this.props.Traveler.Languages,
        SchoolName: this.props.Traveler.SchoolName,
	      CompanyName: this.props.Traveler.CompanyName,
	      StreetAddress: this.props.Traveler.StreetAddress,
	      City : this.props.Traveler.City,
	      State : this.props.Traveler.State,
	      Country: this.props.Traveler.Country
	    }
  }

  	onFirstNameChange = (event) => {
  		this.setState({FirstName: event.target.value})
  	}

  	onLastNameChange = (event) => {
  		this.setState({LastName: event.target.value})
  	}

  	onPrimaryEmailChange = (event) => {
  		this.setState({PrimaryEmail: event.target.value})
  	}

 	onCompanyNameChange = (event) => {
 		this.setState({CompanyName: event.target.value})
 	}

  onSchoolNameChange = (event) => {
    this.setState({SchoolName: event.target.value})
  }

    onCountryChange = (event) => {
    this.setState({Country: event.target.value})
  }

  onStreetAddressChange = (event) => {
    this.setState({StreetAddress: event.target.value})
  }

  onCityChange = (event) => {
    this.setState({City: event.target.value})
  }
    onStateChange = (event) => {
    this.setState({State: event.target.value})
  }
   
   onGenderChange = (event) => {
    this.setState({Gender: event.target.value})
  }

  onLanguageChange = (event) => {
    this.setState({Languages: event.target.value})
  }

  onContactChange = (event) => {
    this.setState({Contact: event.target.value})
  }

  onAboutMeChange = (event) => {
    this.setState({AboutMe: event.target.value})
  }

  onSubmitUpdate = (event) => {
    var url = 'http://localhost:4004/editprofile/save/' + localStorage.getItem("usernamey") 
    const request = async () => {
      await this.props.onSubmitUpdate(event)
      await fetch(url, {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      credentials : 'include',
      body: JSON.stringify({
        firstname: this.state.FirstName,
        lastname: this.state.LastName,
        aboutme: this.state.AboutMe,
        company: this.state.CompanyName,
        school: this.state.SchoolName,
        hometown: this.state.City,
        language : this.state.Languages,
        gender: this.state.Gender, 
        state: this.state.State,
        country: this.state.Country,
        contact: this.state.Contact,
        address: this.state.StreetAddress
      })
    })
    .then(response =>  response.json())
    }
    request();
  }

    componentDidMount() {
    console.log("PROPS VALUE IS " + this.props.value)
    var url = 'http://localhost:4004/user/account/' + localStorage.getItem("usernamey")
    console.log("URL IS " + url)
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response =>  response.json())
    .then(user => {
     // console.log("User Info" ,user.Users.username);
    //  console.log("First name is " + user.Users.firstname);
      if(user.Users.firstname !== null && user.Users.firstname !== undefined)
      this.setState({FirstName: user.Users.firstname})
      if( user.Users.lastname!== null && user.Users.lastname!== undefined)
      this.setState({LastName: user.Users.lastname})
      if(user.Users.email !== null && user.Users.email !== undefined)
      this.setState({PrimaryEmail: user.Users.email})
      if(user.Users.aboutme !== null && user.Users.aboutme !== undefined)
      this.setState({AboutMe : user.Users.aboutme})
      if(user.Users.company !== null && user.Users.company !== undefined)
      this.setState({CompanyName: user.Users.company})
      if(user.Users.school !== null && user.Users.school !== undefined)
      this.setState({SchoolName: user.Users.school})
      if(user.Users.address!== null && user.Users.address!== undefined)
      this.setState({StreetAddress: user.Users.address})
      if(user.Users.country !== null && user.Users.country !== undefined)
      this.setState({Country: user.Users.country})
      if(user.Users.hometown !== null && user.Users.hometown !== undefined)
      this.setState({City: user.Users.hometown})
      if(user.Users.state !== null && user.Users.state !== undefined)
      this.setState({State: user.Users.state})
      if(user.Users.gender !== null && user.Users.gender !== undefined)
      this.setState({Gender: user.Users.gender})
      if(user.Users.language !== null && user.Users.language !== undefined)
      this.setState({Languages: user.Users.language})
      if(user.Users.contact!== null && user.Users.contact!== undefined)
      this.setState({Contact: user.Users.contact})
      })
  }

	//componentWillMount() {
  /*  console.log("PROPS VALUE IS " + this.props.value)
    var url = 'http://localhost:4004/user/account/' + localStorage.getItem("usernamey")
    console.log("URL IS " + url)
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response =>  response.json())
    .then(user => {
      console.log(user);
      console.log("First name is " + user[0].firstname);
      if(user.firstname !== null && user.firstname !== undefined)
      this.setState({FirstName: user[0].firstname})
      if( user.lastname!== null && user.lastname!== undefined)
      this.setState({LastName: user[0].lastname})
      if(user.email !== null && user.email !== undefined)
      this.setState({PrimaryEmail: user[0].email})
      if(user.aboutme !== null && user.aboutme !== undefined)
      this.setState({AboutMe : user[0].aboutme})
      if(user.company !== null && user.company !== undefined)
      this.setState({CompanyName: user[0].company})
      if(user.school !== null && user.school !== undefined)
      this.setState({SchoolName: user[0].school})
      if(user.address!== null && user.address!== undefined)
      this.setState({StreetAddress: user[0].address})
      if(user.country !== null && user.country !== undefined)
      this.setState({Country: user[0].country})
      if(user.hometown !== null && user.hometown !== undefined)
      this.setState({City: user[0].hometown})
      if(user.state !== null && user.state !== undefined)
      this.setState({State: user[0].state})
      if(user.gender !== null && user.gender !== undefined)
      this.setState({Gender: user[0].gender})
      if(user.language !== null && user.language !== undefined)
      this.setState({Languages: user[0].language})
      if(user.contact!== null && user.contact!== undefined)
      this.setState({Contact: user[0].contact})
      })
	}*/

  /*

Profile Image, Name, Email, Phone Number, About Me,City, Country, Company, School, Hometown, Languages, Gender)
  */

	render ()
	{
		return (
  <div class="accountinfo">
<div class="container shadowingcontainertraveller">
  <h1 class="page-header">Profile information</h1>
  <div class="row">
    <div class="col-md-12 col-sm-6 col-xs-12">
      <div class="text-center">
        <img src="https://media.licdn.com/dms/image/C5103AQHzkRC2Vk8gwg/profile-displayphoto-shrink_200_200/0?e=1542844800&v=beta&t=e_vwRp7Hpmpt_BXdrZZI2lwXdWYx1KU1ROyOx8B52CE" class="avatar img-circle img-thumbnail" alt="avatar" />
        <h6>Upload a different photo...</h6>
        <input type="file" class="text-center center-block well well-sm" />
      </div>
    </div>
    </div>
      <div class="col-md-12 col-sm-8 col-xs-12 forum">
          <h4 class="mb-3"></h4>
          <section className="form-elegant" >
          <form onSubmit={this.onSubmitUpdate} class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control form-control-lg" name="firstname" placeholder="" value={this.state.FirstName} required="" disabled onChange={this.onFirstNameChange}/>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control form-control-lg" name="lastname" placeholder="" value={this.state.LastName} required="" disabled onChange={this.onLastNameChange}/>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email <span class="text-muted"></span></label>
              <input type="email" class="form-control form-control-lg" name="email" placeholder="you@example.com" value={this.state.PrimaryEmail}  disabled onChange={this.onPrimaryEmailChange}/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
            <div class="mb-3">
              <label for="address">About me</label>
              <textarea type="textarea" class="form-control form-control-lg" name="aboutme" placeholder=""  value={this.state.AboutMe} onChange={this.onAboutMeChange} required="" />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Company <span class="text-muted"></span></label>
              <input type="text" class="form-control form-control-lg" name="company" placeholder=""  value={this.state.CompanyName} onChange={this.onCompanyNameChange}/>
            </div>

            <div class="mb-3">
              <label for="address2">School <span class="text-muted"></span></label>
              <input type="text" class="form-control form-control-lg" name="school" placeholder=""  value={this.state.SchoolName} onChange={this.onSchoolNameChange}/>
            </div>


            <div class="mb-3">
              <label for="address2">Address <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control form-control-lg" name="street" placeholder="" value={this.state.StreetAddress} onChange={this.onStreetAddressChange}/>
            </div>
            <div class="row">
               <div class="col-md-3 mb-3">
                <label for="zip">Hometown</label>
                <input type="text" class="form-control form-control-lg" name="city" placeholder="" required="" value={this.state.City} onChange={this.onCityChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
                <div class="col-md-3 mb-3">
                <label for="zip">Language</label>
                <input type="text" class="form-control form-control-lg" name="language" placeholder="" required="" value={this.state.Languages} onChange={this.onLanguageChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div> 
            
              <div class="col-md-3 mb-3">
                <label for="zip">Gender</label>
                <input type="text" class="form-control form-control-lg" name="gender" placeholder="" required="" value={this.state.Gender} onChange={this.onGenderChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <div class="row">
             <div class="col-md-3 mb-3">
                <label for="zip">Country</label>
                <input type="text" class="form-control form-control-lg" name="country"  onChange={this.onCountryChange} value={this.state.Country} placeholder="" required="" />
                <div class="invalid-feedback">
                  Enter correct value
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">State</label>
                <input type="text" class="form-control form-control-lg" name="state"  onChange={this.onStateChange} value={this.state.State} placeholder="" required="" />
                <div class="invalid-feedback">
                  Enter correct value
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Contact</label>
                <input type="text" class="form-control form-control-lg" name="contact" onChange={this.onContactChange} value={this.state.Contact} placeholder="" required="" />
                <div class="invalid-feedback">
                  Contact required.
                </div>
              </div>
            </div>
            <input type="submit" class="bluebutton btn btn-lg btn-block whitefont"  type="submit" value="Save Changes"/>
          </form>
          </section>
      </div>
      </div>  
      </div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TravelerAccount);