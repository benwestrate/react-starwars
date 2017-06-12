
// NPM Imports 
import React        from 'react';
import ReactDom     from 'react-dom';
import { Provider } from 'react-redux';
import 'whatwg-fetch'

// Local Imports
import { App }                  from './app.js';
import initStore                from './store/store.js';
import { 
    toggleShowSideBar,
    isMobile }                  from 'actions'
import { 
    getMovies,
    getAllPeople }              from './lib/swapi/swapi'

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

// Load all data 
getMovies()
getAllPeople()


let renderSubscription = store.subscribe( () => {
    let state = store.getState();

    if( state.global.loaded.movies && state.global.loaded.people ){
        ReactDom.render( <Provider store={store}>
                <App />
        </Provider>, entryElement );
        renderSubscription();
    }
} )

