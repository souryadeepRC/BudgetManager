import { Fragment } from 'react'
import NavigationBar from '../NavigationBar'
import classes from './WebNavigation.module.css' 

const WebNavigation = () => {
    return (
        <Fragment>
            <NavigationBar className={classes.navbar}/> 
        </Fragment>
        )
}
export default WebNavigation