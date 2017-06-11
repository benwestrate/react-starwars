
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import { Character } from './character'

let mapsStatToProps = (state) => {
    return {
        people : state.people
    }
}

export default connect( mapsStatToProps )( Character )