import classes from './CategoryExpense.module.css'

const CategoryExpense = props => {
    //console.log(props);
    const { expense } = props
    return (
        <div className={classes.expense__box}>
            <header>{expense.category}</header>
            <section>
                {
                    expense.expenseDetail.map((expense, index) => {
                        const day = new Date(expense.date).toLocaleDateString('en-US', { month: 'short',weekday: 'long', day: 'numeric' })
                        return (
                            <article key={index}>
                                <p>{expense.description}</p>
                                <p>{day}</p>
                                <p>Rs. {expense.amount}</p>
                            </article>
                        )
                    })
                }
            </section>
            <footer>Total : Rs. {expense.totalAmount}</footer>
        </div>)
}

export default CategoryExpense
