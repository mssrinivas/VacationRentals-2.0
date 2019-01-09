import {CHANGE_HEADLINE, CHANGE_DESCRIPTION, CHANGE_PROPERTY_TYPE, CHANGE_BEDROOM, CHANGE_ACCOMODATES, CHANGE_BATHROOMS, CHANGE_MINSTAY, CHANGE_PEOPLE,
    CHANGE_PER_NIGHT, CHANGE_PLACENAME, CHANGE_STARTDATE, CHANGE_ENDDATE, CHANGE_ADULTLIST, CHANGE_CHILDLIST, 
    CHANGE_CURRENCY,  CHANGE_REDIRECT, CHANGE_AVAILABLE_STARTDATE, CHANGE_AVAILABLE_ENDDATE } from '../constants/constants.js'

const initalState = {
Headline: '',
PropertyDescription: '',
PropertyType: '',
Bedrooms : '',
Bathroom : '',
MinStay: '',
People: '',
PerNight: '',
AvailableStartDate: '',
AvailableEndDate: '',
Currency: '',
Redirecty : false,
placename: '',
startdate: 0,
enddate: 0,
adultlist: 0,
childlist: 0
} 

export const propertydescription = (state=initalState,action={}) =>{
	switch(action.type)
	{
		case CHANGE_HEADLINE:
			return Object.assign({},state, { Headline : action.payload})
		case CHANGE_DESCRIPTION:
            return Object.assign({},state, { PropertyDescription : action.payload})
        case CHANGE_PROPERTY_TYPE:
            return Object.assign({},state, { PropertyType : action.payload})
        case CHANGE_BEDROOM:
            return Object.assign({},state, { Bedrooms : action.payload})
        case CHANGE_BATHROOMS:
            return Object.assign({},state, { Bathroom : action.payload})
		case CHANGE_MINSTAY:
             return Object.assign({},state, { MinStay : action.payload})
        case CHANGE_PEOPLE:
             return Object.assign({},state, { People : action.payload})
        case CHANGE_PER_NIGHT:
             return Object.assign({},state, { PerNight : action.payload})
        case CHANGE_PLACENAME:
             return Object.assign({},state, { placename : action.payload})
         case CHANGE_STARTDATE:
             return Object.assign({},state, { startdate : action.payload})
         case CHANGE_ENDDATE:
             return Object.assign({},state, { enddate : action.payload})
         case CHANGE_ADULTLIST:
             return Object.assign({},state, { adultlist : action.payload})
         case CHANGE_CHILDLIST:
             return Object.assign({},state, { childlist : action.payload})
         case CHANGE_CURRENCY:
             return Object.assign({},state, { Currency : action.payload})
         case CHANGE_REDIRECT:
             return Object.assign({},state, { Redirecty : action.payload})
         case CHANGE_AVAILABLE_STARTDATE:
              return Object.assign({},state, { AvailableStartDate : action.payload})
         case CHANGE_AVAILABLE_ENDDATE:
              return Object.assign({},state, { AvailableEndDate : action.payload})
		default:
			return state;
	}
}