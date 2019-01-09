import React from 'react';
import OwnerPropertyPlaces from '../OwnerPropertyPlaces/OwnerPropertyPlaces';
// should connect to database and display latest 2 travel history
import './OwnerProperty.css'


const OwnerProperty = ({properties}) => {
  return (
     <div class="middle">
      <table class="tabledef">
      <tbody>
      {
        properties.map((property, i) => {
          return (
            <OwnerPropertyPlaces
               key={i}
              id={properties[i].id}
              name={properties[i].name}
              type={properties[i].type}
              location={properties[i].location}
              bed={properties[i].bed}
              bath={properties[i].bath}
              description={properties[i].description}
              startdate={properties[i].startdate}
              enddate={properties[i].enddate}
              rate={properties[i].rate}
              unit={properties[i].unit}
            />
          );
        })
      }
      </tbody>
      </table>
    </div>
  );
}

export default OwnerProperty;