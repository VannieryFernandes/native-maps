
import React, { useState, useEffect } from 'react';
import MapView from 'react-native-maps';
import { View,StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import {getLocationsAPI} from "../store/actions/locationAction"
import Geolocation from 'react-native-geolocation-service';
import Markers from '../components/Markers'
import { applyMiddleware } from 'redux';

const Map = () => {
    const dispatch = useDispatch();
    const [longitude,setLongitude] = useState(-34.797428);
    const [latitude,setLatitude] = useState(-7.149862);
    const [latitudeDelta,setLatitudeDelta] = useState(0.0922);
    const [longitudeDelta,setLongitudeDelta] = useState(0.0421);


    Geolocation.getCurrentPosition((position)=>{
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
        }
    )
    
    useEffect(() => {
        
        dispatch(getLocationsAPI());

    }, [dispatch]);


    const getLocations = useSelector(state => state.getLocations);

    return(
        <View style={styles.container}>
            <MapView style={styles.maps}
                region={{
                latitude: latitude,
                longitude: longitude,
                latitudeDelta: latitudeDelta,
                longitudeDelta: longitudeDelta,
                }}
                showsUserLocation
                loadingEnabled
                showsMyLocationButton={true}
                
            >
                {getLocations.getLocations &&(
            <Markers users={getLocations.getLocations}/>
            )
            }
            </MapView>
            

            
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        display: "flex",
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width
    },
    maps:{
       flex:1,
       marginTop:5
    }
})

export default Map;