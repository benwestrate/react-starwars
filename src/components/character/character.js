// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important' 


//Local Imports 
import {
    fontColor,
    cardBorder,
    highlight,
    highlight2 } from 'vars';

export class Character extends Component {

    constructor(props){
        super(props);

    }
    render() {

        let {
            people,
            personConstant,
            title,
            imgSrc,
            sideOfTheForce
        } = this.props;

        let person = people[personConstant];

        let good = sideOfTheForce === 'light' ? true : false;

        let wrapperClass = css( 
            styles.wrapper, 
            good ? styles.lightSide : styles.darkSide
         )

        return <div className={ wrapperClass } > 
            <h3 className={ css( styles.title ) }> { title } </h3>
            <img className={ css( styles.img ) } src={imgSrc}/>
            <p className={ css( styles.infoRow, styles.stripe ) }>
                <span className={ css( styles.dec ) }> Name  </span>
                <span className={ css( styles.info ) }>{person.name}</span>
            </p>
            <p className={ css( styles.infoRow ) }>
                <span className={ css( styles.dec ) }> Birth Year  </span>
                <span className={ css( styles.info ) }>{person.birth_year}</span>
            </p>
            <p className={ css( styles.infoRow, styles.stripe ) }>
                <span className={ css( styles.dec ) }> Height  </span>
                <span className={ css( styles.info ) }>{person.height} in cm</span>
            </p>
        </div>
    }
}

const styles = StyleSheet.create({
    wrapper : {
        borderRadius : '5px',
        color : fontColor,
        marginTop : '10px',
        paddingBottom : '10px'
    },
    lightSide : {
        background : highlight
    },
    darkSide : {
        background : highlight2
    },
    title : {
        fontWeight : 200,
        fontSize : '1.3em',
        padding : '20px'
    },
    img : {
        width : '100%',
        marginBottom : '10px'
    },
    stripe : {
        background : 'rgba(0,0,0,.1)'
    },
    infoRow : {
        padding : '5px 10px'
    },
    dec : {
        display : 'inline-block',
        width : '100px'
    },
    info : {
        display : 'inline-block',
        
    }
})