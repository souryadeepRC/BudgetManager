
import classes from './Input.module.css'
const Input = props => {
    return (
        <div className={classes.input__box}>
            <label>{props.label}</label>
            <input 
                {...props.input}/>
            {props.isValidInput && <p className={classes.input__error_message}>{props.errorMessage}</p>}
        </div>
    )
}
export default Input