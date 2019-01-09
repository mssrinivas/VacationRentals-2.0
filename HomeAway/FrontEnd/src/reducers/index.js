import { combineReducers } from "redux";
import loginSignup from "./login_signup.js";
import placefinder from "./place_finder.js";
import searchPlaces from "./search_places.js";
import travelerprofile from "./traveler_profile.js";

const rootReducer = combineReducers({
LOGIN : loginSignup,
PLACES : placefinder,
SEARCH : searchPlaces,
TRAVELER : travelerprofile
});

export default rootReducer;
