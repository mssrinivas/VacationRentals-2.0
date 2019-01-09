import {CHANGE_HEADLINE, CHANGE_DESCRIPTION, CHANGE_PROPERTY_TYPE, CHANGE_BEDROOM, CHANGE_ACCOMODATES, CHANGE_BATHROOMS, CHANGE_MINSTAY, CHANGE_PEOPLE,
    CHANGE_PER_NIGHT, CHANGE_PLACENAME, CHANGE_STARTDATE, CHANGE_ENDDATE, CHANGE_ADULTLIST, CHANGE_CHILDLIST, 
    CHANGE_CURRENCY,  CHANGE_REDIRECT, CHANGE_AVAILABLE_STARTDATE, CHANGE_AVAILABLE_ENDDATE } from '../constants/constants.js'


    export const PlaceDescription = (text) => {
      console.log("here in CHANGE_HEADLINE "+ text)
      return {
      type : CHANGE_HEADLINE,
      payload : text
      }}
   /* export const setHeadName = (text) => {
        console.log("here in CHANGE_HEADLINE "+ text)
        return {
        type : CHANGE_HEADLINE,
        payload : text
        }}
    
    export const setDescription = (text) => {
        console.log("here in CHANGE_DESCRIPTION "+ text)
        return {
        type : CHANGE_DESCRIPTION,
        payload : text
        }}
    
    export const setPropertyType = (value) => {
      console.log("here in CHANGE_PROPERTY_TYPE "+ value)
      return {
      type : CHANGE_PROPERTY_TYPE,
      payload : value
      }}
    
    export const setBedRooms = (value) => {
      console.log("here in CHANGE_BEDROOM  - "+ value)
      return {
      type : CHANGE_BEDROOM,
      payload : value
      }}
    
    export const setPeople = (text) => {
      console.log("here in CHANGE_PEOPLE - "+ text)
      return {
      type : CHANGE_PEOPLE,
      payload : text
      }}
    
    export const setBathRooms = (value) => {
        console.log("here in  CHANGE_BATHROOMS - " + value)
        return {
        type : CHANGE_BATHROOMS,
        payload : value
      }}
    
    export const setMinStay = (text) => {
        console.log("here in CHANGE_MINSTAY  - "+ text)
        return {
        type : CHANGE_MINSTAY,
        payload : text
      }}
    
    export const setPerNight = (text) => {
        console.log("here in CHANGE_PER_NIGHT  - "+ text)
        return {
        type : CHANGE_PER_NIGHT,
        payload : text
     }}
    
    export const setPlaceField = (text) => {
        console.log("here in CHANGE_PLACENAME "+ text)
        return {
        type : CHANGE_PLACENAME,
        payload : text
        }}
    
    export const setStartDateField = (text) => {
        console.log("here in CHANGE_STARTDATE "+ text)
        return {
        type : CHANGE_STARTDATE,
        payload : text
        }}
    
    export const setEndDateField = (value) => {
      console.log("here in CHANGE_ENDDATE "+ value)
      return {
      type : CHANGE_ENDDATE,
      payload : value
      }}
    
    export const setAdultListField = (value) => {
      console.log("here in CHANGE_ADULTLIST  - "+ value)
      return {
      type : CHANGE_ADULTLIST,
      payload : value
      }}
    
    export const setChildListField = (text) => {
      console.log("here in CHANGE_CHILDLIST  - "+ text)
      return {
      type : CHANGE_CHILDLIST,
      payload : text
      }}

    export const setCurrency = (text) => {
        console.log("here in CHANGE_CURRENCY  - "+ text)
        return {
        type : CHANGE_CURRENCY,
        payload : text
        }}
    
    export const setRedirect = (text) => {
      console.log("here in CHANGE_REDIRECT  - "+ text)
      return {
      type : CHANGE_REDIRECT,
      payload : text
      }}

    export const setAvailableStartDate = (text) => {
        console.log("here in CHANGE_AVAILABLE_STARTDATE  - "+ text)
        return {
        type : CHANGE_AVAILABLE_STARTDATE,
        payload : text
        }}

    export const setAvailableEndDate = (text) => {
        console.log("here in CHANGE_AVAILABLE_ENDDATE  - "+ text)
        return {
        type : CHANGE_AVAILABLE_ENDDATE,
        payload : text
        }}
        
    */