import React,{ Suspense, useContext, useState } from "react"
import AuthContext from "../../../context/AuthContext"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

import AppEntryForm from '../../Entry/AppEntryForm'

import classes from './Header.module.css'
import Spinner from "../../Generic/Spinner/Spinner"; 
import { useHistory } from "react-router-dom";
 
const MobileNavigation = React.lazy(() => import('../../Navigations/MobileNavigation/MobileNavigation'))
const WebNavigation = React.lazy(() => import('../../Navigations/WebNavigation/WebNavigation'))

const MOBILE_DEVICE_MAX_WIDTH = 800
const NON_MONILE_DEVICE_MIN_WIDTH = 801
const Header = () => {
    const authCtx = useContext(AuthContext)
    const history = useHistory()
    const [isIconClicked, setIsIConClicked] = useState(false)
    const clickIconHandler = () => {
        setIsIConClicked(prevState => !prevState)
    } 
    const logOutHandler = () => {
        authCtx.onLogout()
        history.push('/home')
    }
    const userDetailContent = (
        <div className={classes.user_controls}>
            <h4>Hi {authCtx.username}</h4>
            <button className={classes.logout_btn}
                onClick={logOutHandler}><FontAwesomeIcon icon={faSignOutAlt} />Log Out
            </button>
        </div>) 
    return (
        <Suspense fallback={<Spinner/>}>
        <div className={classes.header__container}>

            {isIconClicked &&
                <MediaQuery maxDeviceWidth={MOBILE_DEVICE_MAX_WIDTH}>
                    <MobileNavigation onClose={clickIconHandler} />
                </MediaQuery>
            }
            <div className={classes.header__text_box}>
                {authCtx.isLoggedIn &&
                    <MediaQuery maxDeviceWidth={MOBILE_DEVICE_MAX_WIDTH}>
                        <p data-testid='menubar' onClick={clickIconHandler}>
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                        </p>
                    </MediaQuery>
                }
                <h1>Budget Manager</h1>
            </div>

            {authCtx.isLoggedIn && 
                <MediaQuery minDeviceWidth={NON_MONILE_DEVICE_MIN_WIDTH}><WebNavigation /></MediaQuery>}
            {authCtx.isLoggedIn && userDetailContent }

            {!authCtx.isLoggedIn && <AppEntryForm />}

        </div>
        </Suspense>
    )
}

export default Header