

import useInput from '../../../../hooks/Use-input' 

import classes from './UserAddExpense.module.css'
import formClasses from '../../../Generic/Form/Form.module.css'

import useFetch from '../../../../hooks/Use-fetch'
import Spinner from '../../../Generic/Spinner/Spinner'
import { useEffect, useState } from 'react'
import Form from '../../../Generic/Form/Form'


const EXPENSE_CATEGORY_INPUT_PROPS = {
    label: 'Expense Category',
    input: { type: 'text', placeholder: 'Expense Category' },
    ErrorMsg: 'Enter Expense Category'
}
const EXPENSE_DESC_INPUT_PROPS = {
    label: 'Expense Description',
    input: { type: 'text', placeholder: 'Expense Description' },
    ErrorMsg: 'Enter Expense Description'
}
const EXPENSE_AMOUNT_INPUT_PROPS = {
    label: 'Amount',
    input: { type: 'number', placeholder: 'Amount' ,min:'0',step:'1' },
    ErrorMsg: 'Enter an Amount'
}
const EXPENSE_DATE_INPUT_PROPS = {
    label: 'Date',
    input: { type: 'date', placeholder: 'Expense Date' },
    ErrorMsg: 'Enter Expense Date'
}


const isEmpty = value => value !== ''
const UserAddExpense = props => { 
    const USER_DB_URL = `https://managebudget-12b75-default-rtdb.firebaseio.com/userDetail_DB_${props.userId}.json`
    const [responseValidity, setResponseValidity] = useState(undefined)
    const { isLoading, addExpense } = useFetch()
    const expenseDescriptionInput = useInput(isEmpty)
    const expenseCategoryInput = useInput(isEmpty)
    const expenseAmountInput = useInput(isEmpty)
    const expenseDateInput = useInput(isEmpty)

    const resetForm = (fieldList) => {
        fieldList.forEach(field => {
            field.onResetHandler()
        });
    }
    useEffect(() => {
        let responsetimer;
        if (responseValidity !== undefined) {

            responsetimer = setTimeout(() => {
                setResponseValidity(undefined)
            }, 1000);
        }
        return (() => {
            clearTimeout(responsetimer)
        })
    }, [responseValidity])

    const addExpenseHandler = async (event) => {
        event.preventDefault()
        const expenseInfo = {
            description: expenseDescriptionInput.value,
            category: expenseCategoryInput.value,
            amount: expenseAmountInput.value,
            date: expenseDateInput.value
        }
        const response = await addExpense(USER_DB_URL,{method: 'POST' ,body: expenseInfo})  
        if (response) {
            resetForm([expenseDescriptionInput, expenseCategoryInput, expenseAmountInput, expenseDateInput])
            setResponseValidity(true)
        } else {
            setResponseValidity(false)
        }
    }
    const validResponseContent = <h6 className={`${formClasses.form__wrong_credential} 
                                    ${classes.message__success}`}>Expenses Added Successfully</h6>
    const inValidResponseContent = <h6 className={`${formClasses.form__wrong_credential} 
                                    ${classes.message__error}`}>Some Problem Occured!</h6>

    const formFieldList = [
        { id: 1, static: EXPENSE_DESC_INPUT_PROPS, action: expenseDescriptionInput },
        { id: 2, static: EXPENSE_CATEGORY_INPUT_PROPS, action: expenseCategoryInput },
        { id: 3, static: EXPENSE_AMOUNT_INPUT_PROPS, action: expenseAmountInput },
        { id: 4, static: EXPENSE_DATE_INPUT_PROPS, action: expenseDateInput }
    ]
    const isFormValid = formFieldList.reduce((validity, field) => validity && field.action.isValidData, true)
    return (
        <form className={classes.expense__form} onSubmit={addExpenseHandler}>
            {isLoading && <Spinner />}
            {responseValidity !== undefined && responseValidity && validResponseContent}
            {responseValidity !== undefined && !responseValidity && inValidResponseContent}
            <Form className={classes.form__content} fieldList={formFieldList} />
            <div className={formClasses.form__btn_container}>
                <button type='submit' disabled={!isFormValid}>Add Your Expense</button>
            </div>
        </form>
    )
}

export default UserAddExpense