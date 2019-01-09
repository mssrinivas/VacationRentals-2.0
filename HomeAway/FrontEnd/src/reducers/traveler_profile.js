import {CHANGE_FIRSTNAME, CHANGE_LASTNAME, CHANGE_EMAIL, CHANGE_CONTACT, CHANGE_GENDER, CHANGE_ABOUTME, CHANGE_LANGUAGES, CHANGE_SCHOOL, CHANGE_COMPANY, CHANGE_STREET, CHANGE_CITY, CHANGE_STATE ,CHANGE_COUNTRY} from '../constants/constants.js'

const initalState = {
    FirstName: '',
	LastName: '',
	PrimaryEmail: '',
    Contact: '',
    Gender: '',
    AboutMe: '',
    Languages: '',
    SchoolName: '',
	CompanyName: '',
	StreetAddress: '',
	City : '',
	State : '',
	Country: ''
}

const travelerprofile = (state=initalState,action={}) =>{
	switch(action.type)
	{
		case 'UPDATE_USER_INFORMATION':
			return Object.assign({},state,action.payload)
		default:
			return state;
	}
}

export default travelerprofile;