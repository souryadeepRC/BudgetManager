import classes from './NavigationBar.module.css'
import { NavLink } from 'react-router-dom';

const NavigationBar = props => {
    const clickMenuHandler = () => {
        if(props.onClose){
            props.onClose()
        }
    }
    return (
        <nav className={`${props.className} ${classes.navigation__link}`}>
            <ul>
                <li onClick={clickMenuHandler}>
                    <NavLink to={`/home`} activeClassName={classes.active}>Home</NavLink>
                </li>
                <li onClick={clickMenuHandler}>
                    <NavLink to='/add-expense' activeClassName={classes.active}>Add Expense</NavLink>
                </li>
                <li onClick={clickMenuHandler}>
                    <NavLink to='/expenses' activeClassName={classes.active}>View Expense</NavLink>
                </li> 
            </ul>
        </nav>
    )
}
export default NavigationBar