// Local Imports
import { 
    setAllMovies,
    setPeople,
    setPeopleCount }    from 'actions';
import processMovies    from './processMovies'
import processPeople    from './processPeople'

export const getMovies = () => { 
    return new Promise( ( resolve, reject ) => {

        fetch('//swapi.co/api/films/')
            .then((response) => {
                return response.json()
            }).then( ( movies ) => {
                return processMovies( movies );
            } ).then( ( movies ) => {
               starwars.applicationStore.dispatch( setAllMovies( movies ) )
            } )
            .catch((ex) => {
                console.error( ex )
            })

    } )
}

export const getAllPeople = ( url = '//swapi.co/api/people/') => {
    let currentState = starwars.applicationStore.getState();

    return new Promise( ( resolve, reject ) => {
        fetch(url)
            .then((response) => {
                return response.json()
            }).then( ( people ) => {

                if( currentState.people.count !== people.count ){
                    let processedPeople = processPeople( people );
                    starwars.applicationStore.dispatch( setPeople( processedPeople ) );
                    starwars.applicationStore.dispatch( setPeopleCount( currentState.people.count + people.results.length ) );

                    if( people.next !== null ){
                        getAllPeople( people.next.replace('http:', '') )
                    } 
                }

            } )
            .catch((ex) => {
                console.error( ex )
            })
    } )
}


export const getPerson = ( url ) => { 
    return new Promise( ( resolve, reject ) => {
        fetch(url)
            .then((response) => {
                return response.json()
            }).then( ( person ) => {
                console.log('====================================');
                console.log(person);
                console.log('====================================');
                resolve( person );
            } )
            .catch((ex) => {
                console.error( ex )
            })
    } )
}