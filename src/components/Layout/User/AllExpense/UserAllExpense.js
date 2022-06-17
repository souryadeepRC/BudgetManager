import { useEffect, useMemo, useState, useCallback, Fragment } from "react"
import useFetch from "../../../../hooks/Use-fetch"
import Spinner from '../../../Generic/Spinner/Spinner'
import UserMonthYearExpense from "../AllExpense/UserMonthYearExpense/UserMonthYearExpense";

import classes from './UserAllExpense.module.css'

 

/* const DUMMY_EXPENSES = [
    { 'amount': "100", 'category': "Food1", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food1", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food1", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food1", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food1", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food1", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },



    { 'amount': "100", 'category': "Food2", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food2", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food2", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food2", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food2", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },

    { 'amount': "100", 'category': "Food3", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "60", 'category': "Food4", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food5", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },

    { 'amount': "100", 'category': "Food6", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food6", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food6", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food6", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },
    { 'amount': "100", 'category': "Food6", 'date': new Date("2022-06-16"), 'description': "Snacks", 'month': "June", 'year': "2022" },

    { 'amount': "5000", 'category': "Rent", 'date': new Date("2022-06-16"), 'description': "Rent", 'month': "June", 'year': "2022" },


    { 'amount': "54", 'category': "Food", 'date': new Date("2021-06-16"), 'description': "Snacks", 'month': "June", 'year': "2021" },
    { 'amount': "100", 'category': "Food", 'date': new Date("2022-07-01"), 'description': "Snacks", 'month': "July", 'year': "2022" },
    { 'amount': "120", 'category': "Food", 'date': new Date("2022-05-17"), 'description': "Meat", 'month': "May", 'year': "2022" },
    { 'amount': "50", 'category': "Drinks", 'date': new Date("2021-07-23"), 'description': "Pepsi", 'month': "July", 'year': "2021" }
].sort((a, b) => a.date - b.date) */
const UserAllExpense = props => {
    const { userId } = props;
    const USER_DB_URL = useMemo(() => `https://managebudget-12b75-default-rtdb.firebaseio.com/userDetail_DB_${userId}.json`, [userId]);

    const [expense, setExpense] = useState(undefined)
    const { isLoading, fetchExpense } = useFetch()

    const getYearMonthData = (data) => {
        let result = []
        const getUniqueYear = [...new Set(data.map(expense => expense.year))].sort((a, b) => b - a)
        getUniqueYear.forEach(yearValue => {
            const yearData = expense.filter(expense => expense.year === yearValue)
            const monthData = [...new Set(yearData.map(expense => expense.month))]
            result.push({
                year: yearValue,
                months: monthData
            })
        });
        return result
    }

    const fetchFoodHandler = useCallback(async () => {
        const expenseData = await fetchExpense(USER_DB_URL)
        setExpense(expenseData)
    }, [USER_DB_URL, fetchExpense])

    useEffect(() => {
        fetchFoodHandler()
    }, [fetchFoodHandler])

    let yearMonthDetail = []
    const isRecordFound = expense && expense.length > 0
    const isDataLoaded = !isLoading && isRecordFound
    if (isDataLoaded) {
        yearMonthDetail = getYearMonthData(expense)
    }

    const yearList = [...new Set(yearMonthDetail.map(info => info.year))]
    
    if (isLoading) {
        return <Spinner />
    }
    if (isRecordFound === false && !isLoading) {
        return <article className='message__text norecord_message'>--- No Record Found! --- </article>
    }
    if (isDataLoaded) {
        return (
            <Fragment>
                <header className={classes.expense__section}>Expense Dashboard</header>
                {isDataLoaded &&
                    <UserMonthYearExpense
                        allExpense={expense}
                        yearList={yearList}
                        yearMonthData={yearMonthDetail}
                    />}
            </Fragment>

        )
    }

}
export default UserAllExpense