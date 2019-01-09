import React from 'react';
import Places from '../Places/Places';
// should connect to database and display latest 2 travel history

const FetchPlaces = (props) => {
  console.log("props is " +  JSON.stringify(props.enddate))
  return (
     <div>
      {
        props.trips.map((trip, i) => {
          return (
            <Places
              key={trip.id}
              id={trip.id}
              name={trip.name}
              type={trip.type}
              location={trip.location}
              bed={trip.bed}
              bath={trip.bath}
              description={trip.description}
              startdate={trip.startdate}
              enddate={trip.enddate}
              clicked={props.clicked}
              />
          );
        })
      }
    </div>
  );
}

export default FetchPlaces;