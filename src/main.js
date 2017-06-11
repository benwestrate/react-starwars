
// NPM Imports 
import React        from 'react';
import ReactDom     from 'react-dom';
import { Provider } from 'react-redux';

// Local Imports
import { App }      from './app.js';
import initStore    from './store/store.js';

const store = initStore();
window.starwars = {
    applicationStore : store
}

const entryElement = document.querySelector('[data-hook="main"]')

ReactDom.render( <Provider store={store}>
    <App />
</Provider>, entryElement );