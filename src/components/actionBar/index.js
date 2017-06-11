
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import { ActionBar }        from './actionBar'
import { 
    toggleShowSideBar,
    sortByEpisodeNum,
    sortByReleaseDate }     from 'actions'

let mapStatToProps = (state) => {
    return {
        showSideBar         : state.global.showSideBar,
        episodeSort         : state.global.episodeSort,
        releaseDateSort     : state.global.releaseDateSort
    }
}

let mapDispatchToProps = ( dispatch ) => {
    return {
        toggleSideBar : ( showSideBar ) => {
            dispatch( toggleShowSideBar( showSideBar ) )
        },
        toggleEpisodeSort : ( isDesc ) => {
            dispatch( sortByEpisodeNum( isDesc ) )
        },
        toggleReleaseDateSorting : ( isDesc ) => {
            dispatch( sortByReleaseDate( isDesc ) )
        }
    }
}

export default connect( mapStatToProps, mapDispatchToProps )( ActionBar )