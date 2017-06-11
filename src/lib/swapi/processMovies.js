
// Local Imports
import matchMainCaractersToMovie from './matchMainCharactersToMovie'

const matchMoveToPoster = ( episode_id ) => {
    let posterSrc = null;
    
    switch (episode_id) {
        case 1:
            posterSrc = 'http://i.imgur.com/8uTI2GT.jpg'
            break;
        case 2: 
            posterSrc = 'http://i.imgur.com/efyNm9B.jpg'
            break;
        case 3:
            posterSrc = 'http://i.imgur.com/Lm7DSXS.jpg'
            break;
        case 4:
            posterSrc = 'http://i.imgur.com/QxKphyg.jpg'
            break;
        case 5:
            posterSrc = 'http://i.imgur.com/Da3tlVj.jpg'
            break;
        case 6:
            posterSrc = 'http://i.imgur.com/1oTHcMO.jpg'
            break;
        case 7:
            posterSrc = 'http://i.imgur.com/27h2eZJ.jpg'
            break;
    }

    return posterSrc;

}

export default ( movies ) => {

    let movieArray = movies.results;

    let processedMovies = movieArray.map( ( movie, index ) => {
        
        let posterSrc       = matchMoveToPoster( movie.episode_id );
        let mainCharacters  = matchMainCaractersToMovie( movie );

        return {
            ...movie, 
            poster : posterSrc,
            mainCharacters : mainCharacters
        }

    } )

    return processedMovies;

}