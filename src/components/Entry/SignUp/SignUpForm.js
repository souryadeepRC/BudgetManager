
import { useContext, useState } from 'react'
import useFetch from '../../../hooks/Use-fetch'
import useInput from '../../../hooks/Use-input'
import AuthContext from '../../../context/AuthContext'

import Spinner from '../../Generic/Spinner/Spinner'

import classes from '../../Generic/Form/Form.module.css'
import Form from '../../Generic/Form/Form'
const isEmpty = value => value !== ''
const isUserName = value => value !== '' && !(/\s/).test(value);
const isEmail = value => (/^[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,}$/).test(value)
const isPassword = value => (/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).test(value)

const USER_DB_URL = 'https://managebudget-12b75-default-rtdb.firebaseio.com/users.json'

const FULLNAME_INPUT_PROPS = {
    label: 'Full Name',
    input: { type: 'text', placeholder: 'Full Name' },
    ErrorMsg: 'Enter full name'
}
const USERNAME_INPUT_PROPS = {
    label: 'Username',
    labelInfo: 'No White Space Required',
    input: { type: 'text', placeholder: 'Username' },
    ErrorMsg: 'Enter username without any space'
}
const EMAIL_INPUT_PROPS = {
    label: 'Email',
    input: { type: 'email', placeholder: 'Email Address' },
    ErrorMsg: 'Enter an email'
}
const PASSWORD_INPUT_PROPS = {
    label: 'Password',
    labelInfo: 'At least a number, a special character, length between 6 to 16',
    input: { type: 'password', placeholder: 'Password' },
    ErrorMsg: 'Must contain 8-15 characters'
}
const SignUpForm = props => {
    document.title = 'Budget Manager | Register'
    const authCtx = useContext(AuthContext)
    const { isLoading, fetchUserData, addUser } = useFetch()
    const [credentialValidity, setCredentialValidity] = useState('')

    const fullNameInput = useInput(isEmpty)
    const userNameInput = useInput(isUserName)
    const emailInput = useInput(isEmail)
    const passwordInput = useInput(isPassword)

    const formFieldList = [
        { id: 1, static: FULLNAME_INPUT_PROPS, action: fullNameInput },
        { id: 2, static: USERNAME_INPUT_PROPS, action: userNameInput },
        { id: 3, static: EMAIL_INPUT_PROPS, action: emailInput },
        { id: 4, static: PASSWORD_INPUT_PROPS, action: passwordInput }
    ]

    const isFormValid = formFieldList.reduce((validity, field) => validity && field.action.isValidData, true)

    const signUpHandler = async (event) => {
        event.preventDefault()
        const userData = await fetchUserData(USER_DB_URL, {})
        if (userData === null) {
            setCredentialValidity('Please Try after some time. Some Problem Occured !')
        } else {
            const user = userData.find(user => user.email === emailInput.value)
            if (user) {
                setCredentialValidity('Already Exists! Please choose different Email Address')
            } else {
                const userInfo = {
                    id: userData.length + 1,
                    username: userNameInput.value,
                    fullName: fullNameInput.value,
                    email: emailInput.value,
                    password: passwordInput.value
                }
                const response = await addUser(USER_DB_URL, { method: 'POST', body: userInfo })

                if (response) {
                    authCtx.onLogin(userInfo)
                } else {
                    setCredentialValidity('Please Try after some time. Some Problem Occured !')
                }
            }
        }

    }
   
    return (
        <form onSubmit={signUpHandler}>
            {isLoading && <Spinner />}
            <h1 className={classes.form__header}>Register</h1>
            {credentialValidity !== '' && <h6 className={classes.form__wrong_credential}>{credentialValidity}</h6>}
            <Form className={classes.form__content} fieldList={formFieldList} />
            <div className={classes.form__btn_container}>
                <button type='submit' disabled={!isFormValid}>Register</button>
                <button onClick={props.onHide}>Cancel</button>
            </div>
        </form>
    )
}

export default SignUpForm