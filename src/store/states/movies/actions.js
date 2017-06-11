
import {
    MOVIES_SET_ALL_MOVIES
} from 'constants'

export const setAllMovies = ( movies ) => {
    return {
        type : MOVIES_SET_ALL_MOVIES,
        movies
    }
}