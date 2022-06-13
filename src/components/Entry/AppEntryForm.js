import { Fragment, useState } from "react"
import Modal from "../Generic/Modal"
import SignUpForm from "./SignUpForm"
import LogInForm from './LogInForm'

const FORM_TYPE_SIGN_UP = 1
const FORM_TYPE_LOG_IN = 2
const FORM_TYPE_DEFAULT = 0

const AppEntryForm = () => {
    console.log('AppEntryForm LOADED')

    const [formType, setFormType] = useState(FORM_TYPE_DEFAULT)
    const isFormOpen = formType !== FORM_TYPE_DEFAULT 
    const loginHandler = () => {
        console.log('Log In')
        setFormType(FORM_TYPE_LOG_IN)
    }
    const signUpHandler = () => {
        console.log('Sign Up')
        setFormType(FORM_TYPE_SIGN_UP)
    }
    const hideModalHandler = () => {
        setFormType(FORM_TYPE_DEFAULT)
    }
    const modalContent = formType === FORM_TYPE_SIGN_UP 
                            ? <SignUpForm onHide={hideModalHandler}/> : <LogInForm onHide={hideModalHandler}/>
    return (
        <Fragment>
            <div>
                <button onClick={loginHandler}>Log In</button>
                <button onClick={signUpHandler}>Sign Up</button>
            </div>
            {isFormOpen && <Modal content ={modalContent} onHide={hideModalHandler}/>}
        </Fragment>
    )
}
export default AppEntryForm