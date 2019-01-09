import {CHANGE_FIRSTNAME, CHANGE_LASTNAME, CHANGE_EMAIL, CHANGE_CONTACT, CHANGE_GENDER, CHANGE_ABOUTME, CHANGE_LANGUAGES, CHANGE_SCHOOL, CHANGE_COMPANY, CHANGE_STREET, CHANGE_CITY, CHANGE_STATE ,CHANGE_COUNTRY} from '../constants/constants.js'
/*
export const setFirstName = (text) => {
	console.log("here in Firstname "+ text)
	return {
	type : CHANGE_FIRSTNAME,
	payload : text
	}}

export const setLastName = (text) => {
	console.log("here in Lastname  "+ text)
	return {
	type : CHANGE_LASTNAME,
	payload : text
	}}

  export const setEmail = (value) => {
  console.log("here in Email "+ value)
  return {
  type : CHANGE_EMAIL,
  payload : value
  }}

  export const setContact = (value) => {
  console.log("here in Contact - "+ value)
  return {
  type : CHANGE_CONTACT,
  payload : value
  }}

  export const setGender = (text) => {
  console.log("here in Gender - "+ text)
  return {
  type : CHANGE_GENDER,
  payload : text
  }}

  export const setAboutMe = (value) => {
    console.log("here in  AboutMe - " + value)
    return {
    type : CHANGE_ABOUTME,
    payload : value
  }}

  export const setLanguages = (text) => {
    console.log("here in Languages  - "+ text)
    return {
    type : CHANGE_LANGUAGES,
    payload : text
  }}

  export const setSchool = (text) => {
    console.log("here in School  - "+ text)
    return {
    type : CHANGE_SCHOOL,
    payload : text
 }}

 export const setCompany = (value) => {
  console.log("here in Company  - "+ value)
  return {
  type : CHANGE_COMPANY,
  payload : value
}}

export const setStreetAddress = (value) => {
  console.log("here in Street - "+ value)
  return {
  type : CHANGE_STREET,
  payload : value
}
}

export const setCity = (value) => {
    console.log("here in City - "+ value)
    return {
    type : CHANGE_CITY,
    payload : value
  }
  }

  export const setState = (value) => {
    console.log("here in State  - "+ value)
    return {
    type : CHANGE_STATE,
    payload : value
  }
  }

  export const setCountry = (value) => {
    console.log("here in Country  - "+ value)
    return {
    type : CHANGE_COUNTRY,
    payload : value
  }
  }
  */

 export const UpdateUserInformation = (object) => {
  console.log("here in Country  - "+ object)
  return {
  type : 'UPDATE_USER_INFORMATION',
  payload : object
}
}