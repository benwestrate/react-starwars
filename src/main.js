
// NPM Imports 
import React        from 'react';
import ReactDom     from 'react-dom';
import { Provider } from 'react-redux';

// Local Imports
import { App }                  from './app.js';
import initStore                from './store/store.js';
import { 
    toggleShowSideBar,
    isMobile }                  from 'actions'

const store = initStore();
window.starwars = {
    applicationStore : store
}

const entryElement = document.querySelector('[data-hook="main"]')

let viewingWidth = window.innerWidth

if( viewingWidth > 600 ){
    store.dispatch( isMobile( false ) )
    store.dispatch( toggleShowSideBar( true ) )
}

window.onresize = () => {
    viewingWidth = window.innerWidth
    if( viewingWidth > 600 ){
        store.dispatch( isMobile( false ) )
        store.dispatch( toggleShowSideBar( true ) )
    } else {
        store.dispatch( isMobile( true ) )
        store.dispatch( toggleShowSideBar( false ) )
    }
}


ReactDom.render( <Provider store={store}>
    <App />
</Provider>, entryElement );