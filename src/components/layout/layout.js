
// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css }  from 'aphrodite/no-important' 

// Local Imports 
import { SideBar }      from '../sideBar/sidebar';
import  Movies          from '../Movies';
import { 
    fontColor,
    background }        from 'vars';


export class Layout extends React.Component {
    render() {
        return <div className={css(styles.container)}> 
            <aside className={css(styles.SideBar)}>
                <SideBar />
            </aside>
            <main >
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
        background : fontColor,
        color       : background,
        marginRight : '10px'
    }
})