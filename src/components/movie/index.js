
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import {Movie} from './movie'

let mapsStatToProps = (state) => {
    return {
        people : state.people
    }
}

export default connect( mapsStatToProps )( Movie )