import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './PropertyBooking.css'
import {Redirect} from 'react-router-dom';
import { Container, Row, Col, Button, Fa, Card, CardBody, ModalFooter } from 'mdbreact';

class PropertyBooking extends React.Component {
  constructor(props) {
    super(props);
  }

  render()
  {
    return (
      <div class="shadowingcontainer">
      <Container >
       <h1>Add Start and End Dates of the availability</h1>
        <section className="form-elegant">
          <Row >
            <Col md="8" className="mx-auto">
              <Card>
                <CardBody className="mx-4">
              <div class="form-group">
                <label>Start Date</label>
                <input type="date" class="form-control form-control-lg" name="startdate" id="exampleInputCountry" onChange = {this.props.Change} value = {this.props.startdate} />
              </div>
              <div class="form-group">
               <label>End Date</label>
                <input type="date" class="form-control form-control-lg" name="enddate" id="exampleInputStreet" onChange = {this.props.Change}  value = {this.props.enddate} />
              </div>
                </CardBody>     
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
      </div>
    )
  }
}
export default PropertyBooking;