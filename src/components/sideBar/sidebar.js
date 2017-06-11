
// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important' 


//Local Imports 
import {
    fontColor }         from 'vars';
import Character        from '../character';
import CrawlChart       from '../crawlChart';
import { Han, JarJar }  from 'constants';

export class SideBar extends Component {
    render() {
        return <div className={css(styles.wrapper)}>
           <Character 
                title="My Favorite Character" 
                personConstant={Han}
                sideOfTheForce={'light'}
                imgSrc='https://c1.staticflickr.com/8/7391/14063653395_57a080173a_b.jpg'/>
            <Character 
                title="My Least Favorite Character" 
                personConstant={JarJar}
                sideOfTheForce={'dark'}
                imgSrc='https://lumiere-a.akamaihd.net/v1/images/image_d499abf8.jpeg?region=0%2C0%2C1560%2C878&width=1536'/>
            <CrawlChart />
        </div>
    }
}

const styles = StyleSheet.create({
    wrapper : {
        minWidth : '250px',
        maxWidth : '300px',
        padding : '10px'
    }
})