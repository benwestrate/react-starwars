
// NPM Imports
import {
    createStore,
    applyMiddleware,
    combineReducers,
    compose }           from 'redux';
 import {
     persistStore, 
     autoRehydrate }    from 'redux-persist'

// Local Imports 
import reducers from './states/reducerExporter';

 const storeInitializer = ( ) => {

    const rootReducer = combineReducers( reducers );

    const store = createStore(
        rootReducer,
        window.devToolsExtension ? window.devToolsExtension() : f => f
    );


    return store;

 }

export default storeInitializer;