import classes from './DashboardItem.module.css'
const DashboardItem = props => {
    const widthPercentage = ((props.totalAmount/props.yearlyTotal)*100).toFixed(2)+'%' 
    return (
        <div className={classes.dashboard__item}>
            <article className={classes.item__month}>{props.month}</article>
            <section className={classes.item__percentage__section}>
                <article style={{width:widthPercentage}}>&nbsp;</article> 
            </section> 
            <article className={classes.item__amount}>Rs. {props.totalAmount}</article>
        </div>
    )
}
export default DashboardItem