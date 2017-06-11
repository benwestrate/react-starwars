// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css }  from 'aphrodite/no-important' 
import { HorizontalBar }    from 'react-chartjs-2';
import Color                from 'color';

//Local Imports 
import {
    background,
    highlight2
} from 'vars'

export class CrawlChart extends Component {

    constructor(props){
        super(props);

        this.state = {
            data : null
        }

        this.getMovieScrollCounts = this.getMovieScrollCounts.bind(this);
    }

    componentWillReceiveProps(nextProps) {

        let { movies }   = nextProps;
        let lengths      = [];
        let color        = Color(highlight2)
        
        movies.sort( ( movieA, movieB ) => {
            if( movieA.episode_id > movieB.episode_id ) return 1;
            if( movieA.episode_id < movieB.episode_id ) return -1;
            return 0;
        } )

        let data = {
            labels   : movies.map( ( movie ) => { return movie.title } ),
            datasets : [
                {
                    backgroundColor: color.rgb().string(),
                    borderColor: color.darken(.1).rgb().string(),
                    borderWidth: 1,
                    data: this.getMovieScrollCounts( nextProps ),
                    hoverBackgroundColor: color.darken(.5).rgb().string(),
                    hoverBorderColor:color.darken(.6).rgb().string(),
                    label:'Open Crawl Length'
                }
            ]
        }

        this.setState( { data : data } )
    }

    getMovieScrollCounts( nextProps ) {
        let { movies } = nextProps;
        let counts     = [];

        movies.forEach( (movie) => {
            
            let words = movie.opening_crawl.split(' ');
            counts.push( words.length );

        } )
        
        return counts;
    }

    render() {
        
        let chart = this.state.data ? <HorizontalBar data={ this.state.data } width={90} /> : null

        return <div className={ css(styles.wrapper) } > 
            {chart}
        </div>
    }
}

const styles = StyleSheet.create({
    wrapper : {
        background : background,
        borderRadius : '5px',
        padding : '5px',
        overflow : 'hidden',
        margin : '10px 0'
    }
})