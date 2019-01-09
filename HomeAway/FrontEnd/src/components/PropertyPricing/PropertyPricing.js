import React from 'react';
import './PropertyPricing.css'
import {Redirect} from 'react-router-dom';
import { Container, Row, Col, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';

class PropertyPricing extends React.Component {
  constructor(props) {
    super(props);
  }
  render()
  {
    return (
      <div class="shadowingcontainer">
      <Container>
       <h1>How much do you want to charge?</h1>
       <p>We recommend starting with a low price to get a few bookings and earn some initial guest reviews. You can update your rates at any time.</p>
        <section className="form-elegant">
          <Row >
            <Col md="8" className="mx-auto">
              <Card>
                <CardBody className="mx-4">
                <div class="form-group">
                  <label for="exampleFormControlSelect2">Currency</label>
                    <select class="form-control form-control-lg" id="exampleFormControlSelect2" name="Currency" value={this.props.Currency} onChange = {this.props.Change} >
                      <option>Select a Currency</option>
                      <option>US Dollar</option>
                      <option>Australian Dollar</option>
                      <option>Indian Rupee</option>
                      <option>Japanese Yen</option>
                      <option>SIngaporean Dollar</option>
                    </select>
                    </div>
                    <label>Night Charge</label>
                      <div class="form-group">
                        <input type="text" class="form-control form-control-lg" id="exampleInputStreet" name="NightCharge" value={this.props.NightCharge}   onChange = {this.props.Change}  placeholder="1" />
                  </div>
                  <label>Minimum Stay</label>
                  <div class="form-group">
                        <input type="text" class="form-control form-control-lg" id="exampleInputSuite" name="MinimumStay" value={this.props.MinimumStay}  onChange = {this.props.Change} placeholder="in Nights" />
                  </div>  
                </CardBody> 
                 
              </Card>
              <br />
               <input type="submit" class="bluebutton btn btn-primary btn-lg roundy" id="examplebutton" onClick = {this.props.onSubmitClicked} placeholder="in Nights" />   
            </Col>
          </Row>
        </section>
      </Container>
      </div>
    )
  }
}
export default PropertyPricing;