

export default ( name, state ) => {
    localStorage.setItem( name, JSON.stringify(state) );
}

export const getSavedState = ( name ) => {
    let string = localStorage.getItem( name )
    return JSON.parse(string);
}