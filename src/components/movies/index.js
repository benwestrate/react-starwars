
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import {Movies} from './movies'

let mapStatToProps = (state) => {
    return {
        movies              : state.movies,
        sortByEpisode       : state.global.episodeSort,
        sortByReleaseDate   : state.global.releaseDateSort
    }
}

export default connect( mapStatToProps )( Movies )