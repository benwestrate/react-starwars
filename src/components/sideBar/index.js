
// NPM Imports
import { connect } from 'react-redux';

// Local Imports 
import { SideBar }              from './sideBar'
import { toggleShowSideBar }    from 'actions'

let mapStatToProps = (state) => {
    return {
        showSideBar : state.global.showSideBar
    }
}

let mapDispatchToProps = ( dispatch ) => {
    return {
        toggleSideBar : ( showSideBar ) => {
            dispatch( toggleShowSideBar( showSideBar ) )
        }
    }
}

export default connect( mapStatToProps, mapDispatchToProps )( SideBar )