const Input = props => {
    return (
        <div>
            <label>{props.label}</label>
            <input 
                {...props.input}/>
            {props.isValidInput && <p>{props.errorMessage}</p>}
        </div>
    )
}
export default Input