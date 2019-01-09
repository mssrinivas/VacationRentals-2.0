import React,{Component} from 'react';
import './PropertyDetails.css';
import { Container, Row, Col, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';

  import 'semantic-ui-css/semantic.min.css';

  import {Redirect} from 'react-router-dom';


class PropertyDetails extends Component {

	 constructor(props) {
	    super(props);  
  	 }

	render ()
	{
		return (
		<div class="shadowingcontainer padbot">
		<Container>
       <h1>Describe your Property</h1>
       <p>Start out with a descriptive headline and a detailed summary of your property.</p>
        <section className="form-elegant">
          <Row >
            <Col md="8" className="mx-auto">
              <Card>
                <CardBody className="mx-4">
			  <div class="form-group">
			    <input type="text" class="form-control form-control-lg" id="exampleInputCountry" name="Headline" value={this.props.Headline} onChange = {this.props.Change} placeholder="Headline" />
			  </div>
			  <div class="form-group">
			    <textarea name="comment" class="form-control form-control-lg" id="exampleInputStreet" name="PropertyDescription" value={this.props.PropertyDescription} onChange = {this.props.Change} placeholder="Property Description" />
			  </div>
			  <div class="form-group">
			    <input type="text" class="form-control form-control-lg" id="exampleInputSuite" name="PropertyType" value={this.props.PropertyType} onChange = {this.props.Change} placeholder="House Type" />
			  </div>
			  <div class="form-group">
				    <label for="exampleFormControlSelect1">Bedrooms</label>
				    <select class="form-control form-control-lg" id="exampleFormControlSelect1" name="Bedrooms" value={this.props.Bedrooms} onChange={this.props.Change}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				    </select>
			   </div>
			    <div class="form-group">
				    <label for="exampleFormControlSelect3">Bathrooms</label>
				    <select class="form-control form-control-lg" id="exampleFormControlSelect3" name="Bathroom" value={this.props.Bathroom} onChange={this.props.Change}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				    </select>
			   </div>
			   <div class="form-group">
				    <label for="exampleFormControlSelect3">Max Adults</label>
				    <select class="form-control form-control-lg" id="exampleFormControlSelect3" name="MaxAdult" value={this.props.MaxAdult} onChange={this.props.Change}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				      <option>6</option>
				      <option>7</option>
				      <option>8</option>
				      <option>9</option>
				      <option>10</option>
				    </select>
			   </div>
			   <div class="form-group">
				    <label for="exampleFormControlSelect3">Max Children</label>
				    <select class="form-control form-control-lg" id="exampleFormControlSelect3" name="MaxChild" value={this.props.MaxChild} onChange={this.props.Change}>
				      <option>1</option>
				      <option>2</option>
				      <option>3</option>
				      <option>4</option>
				      <option>5</option>
				      <option>6</option>
				      <option>7</option>
				      <option>8</option>
				      <option>9</option>
				      <option>10</option>
				    </select>
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

export default PropertyDetails;