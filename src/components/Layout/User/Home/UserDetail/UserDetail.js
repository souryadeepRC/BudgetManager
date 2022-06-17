import { useCallback, useEffect, useMemo, useState } from 'react'
import useFetch from '../../../../../hooks/Use-fetch'
import classes from './UserDetail.module.css'
import Spinner from '../../../../Generic/Spinner/Spinner'
/* const DUMMY_USER = {
    id: 1, username: 'Souryadeep', email: 'roychowdhurysouryadeep@gmail.com', fullName: 'Souryadeep Roy Chowdhury', password: 'DeepSourya#1234'
} */
const USER_DB_URL = 'https://managebudget-12b75-default-rtdb.firebaseio.com/users.json'
const UserDetail = props => {

    const userId = useMemo(() => props.userId, [props])
    const { isLoading, fetchUser } = useFetch()

    const [userInfo, setUserInfo] = useState(undefined)
    const getUserData = useCallback(async () => {
        const user = await fetchUser(USER_DB_URL, parseInt(userId))

        setUserInfo(user)
    }, [fetchUser, userId])
    useEffect(() => {
        if (!userInfo) {
            getUserData()
        }
    }, [userInfo, getUserData])
    if (userInfo === undefined || isLoading) {
        return <Spinner />
    }
    if (userInfo === null) {
        return (<article className={classes.error_message}>Problem Occured !</article>)
    }
    return (
        <div className={classes.user__detail}>
            <header className={classes.user__detail__header}>Welcome {userInfo.username}</header>
            <section className={classes.user__detail__info}>
                <div>
                    <article>Full Name :</article>
                    <article>{userInfo.fullName}</article>
                </div>
                <div>
                    <article>E-mail :</article>
                    <article>{userInfo.email}</article>
                </div>
            </section>

        </div>

    )
}
export default UserDetail