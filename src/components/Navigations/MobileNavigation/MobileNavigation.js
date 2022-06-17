
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import classes from './MobileNavigation.module.css'
import NavigationBar from '../NavigationBar';

const MobileNavigation = props => {
    return (
        <div className={classes.navigation__box}>
            <p onClick={props.onClose}><FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>&nbsp;Close</p>
            <NavigationBar onClose={props.onClose} className={classes.navbar}/>
        </div>
    )
}
export default MobileNavigation