import * as actionType from "../types";
import moment from "moment";

const initialState = {
    getLocations: null,
    lastUpdate: moment().format("DD/MM/YYYY HH:mm:ss"),
    errors: null,
    message: null,
    loading: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case actionType.GET_LOCATIONS_START:
            return {
                ...state,
                loading: true
            };
        case actionType.GET_LOCATIONS_SUCCESS:
            return {
                ...state,
                getLocations: action.payload,
                errors: null,
                loading: false
            };
        case actionType.GET_LOCATIONS_FAILS:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };

        default:
            return state;
    }
}
