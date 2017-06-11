
// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important' 


//Local Imports 
import {
    fontColor,
    background }        from 'vars';
import { makeButton }   from 'mixins';
import Character        from '../character';
import CrawlChart       from '../crawlChart';
import { Han, JarJar }  from 'constants';

export class SideBar extends Component {
    
    render() {
        let { showSideBar, toggleSideBar } = this.props;
        let wrapperClass = css(
            styles.wrapper,
            showSideBar ? styles.showSideBar : ''
        )



        return <div className={ wrapperClass }>
           <div className={ css(styles.mobileSideBarHeader) }>
                <button className={ css(styles.close) } onClick={toggleSideBar.bind(null, !showSideBar)}>
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
           </div>
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
        padding : '10px',
        display : 'none',
        '@media (max-width: 600px)': {
            maxWidth : '100%'
        }
    },
    showSideBar : {
        display : 'block'
    },
    mobileSideBarHeader : {
        display : 'none',
        '@media (max-width: 600px)': {
            display : 'block',
            height : '60px',
            width  : 'calc(100% + 20px)',
            backgroundColor : background,
            margin : '-10px -10px 0 -10px',
            boxShadow : 'inset 0 8px 6px -6px black'
        }
    },
    close : makeButton({
        float : 'right',
        borderRadius : '5px'
    })
})

export default SideBar