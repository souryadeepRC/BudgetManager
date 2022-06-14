import React, { Suspense, useState } from "react"

import classes from './AppEntryForm.module.css'

const LogInForm = React.lazy(() => import('./LogInForm'))
const SignUpForm = React.lazy(() => import('./SignUpForm'))
const Modal = React.lazy(() => import('../Generic/Modal'))


const FORM_TYPE_SIGN_UP = 1
const FORM_TYPE_LOG_IN = 2
const FORM_TYPE_DEFAULT = 0

const AppEntryForm = () => {

    const [formType, setFormType] = useState(FORM_TYPE_DEFAULT)
    const isFormOpen = formType !== FORM_TYPE_DEFAULT 
    const loginHandler = () => {
        setFormType(FORM_TYPE_LOG_IN)
    }
    const signUpHandler = () => {
        setFormType(FORM_TYPE_SIGN_UP)
    }
    const hideModalHandler = () => {
        setFormType(FORM_TYPE_DEFAULT)
    }
    const modalContent = formType === FORM_TYPE_SIGN_UP 
                            ? <SignUpForm onHide={hideModalHandler}/> : <LogInForm onHide={hideModalHandler}/>
 
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <div className={classes.btn__container}>
                <button onClick={loginHandler}>Log In</button>
                <button onClick={signUpHandler}>Sign Up</button>
            </div>
            {isFormOpen && <Modal content ={modalContent} onHide={hideModalHandler}/>}
        </Suspense>
    )
}
export default AppEntryForm