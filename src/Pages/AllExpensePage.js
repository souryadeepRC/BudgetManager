//import UserAllExpense from '../components/Layout/User/AllExpense/UserAllExpense' 
import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../context/AuthContext'
 
import Spinner from '../components/Generic/Spinner/Spinner' 

const UserAllExpense = React.lazy(() => import('../components/Layout/User/AllExpense/UserAllExpense'))
const ErrorPage = React.lazy(() => import('./ErrorPage'))

const AllExpensePage = () => {
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

    document.title = `Budget Manager`

    if (loggingInfo === undefined) {
        return <Spinner />
    }

    if (loggingInfo) {
        document.title = `Budget Manager | All Expense | ${authCtx.username}`
        return <UserAllExpense userId={authCtx.userId} />
    } else {
        return <ErrorPage />
    }

}
export default AllExpensePage