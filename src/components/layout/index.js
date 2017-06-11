
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import { Layout } from './layout'

let mapStatToProps = (state) => {
    return {
        isMobile    : state.global.isMobile,
        showSideBar : state.global.showSideBar
    }
}

export default connect( mapStatToProps )( Layout )