import CategoryExpense from "../CategoryExpense/CategoryExpense";
import classes from './UserMonthlyExpense.module.css'

const UserMonthlyExpense = props => { 
    const { year, month, expenseDetail: allExpense } = props
    const convertBasedOnCategory = data => {
        let convertedData = []
        const uniqueCategory = [...new Set(data.map(expense => expense.category))]
        uniqueCategory.forEach(category => {
            const categoryData = data.filter(expense => expense.category === category)
            const totalAmount = categoryData.reduce((sum, expense) => sum + parseInt(expense.amount), 0)
            convertedData.push({
                category,
                totalAmount,
                expenseDetail: categoryData

            })
        });
        return convertedData
    }
    const convertedExpenseData = convertBasedOnCategory(allExpense)
    const totalMonthlyExpense = convertedExpenseData.reduce((sum, expense) => sum + expense.totalAmount, 0)
     
    return (
        <div className={classes.expense__detail}>
            <header>Expense for {month} - {year} Rs.{totalMonthlyExpense}</header>
            <div className={classes.expense__container}>
                {convertedExpenseData.map((expense, index) => <CategoryExpense key={index} expense={expense} />)}
            </div>
        </div>
    )
}
export default UserMonthlyExpense