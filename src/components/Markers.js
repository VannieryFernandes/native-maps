import React from "react";
import { Marker } from 'react-native-maps';


const Markers = props => {
    const users = props.users
    const locations = []

    for (let i = 0; i < users.length; i++) {
        var lat =Number(users[i].address.geo.lat) //someStr.replace(/['"]+/g, '')
        var lng =Number(users[i].address.geo.lng)
        
        locations.push({latitude:lat,longitude:lng,name:users[i].name,email:users[i].email})
        // console.log(locations[i])
    }
    

    return (
        
        locations.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{latitude:marker.latitude,longitude:marker.longitude}}
              title={marker.name}
              description={marker.email}
              image={marker.image}
            />
          ))
    )

}
export default Markers;