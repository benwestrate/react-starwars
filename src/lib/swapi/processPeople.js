


export default ( people ) => {

    let peopleObject = {}

    people.results.forEach( ( person ) => {
        peopleObject[person.url] = person
    } )

    return peopleObject;

}