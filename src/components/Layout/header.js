import React,{ Suspense, useContext, useState } from "react"
import AuthContext from "../context/AuthContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

import classes from './Header.module.css'

const AppEntryForm = React.lazy(() => import('../Entry/AppEntryForm'))
const MobileNavigation = React.lazy(() => import('../Navigations/MobileNavigation'))
const WebNavigation = React.lazy(() => import('../Navigations/WebNavigation'))

const Header = () => {
    const authCtx = useContext(AuthContext)
    const [isIconClicked, setIsIConClicked] = useState(false)
    const clickIconHandler = () => {
        setIsIConClicked(prevState => !prevState)
    }
    const closeNavigationHandler = () => {
        setIsIConClicked(prevState => !prevState)
    }
    const userDetailContent = (
        <div className={classes.user_controls}>
            <h4>Hi {authCtx.username}</h4>
            <button className={classes.logout_btn}
                onClick={authCtx.onLogout}><FontAwesomeIcon icon={faSignOutAlt} />Log Out
            </button>
        </div>) 
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
        <div className={classes.header__container}>

            {isIconClicked &&
                <MediaQuery maxDeviceWidth={800}>
                    <MobileNavigation onClose={closeNavigationHandler} />
                </MediaQuery>
            }
            <div className={classes.header__text_box}>
                {authCtx.isLoggedIn &&
                    <MediaQuery maxDeviceWidth={800}>
                        <p data-testid='menubar' onClick={clickIconHandler}>
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </p>
                    </MediaQuery>
                }
                <h1>Budget Manager</h1>
            </div>

            {authCtx.isLoggedIn && <MediaQuery minDeviceWidth={801}><WebNavigation /></MediaQuery>}
            {authCtx.isLoggedIn && userDetailContent }

            {!authCtx.isLoggedIn && <AppEntryForm />}

        </div>
        </Suspense>
    )
}

export default Header