import {
    MOVIES_SET_ALL_MOVIES
} from 'constants'
import  defautState from './defaultState';

export default ( state = defautState, action ) => {

    switch (action.type) {
        case MOVIES_SET_ALL_MOVIES : 
            state = [
                ...state,
                ...action.movies
            ]
            break;
        default:
            state = [
                ...state
            ]
            break;
    }

    return state;
}