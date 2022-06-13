
import { useContext, useState } from "react"
import useInput from "../../hooks/Use-input"
import AuthContext from "../context/AuthContext"
import Input from "../Generic/Input"

const isEmpty = value => value !== ''
const isEmail = value => value.includes('@')
const EMAIL_INPUT_PROPS = {
    label: 'Email',
    input: { type: 'email', placeholder: 'Email Address' },
    ErrorMsg: 'Enter an email'
}
const PASSWORD_INPUT_PROPS = {
    label: 'Password',
    input: { type: 'password', placeholder: 'Password' },
    ErrorMsg: 'Enter a password'
}
const LogInForm = props => {
    console.log('LogInForm LOADED')
    const authCtx = useContext(AuthContext)
    const [credentialValidity,setCredentialValidity] = useState(false)
    const emailInput = useInput(isEmail)
    const passwordInput = useInput(isEmpty)

     
    const isFormValid = emailInput.isValidData && passwordInput.isValidData
   
    const logInHandler = event => {
        event.preventDefault()  
        if(!authCtx.onLogin(emailInput.value,passwordInput.value)){
            setCredentialValidity(true)
        }
    }
    return (
        <form onSubmit={logInHandler}>
            <h1>Log In</h1>
            {credentialValidity && <h6>Wrong Credentials</h6>}
            <div>
                <Input
                    label={EMAIL_INPUT_PROPS.label}
                    input={{
                        ...EMAIL_INPUT_PROPS.input,
                        value: emailInput.value,
                        onChange: emailInput.onChangeHandler,
                        onBlur: emailInput.onBlurHandler
                    }}
                    errorMessage={EMAIL_INPUT_PROPS.ErrorMsg}
                    isValidInput={emailInput.hasError}
                />
                <Input
                    label={PASSWORD_INPUT_PROPS.label}
                    input={{
                        ...PASSWORD_INPUT_PROPS.input,
                        value: passwordInput.value,
                        onChange: passwordInput.onChangeHandler,
                        onBlur: passwordInput.onBlurHandler
                    }}
                    errorMessage={PASSWORD_INPUT_PROPS.ErrorMsg}
                    isValidInput={passwordInput.hasError}
                />
            </div>
            <div>
                <button type='submit' onClick={logInHandler} disabled={!isFormValid}>Log In</button>
                <button onClick={props.onHide}>Cancel</button>
            </div>
        </form>
    )
}

export default LogInForm