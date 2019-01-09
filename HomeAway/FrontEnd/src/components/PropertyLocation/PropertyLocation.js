import React,{Component} from 'react';
import './PropertyLocation.css';
import { Container, Row, Col, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';
/*import { Button,
  Container,
  Divider,
  Dropdown,
  Header,
  Message,
  Segment } from 'semantic-ui-react'
  import 'semantic-ui-css/semantic.min.css'; */

import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog'
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import { withStyles } from '@material-ui/core/styles';
import {Redirect} from 'react-router'
import CircularProgress from '@material-ui/core/CircularProgress';
import PropertyDetails from '../PropertyDetails/PropertyDetails';
import AddProperty from '../AddProperty/AddProperty';

class PropertyLocation extends Component {

	 constructor(props) {
	    super(props);
  }

/*
    onCountryChange = (event) => {
    this.setState({Country: event.target.value})
  }

  onStreetAddressChange = (event) => {
    this.setState({StreetAddress: event.target.value})
  }
    onSuiteChange = (event) => {
    this.setState({Suite: event.target.value})
  }

  onCityChange = (event) => {
    this.setState({City: event.target.value})
  }
    onStateChange = (event) => {
    this.setState({State: event.target.value})
  }

  onZipCodeChange = (event) => {
    this.setState({ZipCode: event.target.value})
  }

  onBackClick = () => {
  	this.setState({Redirection_Back : true})
  }

  onNextClick = () => {
  	this.setState({Redirection_Front: true})
  }
  */
	componentDidMount() {
	 
	}

	render ()
	{
	return (
	<div class="shadowingcontainer">
	<Container >
       <h1>Verify the location of your rental</h1>
        <section className="form-elegant">
          <Row >
            <Col md="8" className="mx-auto">
              <Card>
                <CardBody className="mx-4">
				      <div class="form-group">
						    <label>Country</label>
						    <input type="text" class="form-control form-control-lg" name="Country" id="exampleInputCountry" onChange = {this.props.Change} value = {this.props.Country} placeholder="Country" />
						  </div>
						  <div class="form-group">
						    <input type="text" class="form-control form-control-lg" name="StreetAddress" id="exampleInputStreet" onChange = {this.props.Change}  value = {this.props.StreetAddress} placeholder="Street Address" />
						  </div>
						  <div class="form-group">
						    <input type="text" class="form-control form-control-lg" name="Suite" id="exampleInputSuite" onChange = {this.props.Change}  value = {this.props.Suite} placeholder="Unit, Building, Street, Etc." />
						  </div>
						  <div class="form-group">
						    <label>City</label>
						    <input type="text" class="form-control form-control-lg" name="City" id="exampleInputCity" onChange = {this.props.Change}  value = {this.props.City} placeholder="ex: San Jose" />
						  </div>
						  <div class="form-group">
						    <label >State</label>
						    <input type="text" class="form-control form-control-lg" name="State" id="exampleInputState" onChange = {this.props.Change}  value = {this.props.State} placeholder="ex: California" />
						  </div>
						  <div class="form-group">
						    <input type="text" class="form-control form-control-lg" name="ZipCode" id="exampleInputZipCode" onChange = {this.props.Change}  value = {this.props.ZipCode} placeholder="Zip Code" />
						  </div>
						 
                </CardBody>     
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
 	</div>
		);
	}
}


export default PropertyLocation;

/*

<div class="modal fade" id="Details" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
				  <div class="modal-dialog modal-dialog-centered" role="document">
				    <div class="modal-content">
				      <div class="modal-header">
				        <h5 class="modal-title" id="exampleModalLongTitle">Add Property details</h5>
				      </div>
				      <div class="modal-body">
				     <div class="form-group">
			   			 <input type="text" class="form-control form-control-lg" id="exampleInputCountry" onChange = {this.onHeadlineChange} placeholder="Headline" />
			 		 </div>
			 		 <div class="form-group">
			    		<textarea name="comment" class="form-control form-control-lg" id="exampleInputStreet" onChange = {this.onPropertyDescriptionChange} placeholder="Property Description" />
			  		</div>
			  	<div class="form-group">
				    <div class="form-group floating-label not-empty" onChange= {this.onPropertyType}><label>Property type</label><div><select aria-label="Property type" name="propertyType" class="form-control FormSelect__select form-control-lg"><option value="apartment">Apartment</option><option value="barn">Barn</option><option value="bed &amp; breakfast">Bed &amp; Breakfast</option><option value="boat">Boat</option><option value="bungalow">Bungalow</option><option value="cabin">Cabin</option><option value="campground">Campground</option><option value="castle">Castle</option><option value="chalet">Chalet</option><option value="country house / chateau">Chateau / Country House</option><option value="condo">Condo</option><option value="corporate apartment">Corporate Apartment</option><option value="cottage">Cottage</option><option value="estate">Estate</option><option value="farmhouse">Farmhouse</option><option value="guest house/pension">Guest House</option><option value="hostel">Hostel</option><option value="hotel">Hotel</option><option value="hotel suites">Hotel Suites</option><option value="house">House</option><option value="house boat">House Boat</option><option value="lodge">Lodge</option><option value="Mill">Mill</option><option value="mobile home">Mobile Home</option><option value="Recreational Vehicle">Recreational Vehicle</option><option value="resort">Resort</option><option value="studio">Studio</option><option value="Tower">Tower</option><option value="townhome">Townhome</option><option value="villa">Villa</option><option value="yacht">Yacht</option></select><i aria-hidden="true" class="icon-chevron-down FormSelect__chevron"></i></div></div>
			   </div>
			  <div class="form-group">
				    <label for="exampleFormControlSelect1">Bedrooms</label>
				    <select class="form-control form-control-lg" id="exampleFormControlSelect1" onChange={this.onBedroomsChange}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				    </select>
			   </div>
			    <div class="form-group">
				    <label for="exampleFormControlSelect2">Accomodates</label>
				    <select class="form-control form-control-lg" id="exampleFormControlSelect2" onChange={this.onAccomodatesChange}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				    </select>
			   </div>
			    <div class="form-group">
				    <label for="exampleFormControlSelect3">Bathrooms</label>
				    <select class="form-control form-control-lg" id="exampleFormControlSelect3" onChange={this.onBathroomChange}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				    </select>
			  	 </div>
			  
				      <div class="modal-footer"> 
					  <button type="submit" class="btn btn-primary btn-lg mr-auto" onClick={this.onBackClick}>Back</button>
					  <button type="submit" class="btn btn-secondary btn-lg "  onClick={this.onNextClick}>Next</button>
				      </div>
				    </div>
				  </div>
				</div>
				</div>



<form role="form" class="stayright">
			  <div class="form-group">
			    <label>Country</label>
			    <input type="text" class="form-control" id="exampleInputCountry" onChange = {this.onCountryChange} placeholder="Country" />
			  </div>
			  <div class="form-group">
			    <input type="text" class="form-control" id="exampleInputStreet" onChange = {this.onStreetAddressChange} placeholder="Street Address" />
			  </div>
			  <div class="form-group">
			    <input type="text" class="form-control" id="exampleInputSuite" onChange = {this.onSuiteChange} placeholder="Unit, Building, Street, Etc." />
			  </div>
			  <div class="form-group">
			    <label>City</label>
			    <input type="text" class="form-control" id="exampleInputCity" onChange = {this.onCityChange} placeholder="ex: San Jose" />
			  </div>
			  <div class="form-group">
			    <label >State</label>
			    <input type="text" class="form-control" id="exampleInputState" onChange = {this.onStateChange} placeholder="ex: California" />
			  </div>
			  <div class="form-group">
			    <input type="text" class="form-control" id="exampleInputZipCode" onChange = {this.onZipCodeChange} placeholder="Zip Code" />
			  </div>
			  <div>
			  <button type="submit" class="btn btn-default" onClick={this.onNextClick}>Next</button>
			  <button type="submit" class="btn btn-default" onClick={this.onBackClick}>Back</button>
			  </div>
			</form>

*/