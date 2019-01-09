import React,{Component} from 'react';
import './OwnerAccount.css';
import { Button,
  Container,
  Divider,
  Dropdown,
  Header,
  Message,
  Segment } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css';
  import {Redirect} from 'react-router';
  import cookie from 'react-cookies';

class OwnerAccount extends Component {

   constructor(props) {
      super(props);
      this.state = {
        FirstName: '',
        LastName: '',
        PrimaryEmail: '',
        Contact: '',
        Gender: '',
        AboutMe: '',
        Languages: '',
        SchoolName: '',
        CompanyName: '',
        StreetAddress: '',
        City : '',
        State : '',
        Country: ''
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

  SubmitChanges = () => {
    var url = 'http://localhost:4004/editprofile/save/' + localStorage.getItem("usernamey")
    console.log("PUT URL " + url)
      fetch(url, {
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
    .then(user => {
      console.log("NAME" + user)
          this.props.loadUser(user);
         this.setState({Redirection_Value : true})
      })
  }

  componentWillMount() {
    console.log("PROPS VALUE IS " + this.props.value)
    var url = 'http://localhost:4004/user/account/' + localStorage.getItem("usernamey")
    console.log("URL IS " + url)
    fetch(url, {
      method: 'get',
      credentials : 'include',
    })
    .then(response =>  response.json())
    .then(user => {
      console.log(user);
      console.log(user[0].firstname);
      this.setState({FirstName: user[0].firstname})
      this.setState({LastName: user[0].lastname})
      this.setState({PrimaryEmail: user[0].email})
      this.setState({AboutMe : user[0].aboutme})
      this.setState({CompanyName: user[0].company})
      this.setState({SchoolName: user[0].school})
      this.setState({StreetAddress: user[0].address})
      this.setState({Country: user[0].country})
      this.setState({City: user[0].hometown})
      this.setState({State: user[0].state})
      this.setState({Gender: user[0].gender})
      this.setState({Languages: user[0].language})
      this.setState({Contact: user[0].contact})
      this.setState({Redirection_Value : true})
      })
  }

  /*

Profile Image, Name, Email, Phone Number, About Me,City, Country, Company, School, Hometown, Languages, Gender)
  */

  render ()
  {
    let Redirect_to_login = null;
    if(!cookie.load('cookieowner'))
    {
      Redirect_to_login = (<Redirect to="/owner/login" />)
    }
    return (
  <div class="accountinfo">
  {Redirect_to_login}
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
          <form class="needs-validation" novalidate="">
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="firstName">First name</label>
                <input type="text" class="form-control form-control-lg" id="firstName" placeholder="" value={this.state.FirstName} required="" disabled onChange={this.onFirstNameChange}/>
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="lastName">Last name</label>
                <input type="text" class="form-control form-control-lg" id="lastName" placeholder="" value={this.state.LastName} required="" disabled onChange={this.onLastNameChange}/>
                <div class="invalid-feedback">
                  Valid last name is required.
                </div>
              </div>
            </div>

            <div class="mb-3">
              <label for="email">Email <span class="text-muted"></span></label>
              <input type="email" class="form-control form-control-lg" id="email" placeholder="you@example.com" value={this.state.PrimaryEmail} disabled onChange={this.onPrimaryEmailChange}/>
              <div class="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>

            <div class="mb-3">
              <label for="address">About me</label>
              <textarea type="textarea" class="form-control form-control-lg" id="address" placeholder=""  value={this.state.AboutMe} onChange={this.onAboutMeChange} required="" />
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Company <span class="text-muted"></span></label>
              <input type="text" class="form-control form-control-lg" id="address2" placeholder=""  value={this.state.CompanyName} onChange={this.onCompanyNameChange}/>
            </div>

            <div class="mb-3">
              <label for="address2">School <span class="text-muted"></span></label>
              <input type="text" class="form-control form-control-lg" id="address2" placeholder=""  value={this.state.SchoolName} onChange={this.onSchoolNameChange}/>
            </div>


            <div class="mb-3">
              <label for="address2">Address <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control form-control-lg" id="address2" placeholder="" value={this.state.StreetAddress} onChange={this.onStreetAddressChange}/>
            </div>
            <div class="row">
               <div class="col-md-3 mb-3">
                <label for="zip">Hometown</label>
                <input type="text" class="form-control form-control-lg" id="zip" placeholder="" required="" value={this.state.City} onChange={this.onCityChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
                <div class="col-md-3 mb-3">
                <label for="zip">Language</label>
                <input type="text" class="form-control form-control-lg" id="zip" placeholder="" required="" value={this.state.Languages} onChange={this.onLanguageChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div> 
            
              <div class="col-md-3 mb-3">
                <label for="zip">Gender</label>
                <input type="text" class="form-control form-control-lg" id="zip" placeholder="" required="" value={this.state.Gender} onChange={this.onGenderChange} />
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
            <div class="row">
             <div class="col-md-3 mb-3">
                <label for="zip">Country</label>
                <input type="text" class="form-control form-control-lg" id="zip"  onChange={this.onCountryChange} value={this.state.Country} placeholder="" required="" />
                <div class="invalid-feedback">
                  Enter correct value
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">State</label>
                <input type="text" class="form-control form-control-lg" id="zip"  onChange={this.onStateChange} value={this.state.State} placeholder="" required="" />
                <div class="invalid-feedback">
                  Enter correct value
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Contact</label>
                <input type="text" class="form-control form-control-lg" id="zip" onChange={this.onContactChange} value={this.state.Contact} placeholder="" required="" />
                <div class="invalid-feedback">
                  Contact required.
                </div>
              </div>
            </div>
            <button class="bluebutton btn btn-lg btn-block whitefont"  onClick= {this.SubmitChanges} type="submit">Save Changes</button>
          </form>
          </section>
      </div>
      </div>
      
      </div>

    );
  }
}

export default OwnerAccount;