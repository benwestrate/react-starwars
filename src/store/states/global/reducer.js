
import  defautState                     from './defaultState';
import {
    GLOBAL_TOGGLE_IS_MOBILE,
    GLOBAL_TOGGLE_SIDE_BAR,
    GLOBAL_TOGGLE_EPISODE_SORT,
    GLOBAL_TOGGLE_RELEASE_DATE_SORT }   from 'constants'


export default ( state = defautState, action ) => {

    switch (action.type) {
        case GLOBAL_TOGGLE_IS_MOBILE : 
            state = { 
                ...state,
                isMobile : action.isMobile
            }
            break
        case GLOBAL_TOGGLE_SIDE_BAR : 
            state = { 
                ...state,
                showSideBar : action.showSideBar
            }
            break
        case GLOBAL_TOGGLE_EPISODE_SORT : 
            state = { 
                ...state,
                releaseDateSort : null,
                episodeSort     : action.desc ? 'desc' : 'asc'
            }
            break 
        case GLOBAL_TOGGLE_RELEASE_DATE_SORT : 
            state = { 
                ...state,
                releaseDateSort : action.desc ? 'desc' : 'asc',
                episodeSort     : null
            }
            break 
        default:
            state = {
                ...state
            }
            break;
    }

    return state;
}