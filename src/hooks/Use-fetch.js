import {  useState,useCallback } from "react"

const useFetch = () => {

    const [isLoading, setIsLoading] = useState(false)
    const convertDataToArray = async (data) => {
        const userData = []
        if (data != null) {
            for (const key in data) {
                userData.push({
                    id: data[key].id,
                    email: data[key].email,
                    password: data[key].password,
                    username: data[key].username,
                    fullName: data[key].fullName,
                })
            }
        }
        return userData
    }
    const convertExpenseDataToArray = async (data) => {
        const expenseData = []
        if (data != null) {
            for (const key in data) {
                expenseData.push({
                    description: data[key].description,
                    category: data[key].category,
                    amount: data[key].amount,
                    date: new Date(data[key].date),
                    month: (new Date(data[key].date)).toLocaleDateString('en-US',{month:'long'}),
                    year:(new Date(data[key].date)).toLocaleDateString('en-US',{year:'numeric'})
                })
            }
        }
        return expenseData.sort((a, b) => a.date - b.date)
    }
    const sendRequest = async (url, requestConfig) => {
        setIsLoading(true)
        try {
            const response = await fetch(url, {
                method: requestConfig ? requestConfig.method : 'GET',
                body: requestConfig ? JSON.stringify(requestConfig.body) : null,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setIsLoading(false)
            return data
        } catch (error) {
            throw new Error('Some Problem Occured!')
        }
    }
    const fetchUserData = async (url) => {
        try {
            const data = await sendRequest(url, {})
            const convertedData = await convertDataToArray(data)
            setIsLoading(false)
            return convertedData
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
        return null
    }
    const checkUserExistance = async (url, email) => {
        try {
            const data = await sendRequest(url, {})
            const convertedData = await convertDataToArray(data)
            setIsLoading(false)
            return convertedData.find(user => user.email === email)
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
        return null
    }
    const addUser = async (url, requestConfig) => {
        try {
            const data = await sendRequest(url, requestConfig)
            if (data) {
                setIsLoading(false)
                return true
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
        return false
    }
    const fetchUser = async (url,userId) => {
        try {
            const data = await sendRequest(url, {})
            const convertedData = await convertDataToArray(data) 
            setIsLoading(false)
            return convertedData.find(user => user.id === userId)
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
        return null
    }
    const addExpense = async (url,requestConfig) => { 
        try {
            const data = await sendRequest(url, requestConfig)
            if (data) {
                setIsLoading(false)
                return true
            }
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
        return false
    }
    const fetchExpense =   useCallback(async (url) => {
        setIsLoading(true)
        try {
            const data = await sendRequest(url, {})
            const convertedData = await convertExpenseDataToArray(data)
            setIsLoading(false)
            return convertedData
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false)
        return null
    },[])
    return {
        isLoading,
        fetchUserData,
        checkUserExistance,
        addUser,
        fetchUser,
        addExpense,
        fetchExpense
    }

}
export default useFetch