
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import { Movie } from './movie'

let mapStatToProps = (state) => {
    return {
        people : state.people
    }
}

export default connect( mapStatToProps )( Movie )