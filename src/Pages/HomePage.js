import React, { Suspense, useContext, useEffect, useState } from "react";

import AuthContext from "../context/AuthContext";
import Spinner from "../components/Generic/Spinner/Spinner";

const CustomHome = React.lazy(() => import('../components/Layout/Custom/Home/CustomHome'))
const UserHome = React.lazy(() => import('../components/Layout/User/Home/UserHome'))

const HomePage = () => {
    const authCtx = useContext(AuthContext)
    
    const [loggingInfo, setLoggingInfo] = useState(undefined)
    const { isLoggedIn } = authCtx
    useEffect(() => {
        let loggingInfoTimer;
        if (!isLoggedIn) {
            if (loggingInfo === undefined) {
                loggingInfoTimer = setTimeout(() => setLoggingInfo(isLoggedIn), 1);
            }
        } else {
            setLoggingInfo(isLoggedIn)
        }

        return (() => clearTimeout(loggingInfoTimer))
    }, [isLoggedIn, loggingInfo])

    if (loggingInfo === undefined) {
        document.title = `Budget Manager | Home`
        return <Spinner />
    } else {
        document.title = `Budget Manager | ${isLoggedIn ? authCtx.username : 'Home'}`
    }

    return (
        <Suspense fallback={<Spinner />}>
            {isLoggedIn && <UserHome userId={authCtx.userId} />}
            {!isLoggedIn && <CustomHome />}
        </Suspense>
    )
}
export default HomePage