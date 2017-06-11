
// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css }  from 'aphrodite/no-important' 

// Local Imports 
import SideBar          from '../sideBar';
import Movies           from '../Movies';
import ActionBar        from '../actionBar';
import { 
    fontColor,
    background }        from 'vars';


export class Layout extends React.Component {
    render() {

        let {
            showSideBar,
            isMobile }      = this.props;

        let mainHideClass   = css( 
            showSideBar && isMobile ? styles.hideMain : null 
        ) 

        return <div className={css(styles.container)}> 
            <aside className={css(styles.SideBar)}>
                <SideBar />
            </aside>
            <main className={ mainHideClass }>
                <ActionBar />
                <Movies />
            </main>
        </div>
    }
}

const styles = StyleSheet.create({
    container : {
        display : 'flex'
    },
    SideBar : {
        background  : fontColor,
        color       : background,
        marginRight : '10px'
    },
    hideMain : {
        display : 'none'
    }
})