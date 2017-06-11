
// Local Imports 
import {
    PEOPLE_SET_PEOPLE,
    PEOPLE_SET_COUNT
} from 'constants'
import  defautState from './defaultState';
import saveState, { getSavedState } from '../../../lib/saveState';

export default ( state = defautState, action ) => {

    switch (action.type) {
        case '@@INIT': 
            state = { ...getSavedState( 'people' ) };
            break;
        case PEOPLE_SET_PEOPLE : 
            state = {
                ...state,
                ...action.people
            }
            saveState( 'people', state );
            break;
        case PEOPLE_SET_COUNT: 
            state = {
                ...state, 
                count : action.count
            }
            saveState( 'people', state );
            break;
        default:
            state = {
                ...state
            }
            break;
    }



    return state;
}