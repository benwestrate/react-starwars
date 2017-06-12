// NPM Imports
import axios from 'axios'

// Local Imports
import { 
    setAllMovies,
    setPeople,
    setPeopleCount,
    allMoviesLoaded,
    allPeopleLoaded }   from 'actions';
import processMovies    from './processMovies'
import processPeople    from './processPeople'

export const getMovies = () => { 
    return new Promise( ( resolve, reject ) => {

        axios.get('//swapi.co/api/films/')
            .then( ( result ) => {
                let movies = result.data;
                let processedMovies = processMovies( movies );
                starwars.applicationStore.dispatch( setAllMovies( processedMovies ) )
                starwars.applicationStore.dispatch( allMoviesLoaded( ) )
                resolve( movies )
            } )
            .catch((ex) => {
                console.error( ex )
            })

    } )
}

export const getAllPeople = ( url = '//swapi.co/api/people/') => {
    let currentState = starwars.applicationStore.getState();

    return new Promise( ( resolve, reject ) => {
        axios.get(url)
            .then( ( result ) => {
                
                let people = result.data;

                if( currentState.people.count !== people.count ){
                    let processedPeople = processPeople( people );
                    starwars.applicationStore.dispatch( setPeople( processedPeople ) );
                    starwars.applicationStore.dispatch( setPeopleCount( currentState.people.count + people.results.length ) );

                    if( people.next !== null ){
                        getAllPeople( people.next.replace('http:', '') )
                    } else {
                        starwars.applicationStore.dispatch( allPeopleLoaded() )
                    }
                } else {
                    starwars.applicationStore.dispatch( allPeopleLoaded() )
                }

                resolve( people )
            } )
            .catch((ex) => {
                console.error( ex )
            })
    } )
}
