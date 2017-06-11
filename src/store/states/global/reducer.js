
import  defautState from './defaultState';

export default ( state = defautState, action ) => {

    switch (action.type) {
    
        default:
            state = {
                ...state
            }
            break;
    }

    return state;
}