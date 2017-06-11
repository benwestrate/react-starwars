// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css }  from 'aphrodite/no-important' 


//Local Imports 
import Layout                       from './components/layout';
import { getMovies,getAllPeople }   from './lib/swapi/swapi'

export class App extends React.Component {
    componentWillMount() {
        getMovies();
        getAllPeople();
    }
    render() {
        return <Layout/>
    }
}

const styles = StyleSheet.create({})