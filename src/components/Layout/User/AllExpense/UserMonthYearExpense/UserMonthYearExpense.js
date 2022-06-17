import React,{ Fragment, useEffect, useMemo, useState } from "react";
import Spinner from "../../../../Generic/Spinner/Spinner"; 
import UserMonthlyExpense from '../UserMonthlyExpense/UserMonthlyExpense'

import classes from './UserMonthYearExpense.module.css'

const UserMonthYearExpense = props => {
     
    const yearList = props.yearList
    const yearMonthData = useMemo(() => props.yearMonthData,[props.yearMonthData])
    const [monthList,setMonthList] = useState([])

    const [selectedYear, setSelectedYear] = useState(yearList[0])
    const [selectedMonth, setSelectedMonth] = useState('')
 
    useEffect(() => {
        const monthData = yearMonthData.filter(info => info.year === selectedYear)[0].months
        const initialMonth = monthData[0]
        setMonthList(monthData)
        setSelectedMonth(prevSelectedMonth => {
            const monthValue = monthData.find(month => month === prevSelectedMonth)
            return monthValue? prevSelectedMonth : initialMonth
        })
        
    }, [yearMonthData,selectedYear])


    const changeYearHandler = event => {
        setSelectedYear(event.target.value)
    }
    const changeMonthHandler = event => {
        setSelectedMonth(event.target.value)
    }
    const isValidInput = selectedYear !== '' && selectedMonth !== '' 
     
    if (!isValidInput) {
        return <Spinner />
    } else {
        const monthlyExpenseData = props.allExpense.filter(expense => expense.year === selectedYear 
            && expense.month === selectedMonth) 
        return (
            <Fragment>
                <div className={classes.expense__filter_section}> 
                    <select onChange={changeYearHandler}>
                        {
                            props.yearMonthData.map(info => <option key={info.year} value={info.year}>{info.year}</option>)
                        }
                    </select>
                    <select onChange={changeMonthHandler}>
                        {
                            monthList.map(month => {
                                return <option key={month} value={month}>{month}</option>
                            })
                        }
                    </select>
                </div>
                {isValidInput && 
                    <UserMonthlyExpense 
                        month={selectedMonth} 
                        year={selectedYear} 
                        expenseDetail={monthlyExpenseData} 
                    />}
            </Fragment>
        )
    }
}
export default UserMonthYearExpense