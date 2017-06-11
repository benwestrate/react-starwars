
 import {
    Luke,
    Leia,
    Han,
    ObiWan,
    Anakin,
    Padma,
    QuiGon,
    Finn,
    Ray } from 'constants';


export default ( movie ) => {

    let characterList = [];

    switch (movie.episode_id) {
        case 1:
            characterList = [
                ObiWan,
                Anakin,
                QuiGon
            ]
            break;
        case 2:
            characterList = [
                ObiWan,
                Anakin,
                Padma
            ]
            break;
        case 3:
            characterList = [
                ObiWan,
                Anakin,
                Padma
            ]
            break;
        case 4:
            characterList = [
                Luke,
                Leia,
                Han
            ]
            break;
        case 5:
            characterList = [
                Luke,
                Leia,
                Han
            ]
            break;
        case 6:
            characterList = [
                Luke,
                Leia,
                Han
            ]
            break;
        case 7:
            characterList = [
                Ray,
                Finn,
                Han
            ]
            break;
        default:
            break;
    }

    return characterList;
}