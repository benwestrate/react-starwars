
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import { Character } from './character'

let mapStatToProps = (state) => {
    return {
        people : state.people
    }
}

export default connect( mapStatToProps )( Character )