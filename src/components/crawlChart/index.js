
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import { CrawlChart } from './crawlChart'

let mapStatToProps = (state) => {
    return {
        movies          : state.movies,
        allMoviesLoaded : state.global.loaded.movies
    }
}

export default connect( mapStatToProps )( CrawlChart )