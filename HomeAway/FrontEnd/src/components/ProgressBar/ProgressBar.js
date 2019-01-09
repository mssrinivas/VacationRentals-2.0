import React,{Component} from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {

	constructor(props) {
	    super(props);
	    this.state = {
	    };
	  }

	  componentDidMount() {
	 
	  }

	render ()
	{
  return (
  	<div id="left">
<div class="list-group">
	  <a href="#" class="list-group-item active">
	    Welcome
	  </a>
	  <a href="/addproperty/location" class="list-group-item list-group-item-action" onClick={this.onLocationClick} >Location</a>
	  <a href="/addproperty/details" class="list-group-item list-group-item-action" onClick={this.onDetailsClick} >Details</a>
	  <a href="/addproperty/booking" class="list-group-item list-group-item-action" onClick={this.onBookingClick} >Booking Options</a>
	  <a href="/addproperty/photos" class="list-group-item list-group-item-action" onClick={this.onPhotosClick} >Photos</a>
	  <a href="#" class="list-group-item list-group-item-action disabled" >Security</a>
	  <a href="#" class="list-group-item list-group-item-action disabled" >Payment</a>
	  <a href="/addproperty/pricing" class="list-group-item list-group-item-action" onClick={this.onPricingClick}>Pricing</a>
	</div>
</div>
)
}
}

export default ProgressBar;


