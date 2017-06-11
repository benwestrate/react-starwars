// NPM Imports
import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important' 


//Local Imports 
import {
    cardBackground,
    fontColor,
    background,
    actionBarBackground }        from 'vars';
import {
    makeButton }        from 'mixins';

export class ActionBar extends Component {

    constructor(props){
        super(props);

        this.toggleSideBar      = this.toggleSideBar.bind(this);
        this.sortByEpisode      = this.sortByEpisode.bind(this);
        this.sortByReleaseDate  = this.sortByReleaseDate.bind(this);
    }

    toggleSideBar(){

        let {
            showSideBar,
            toggleSideBar } = this.props;

        toggleSideBar( !showSideBar );

    }

    sortByEpisode( type ){
        let isDesc = type === 'desc'

        this.props.toggleEpisodeSort( isDesc );
    }

    sortByReleaseDate( type ){
        let isDesc = type === 'desc'

        this.props.toggleReleaseDateSorting( isDesc );
    }

    render() {
        let {
            episodeSort,
            releaseDateSort } = this.props;

        let epDescClass = css( 
            styles.sortButton,
            episodeSort === 'desc' ? styles.active : ''
         )
        
        let epAscClass = css( 
            styles.sortButton,
            episodeSort === 'asc' ? styles.active : ''
         )
        
        let rdDescClass = css( 
            styles.sortButton,
            releaseDateSort === 'desc' ? styles.active : ''
         )
        
        let rdAscClass = css( 
            styles.sortButton,
            releaseDateSort === 'asc' ? styles.active : ''
         )

        return <div className={ css( styles.actionBarWrapper) } > 
            <button className={ css( styles.mobileMenu ) } onClick={this.toggleSideBar}> 
                <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
            <div className={ css( styles.sortContainer ) }>
                <span className={ css( styles.sortButtonDesc ) }> Sort By Episode Number </span>
                <div className={ css( styles.sortButtonContainer ) }>
                    <button className={ epAscClass } onClick={ this.sortByEpisode.bind(this, 'asc') } > 
                        <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
                    </button>
                    <button className={ epDescClass } onClick={ this.sortByEpisode.bind(this, 'desc') }> 
                        <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <div className={ css( styles.sortContainer ) }>
                <span className={ css( styles.sortButtonDesc ) }> Sort By Release Date </span>
                <div className={ css( styles.sortButtonContainer ) }>
                    <button className={ rdAscClass } onClick={ this.sortByReleaseDate.bind(this, 'asc') }> 
                        <i className="fa fa-sort-amount-asc" aria-hidden="true"></i>
                    </button>
                    <button className={ rdDescClass } onClick={ this.sortByReleaseDate.bind(this, 'desc') }> 
                        <i className="fa fa-sort-amount-desc" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
            
        </div>
    }
}

const styles = StyleSheet.create({
    actionBarWrapper : {
        width : 'calc( 100% - 320px )',
        marginLeft : '-10px',
        boxShadow : '1px 1px 1px 1px rgba(0,0,0,0.3)',
        position : 'fixed',
        background : actionBarBackground,
        zIndex : 1,
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'space-between',
        '@media (max-width: 600px)': {
            width : '100%'
        }
    },
    mobileMenu : makeButton( {
        '@media (min-width: 600px)': {
            display : 'none'
        }
    } ),
    sortContainer : {
        background : 'none',
        margin: '10px',
        color : background
    },
    sortButtonDesc : {
        display : 'block',
        padding : '10px'
    },
    sortButtonContainer : {
        display : 'flex',
        justifyContent : 'streach',
        overflow : 'hidden',
        borderRadius : '5px',
        border: '1px solid ' + fontColor
    },
    sortButton : makeButton({
        margin: '0',
        flexGrow : '1',
        border : 'none'
    }),
    active : {
        background : fontColor
    }
})