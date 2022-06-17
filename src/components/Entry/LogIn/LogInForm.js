
import { useContext, useState } from "react"
import useFetch from "../../../hooks/Use-fetch"
import useInput from "../../../hooks/Use-input"
import AuthContext from "../../../context/AuthContext"
import Spinner from '../../Generic/Spinner/Spinner'

import classes from '../../Generic/Form/Form.module.css'
import { useHistory } from "react-router-dom"
import Form from "../../Generic/Form/Form"
const isEmpty = value => value !== ''
const isEmail = value => value.includes('@')

const USER_DB_URL = 'https://managebudget-12b75-default-rtdb.firebaseio.com/users.json'
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
    document.title = 'Budget Manager | Log In'
    const authCtx = useContext(AuthContext)
    const history = useHistory()
    const { isLoading,checkUserExistance } = useFetch()
    const [credentialValidity, setCredentialValidity] = useState(false)
    const emailInput = useInput(isEmail)
    const passwordInput = useInput(isEmpty)

    const formFieldList = [
        { id: 1, static: EMAIL_INPUT_PROPS, action: emailInput },
        { id: 2, static: PASSWORD_INPUT_PROPS, action: passwordInput },
    ]
    const isFormValid = formFieldList.reduce((validity, field) => validity && field.action.isValidData, true)

    const logInHandler = async (event) => {
        event.preventDefault() 
        const user = await checkUserExistance(USER_DB_URL, emailInput.value)
        
        if(user && user!=null){
            authCtx.onLogin(user)
            history.push(`/BudgetManager/home`)
        }else{
            setCredentialValidity(true)
        }
    }
    return (
        <form onSubmit={logInHandler}>
            <h1 className={classes.form__header}>LOG IN</h1>
            {isLoading && <Spinner />}
            {credentialValidity && <h6 className={classes.form__wrong_credential}>Wrong Credentials</h6>}
            <Form className={classes.form__content} fieldList={formFieldList} />
            <div className={classes.form__btn_container}>
                <button type='submit' disabled={!isFormValid}>Log In</button>
                <button onClick={props.onHide}>Cancel</button>
            </div>
        </form>
    )
}

export default LogInForm