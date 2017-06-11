
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import {Movies} from './movies'

let mapsStatToProps = (state) => {
    return {
        movies : state.movies,
    }
}

export default connect( mapsStatToProps )( Movies )