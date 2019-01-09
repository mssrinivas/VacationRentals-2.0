import {CHANGE_PLACENAME, CHANGE_STARTDATE, SHOW_ERROR, DISABLE_ERROR, CHANGE_ENDDATE, CHANGE_ADULTLIST, CHANGE_CHILDLIST, UPDATE_TRIPS} from '../constants/constants.js'

const initalState = {
    placename: '',
    startdate: '',
    enddate: '',
    adultlist: 0,
    childlist: 0,
    trips : [],
    errors : false
}

const searchPlaces = (state=initalState,action={}) =>{
	switch(action.type)
	{
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
        case UPDATE_TRIPS:
            return Object.assign({},state, { trips : action.payload})
		case SHOW_ERROR:
             return Object.assign({},state, { errors : action.payload})
        case DISABLE_ERROR:
             return Object.assign({},state, { errors : action.payload})
		default:
			return state;
	}
}

export default searchPlaces;