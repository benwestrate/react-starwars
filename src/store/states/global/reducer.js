
import  defautState                     from './defaultState';
import {
    GLOBAL_TOGGLE_IS_MOBILE,
    GLOBAL_TOGGLE_SIDE_BAR,
    GLOBAL_TOGGLE_EPISODE_SORT,
    GLOBAL_TOGGLE_RELEASE_DATE_SORT,
    GLOBAL_ALL_MOVIES_LOADED,
    GLOBAL_ALL_PEOPLE_LOADED }          from 'constants'


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
        case GLOBAL_ALL_PEOPLE_LOADED : 
            state = {
                ...state,
                loaded : {
                    ...state.loaded,
                    people : true
                }
            }
            break;
        case GLOBAL_ALL_MOVIES_LOADED : 
            state = {
                ...state,
                loaded : {
                    ...state.loaded,
                    movies : true
                }
            }
            break;
        default:
            state = {
                ...state
            }
            break;
    }

    return state;
}