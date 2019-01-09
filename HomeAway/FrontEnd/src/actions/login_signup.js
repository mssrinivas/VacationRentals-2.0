import {CHANGE_USERNAME, CHANGE_PASSWORD, SHOW_ERROR, REDIRECT_TO_HOME, CHANGE_FIRSTNAME, CHANGE_LASTNAME, CHANGE_EMAIL, CHANGE_SIGNUP_PASSWORD, CHANGE_SIGNUP_USERNAME} from '../constants/constants.js'



export const SignIn = (object) => {
	//console.log("here in username "+ text)
	return {
    type : 'SIGNIN',
    payload : object
  }}

export const SignUp = (object) => {
  return {
    type : 'SIGNUP',
    payload : object
  }}
 
export const setUsernameField = (text) => {
	console.log("here in username "+ text)
	return {
	type : CHANGE_USERNAME,
	payload : text
	}}

export const setPasswordField = (text) => {
	console.log("here in password "+ text)
	return {
	type : CHANGE_PASSWORD,
	payload : text
	}}

  export const setErrorsasTrue = (value) => {
  console.log("here in Errors"+ value)
  return {
  type : SHOW_ERROR,
  payload : value
  }}

  export const setRedirectionasTrue = (value) => {
  console.log("here in Redirection  - "+ value)
  return {
  type : REDIRECT_TO_HOME,
  payload : value
  }}

  export const setFirstnameField = (text) => {
  console.log("here in Redirection  - "+ text)
  return {
  type : CHANGE_FIRSTNAME,
  payload : text
  }}

  export const setLastnameField = (text) => {
    console.log("here in Redirection  - "+ text)
    return {
    type : CHANGE_LASTNAME,
    payload : text
  }}

  export const setMailField = (text) => {
    console.log("here in Redirection  - "+ text)
    return {
    type : CHANGE_EMAIL,
    payload : text
  }}

  export const setSignUpUsernameField = (text) => {
    console.log("here in Redirection  - "+ text)
    return {
    type : CHANGE_SIGNUP_USERNAME,
    payload : text
 }}

  export const setSignUpPasswordField = (text) => {
  console.log("here in Redirection  - "+ text)
  return {
  type : CHANGE_SIGNUP_PASSWORD,
  payload : text
  }}
  



  

