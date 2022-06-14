
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';

import classes from './MobileNavigation.module.css'

const MobileNavigation = props => {
    console.log('MobileNavigation invoked')
    return (
        <div className={classes.navigation__box}>
            <p onClick={props.onClose}><FontAwesomeIcon icon={faSliders}></FontAwesomeIcon>&nbsp;Close</p>
        <div className={classes.navigation__link}>
            <p>Add Expense</p>
            <p>View Expense</p>
        </div>
        </div>
    )
}
export default MobileNavigation