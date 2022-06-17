import  bannerImage from '../../../../assets/Banner_1.jpg'
import  budgetImage from '../../../../assets/Banner_2.jpg'
import classes from './CustomHome.module.css'
const CustomHome = () => {
    return (
        <div className={classes.home__container}>
            <header>Manage your budget With us</header>
            <div className={classes.home__banner__box}>
                <img src={bannerImage} alt='Optimize Your Budget'/>
            </div>
            <header>Controlling the budget becomes crucial in the recent days </header>
            <div className={classes.home__banner__box}>
                <img src={budgetImage} alt='Plan Your Budget'/>
            </div>
        </div>
    )
}
export default CustomHome