// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important' 


//Local Imports 
import {
    cardBorder } from 'vars';

export class Movie extends Component {

    constructor(props){
        super(props);

        this.mapMainCharacters = this.mapMainCharacters.bind(this);
    }

     mapMainCharacters( movie ){

        let characters = movie.mainCharacters.map( ( character, index ) => {
            return <p className={ css( styles.character ) } key={index} >{this.props.people[character].name}</p>
        } )

        return <dl className={ css( styles.peopleList ) }> 
                <dt className={ css( styles.peopleTitle ) }>Main Actors</dt> 
                <dd className={ css( styles.peopleDef ) }>{characters}</dd>
            </dl> 

    }

    processTitle( title ) {

        let titleArray              = title.split( ' ' );
        let longEnoughToAddNewLine  = titleArray.length > 2;
        let secondLine              = '';

        if( longEnoughToAddNewLine ){
            
            for( var i = 1; i < titleArray.length; i++ ){
                secondLine += ' ' + titleArray[i];
                titleArray.splice( i, 1 );
            }
        
        }

        

        return ( 
            <div>
                <p> {titleArray.join(' ')} </p>
                <p> {secondLine} </p>
            </div>
        );
    }

    render() {
        let {
            movie,
            isSecond,
            isLast
        } = this.props;

        let movieClassName = css( 
            styles.movie,
            isSecond ? styles.right : styles.left,
            isLast && !isSecond ? styles.lastAndOnly : null
        )

        return <div className={ movieClassName } > 
            <img className={ css( styles.poster ) } src={movie.poster} />
            <div className={ css( styles.infoWrapper ) }>
                    <h3 className={ css( styles.title ) }>{this.processTitle(movie.title)}</h3>
                    <dl className={ css( styles.peopleList ) }> 
                        <dt className={ css( styles.peopleTitle ) }>Director</dt> 
                        <dd className={ css( styles.peopleDef ) }>{movie.director}</dd>
                    </dl>
                    {this.mapMainCharacters( movie )}
            </div>
        </div>
    }
}

const styles = StyleSheet.create({
    movie : {
        position : 'relative',
        maxWidth : '200px',
        lineHeight : '1.2em',
        overflow: 'hidden'
    },
    poster : {
        width : '100%',
        maxWidth : '200px',
        maxHeight : '295px',
        marginBottom : '5px'
    },
    infoWrapper : {
        padding : '10px'
    },
    title : {
        fontSize : '1.3em',
        marginBottom : '5px',
        textAlign : 'center',
        lineHeight : '1.6em',
    },
    peopleList : {
        // display : 'flex',
        margin : '15px 0'
    },
    peopleTitle : {
        textTransform: 'uppercase',
        fontWeight: '200'
    },
    peopleDef : {
        marginLeft : '10px',
        marginTop : '5px'
    },
    character : {
        marginTop : '3px'
    },
    right : {
        borderTopRightRadius : '5px',
        borderLeft : '1px solid ' + cardBorder
    },
    left : {
        borderTopLeftRadius : '5px'
    },
    lastAndOnly : {
         borderTopLeftRadius : '5px',
         borderTopRightRadius : '5px'
    }
})