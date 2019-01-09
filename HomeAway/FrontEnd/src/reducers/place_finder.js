import {CHANGE_PLACENAME, CHANGE_STARTDATE, SHOW_ERROR, DISABLE_ERROR, CHANGE_ENDDATE, CHANGE_ADULTLIST, CHANGE_CHILDLIST, UPDATE_TRIPS, SET_REDIRECT, NO_PLACES_TO_SHOW} from '../constants/constants.js'

const initalState = {
    placename: '',
    startdate: '',
    enddate: '',
    adultlist: 0,
    childlist: 0,
    trips : [],
    errors : false,
    redirection : false,
    NoPlacestoShow : false,
    latesttrips: []
}

const placefinder = (state=initalState,action={}) =>{
	switch(action.type)
	{
        case 'SEARCH_PLACES':
            return Object.assign({},state, action.payload)
        case UPDATE_TRIPS:
            return Object.assign({},state, { trips : action.payload})
		case SHOW_ERROR:
             return Object.assign({},state, { errors : action.payload})
        case DISABLE_ERROR:
             return Object.assign({},state, { errors : action.payload})
        case SET_REDIRECT:
             return Object.assign({},state, { redirection : action.payload})
        case NO_PLACES_TO_SHOW:
             return Object.assign({},state, { NoPlacestoShow : action.payload})
        case 'UPDATE_LATEST_TRIPS':
             return Object.assign({},state, { latesttrips : action.payload})
		default:
			return state;
	}
}

export default placefinder;