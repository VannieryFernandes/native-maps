import axios from "axios";
import * as actionsType from "../types";

import { fetchStart, fetchSuccess, fetchError } from "./utils/defaultMethods";

export const getLocationsAPI = () => dispatch => {
    // dispatch(fetchStart());
    dispatch(fetchStart(actionsType.GET_LOCATIONS_START));
    // let result = []
    axios.get("https://jsonplaceholder.typicode.com/users")
        // .get("https://9cbtyvxewf.execute-api.us-east-2.amazonaws.com/desv/uapp/v1/geolocations",Headers={"X-api-key":"18cIgqWftB5G4dAxpStOY7IafHD93rHi3E19sjok"})
        .then(res => {
            
            dispatch(fetchSuccess(actionsType.GET_LOCATIONS_SUCCESS, res.data));
        })
        .catch(error => {
            dispatch(fetchError(actionsType.GET_LOCATIONS_FAILS, error));
        });
};