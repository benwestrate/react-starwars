
// Local Imports
import {
    PEOPLE_SET_PEOPLE,
    PEOPLE_SET_COUNT
} from 'constants'

export const setPeople = ( people ) => {

    return {
        type : PEOPLE_SET_PEOPLE,
        people
    }

}

export const setPeopleCount = (count) => {
    return {
        type : PEOPLE_SET_COUNT,
        count
    }
}