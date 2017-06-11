// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important' 


//Local Imports 
import { 
    cardBackground,
    highlight,
    highlight2,
    background,
    cardBorder }    from 'vars';
import Movie        from '../movie'

export class Movies extends Component {
    constructor(props) {
        super(props);

        this.mapMovies = this.mapMovies.bind( this );
    }

    mapMovies() {
    
        let movies = [];

        this.props.movies.sort( ( movieA, movieB ) => {
            if( movieA.episode_id > movieB.episode_id ) return 1;
            if( movieA.episode_id < movieB.episode_id ) return -1;
            return 0;
        } )

        for( var i = 0; i < this.props.movies.length; i++ ){

            let movie1          = this.props.movies[i];
            let movie2MarkUp    = null;
            let isLast          = i === this.props.movies.length - 1;

            if( i + 1 <  this.props.movies.length ){
                let movie2 = this.props.movies[i+1];
                movie2MarkUp = <Movie movie={movie2} isSecond={true} isLast={isLast}/>
                i++;
            }

            movies.push(
                <div key={i} className={css(styles.movieCard)}>
                    <Movie movie={movie1} isSecond={false} isLast={isLast}/>
                   {movie2MarkUp}
                </div>
            )

        }

        return movies
    }

    render() {
        return <div className={css(styles.movieWrapper)}>
            { this.mapMovies() }
        </div>
    }
}

const styles = StyleSheet.create({
    movieWrapper : {
        display : 'flex',
        overflow : 'hidden',
        flexWrap : 'wrap'
    },
    movieCard : {
        display: 'flex',
        background: cardBackground,
        borderRadius: '5px',
        margin: '10px',
        boxShadow : '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
        border : '1px solid ' + cardBorder
    }
})