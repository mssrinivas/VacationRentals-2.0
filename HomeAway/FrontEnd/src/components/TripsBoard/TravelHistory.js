import React from 'react';
import Places from '../Places/Places';
import './tripsboard.css'
import TripsBoardPlaces from './TripsBoardPlaces';
// should connect to database and display latest 2 travel history

const TravelHistory = ({trips}) => {
  return (
     <div class="middle">
      {
        trips.map((trip, i) => {
          return (
            <TripsBoardPlaces
              key={i}
              id={trips[i].id}
              name={trips[i].name}
              type={trips[i].type}
              location={trips[i].location}
              bed={trips[i].bed}
              bath={trips[i].bath}
              description={trips[i].description}
              startdate={trips[i].startdate}
              enddate={trips[i].enddate}
              unit={trips[i].unit}
              rate={trips[i].rate}
              />
          );
        })
      }
    </div>
  );
}

export default TravelHistory;