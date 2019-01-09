import {CHANGE_PLACENAME, CHANGE_STARTDATE, SHOW_ERROR, DISABLE_ERROR, CHANGE_ENDDATE, CHANGE_ADULTLIST, CHANGE_CHILDLIST, UPDATE_TRIPS, SET_REDIRECT, NO_PLACES_TO_SHOW} from '../constants/constants.js'


export const SearchPlaces = (object) => {
  console.log("here in Search PLaces - " + object)
    return {
    type : 'SEARCH_PLACES',
    payload : object
  }
}
  export const updateTrips = (value) => {
    console.log("here in  Update Trips - " + value)
    return {
    type : UPDATE_TRIPS,
    payload : value
  }}

  export const setErrorsasTrue = (text) => {
    console.log("here in SHOW ERROR  - "+ text)
    return {
    type : SHOW_ERROR,
    payload : text
  }}

  export const setErrorsasFalse = (text) => {
    console.log("here in DISABLE_ERROR  - "+ text)
    return {
    type : DISABLE_ERROR,
    payload : text
 }}

 export const setRedirectValue = (value) => {
  console.log("here in DISABLE_ERROR  - "+ value)
  return {
  type : SET_REDIRECT,
  payload : value
}}

export const setNoPlacestoShow = (value) => {
  console.log("here in DISABLE_ERROR  - "+ value)
  return {
  type : NO_PLACES_TO_SHOW,
  payload : value
}
}

export const updateLatestTrips = (value) => {
	console.log("here in placefield "+ value)
	return {
	type : 'UPDATE_LATEST_TRIPS',
	payload : value
	}}
