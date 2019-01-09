import React from 'react';
import TravelHistory from './TravelHistory.js'

class TripsBoard extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      latesttrips: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4001/tripsboard')
    .then((response) => response.json())
    .then((responseJson) => {
    this.setState({latesttrips : responseJson[0].placename);
  })
  }
  render() {
    const TripHistory = latesttrips;
    return <TravelHistory trips={TripHistory}/>;
  }
}

export default TripsBoard;