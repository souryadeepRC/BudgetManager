import React, { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from 'react-router-dom'
import useFetch from "../../../../../hooks/Use-fetch";
import Spinner from "../../../../Generic/Spinner/Spinner";
import classes from './HomeDashboard.module.css'
import DashboardItem from './DashboardItem/DashboardItem' 

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
var MONTH_LIST = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
/* 
var DUMMY_YEARLY_DATA = [{ month: 'January', totalAmount: 0 },
{ month: 'February', totalAmount: 0 },
{ month: 'March', totalAmount: 0 },
{ month: 'April', totalAmount: 0 },
{ month: 'May', totalAmount: 0 },
{ month: 'June', totalAmount: 6860 },
{ month: 'July', totalAmount: 0 },
{ month: 'August', totalAmount: 0 },
{ month: 'September', totalAmount: 0 },
{ month: 'October', totalAmount: 0 },
{ month: 'November', totalAmount: 0 },
{ month: 'December', totalAmount: 0 }] */
const HomeDashboard = props => {
    //const [selectedYear, setSelectedYear] = useState('')
    const [selectedYearData, setSelectedYearData] = useState(undefined)
    const [expenseData, setExpenseData] = useState(undefined)
    const [yearList,setYearList]=useState([])
    const history = useHistory()

    const userId = useMemo(() => props.userId, [props])
    const USER_DB_URL = useMemo(() => `https://managebudget-12b75-default-rtdb.firebaseio.com/userDetail_DB_${userId}.json`, [userId]);
    const { isLoading, fetchExpense } = useFetch()

    const getExpenseData = useCallback(async () => {
        const data = await fetchExpense(USER_DB_URL)
        setExpenseData(data)
    }, [fetchExpense, USER_DB_URL])

    useEffect(() => {
        if (expenseData === undefined) {
            getExpenseData();
        }
    }, [expenseData, getExpenseData])

    const calculateAnalysisData = selectedYear => {
        const info = expenseData.filter(expense => expense.year === String(selectedYear))
        const resultData = []
        MONTH_LIST.forEach(month => {
            const totalAmount = info.filter(expense => expense.month === month)
                    .reduce((sum, expense) => sum + parseInt(expense.amount), 0)
            resultData.push({
                month,
                totalAmount
            })
        });
        return resultData
    }
     
    if (!selectedYearData && expenseData && expenseData != null) { 
        const yearArray = [...new Set(expenseData.map(expesne => parseInt(expesne.year)))].sort((a, b) => b - a);

        const choosenYear = yearArray[0]
        const analysisData = calculateAnalysisData(choosenYear)

        if(yearList.length === 0){
            setYearList(yearArray)
        }
        setSelectedYearData({
            choosenYear,
            analysisData
        }) 
    } 

    const changeYearHandler = event => {
        const choosenYear = event.target.value
        const analysisData = calculateAnalysisData(choosenYear)
        setSelectedYearData({
            choosenYear,
            analysisData
        })
    }

    const showMonthWiseBreakup = () => {
        history.push('/BudgetManager/expenses')
    }
    const isInvalidResponse = !selectedYearData || expenseData === undefined || isLoading

    if (isInvalidResponse) {
        return <Spinner />
    }
    if (expenseData === null) {
        return (<article className='message__text error_message'>Problem Occured !</article>)
    }
    if (selectedYearData.choosenYear === undefined) {
        return (<article className='message__text norecord_message'> --- No Record Found ! ---</article>)
    }
    if(!isInvalidResponse && expenseData !== null){
        const yearlyTotal = selectedYearData.analysisData.reduce((sum, expense) => sum + expense.totalAmount, 0)
        return (
            <Fragment>
                <div className={classes.dashboard__filter__container}>
                    <select defaultValue={selectedYearData.choosenYear} onChange={changeYearHandler}>
                        {yearList.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                </div>
                <section className={classes.dashboard__container}>
                    {
                        selectedYearData.analysisData.map((info, index) => {
                            return (<DashboardItem key={index}
                                month={info.month}
                                totalAmount={info.totalAmount}
                                yearlyTotal={yearlyTotal} />)
                        })
                    }
                </section>
                <div className={classes.month_wiseBreakup_link}>
                    <button onClick={showMonthWiseBreakup}>View Month Wise Breakup</button>
                </div>
            </Fragment>
        )
    }
    
}
export default HomeDashboard