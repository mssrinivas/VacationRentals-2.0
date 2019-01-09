import {CHANGE_USERNAME, CHANGE_PASSWORD, SHOW_ERROR, REDIRECT_TO_HOME, CHANGE_FIRSTNAME, CHANGE_LASTNAME, CHANGE_EMAIL, CHANGE_SIGNUP_PASSWORD, CHANGE_SIGNUP_USERNAME} from '../constants/constants.js'

const initalState = {
	signInEmail: '',
	signInPassword : '',
	errors : false,
	Redirection_Value : false,
	FirstName : '',
	LastName : '',
	PrimaryEmail : '',
	Password : '',
	Username : ''
}

const loginSignup = (state=initalState,action={}) =>{
	switch(action.type)
	{
		case 'SIGNIN' :
			return Object.assign({},state, action.payload)
		case 'SIGNUP' : 
			return Object.assign({},state, action.payload)
		/*case CHANGE_USERNAME:
			return Object.assign({},state, { signInEmail : action.payload})
		case CHANGE_PASSWORD:
			return Object.assign({},state, { signInPassword : action.payload})*/
		case SHOW_ERROR:
			 return Object.assign({},state, { errors : action.payload})
		case REDIRECT_TO_HOME:
			 return Object.assign({},state, { Redirection_Value : action.payload})
		case CHANGE_FIRSTNAME:
			 return Object.assign({},state, { FirstName : action.payload})
		case CHANGE_LASTNAME:
			  return Object.assign({},state, { LastName : action.payload})
		case CHANGE_EMAIL:
			  return Object.assign({},state, { PrimaryEmail : action.payload})
		case CHANGE_SIGNUP_PASSWORD:
			  return Object.assign({},state, { Password : action.payload})
		case CHANGE_SIGNUP_USERNAME: 
		      return Object.assign({},state, { Username : action.payload})
		default:
			return state;
	}
}

export default loginSignup;