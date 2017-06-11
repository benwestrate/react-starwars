
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import { CrawlChart } from './crawlChart'

let mapsStatToProps = (state) => {
    return {
        movies : state.movies
    }
}

export default connect( mapsStatToProps )( CrawlChart )