
import {
    GLOBAL_TOGGLE_IS_MOBILE,
    GLOBAL_TOGGLE_SIDE_BAR,
    GLOBAL_TOGGLE_EPISODE_SORT,
    GLOBAL_TOGGLE_RELEASE_DATE_SORT,
    GLOBAL_ALL_MOVIES_LOADED,
    GLOBAL_ALL_PEOPLE_LOADED }          from 'constants'

export const isMobile = ( isMobile ) => {

    return {
        type : GLOBAL_TOGGLE_IS_MOBILE,
        isMobile
    }

}

export const toggleShowSideBar = ( showSideBar ) => {

    return {
        type : GLOBAL_TOGGLE_SIDE_BAR,
        showSideBar
    }

}


export const sortByEpisodeNum = ( desc ) => {

    return {
        type : GLOBAL_TOGGLE_EPISODE_SORT,
        desc
    }

}

export const sortByReleaseDate = ( desc ) => {

    return {
        type : GLOBAL_TOGGLE_RELEASE_DATE_SORT,
        desc
    }

}

export const allMoviesLoaded = () => {

    return {
        type : GLOBAL_ALL_MOVIES_LOADED
    }

}
export const allPeopleLoaded = () => {

    return {
        type : GLOBAL_ALL_PEOPLE_LOADED
    }

}