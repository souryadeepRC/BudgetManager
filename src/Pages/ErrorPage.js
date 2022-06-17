import {useHistory} from'react-router-dom'
import errorPageImage from '../../src/assets/error_page.png'
const ErrorPage = () => {
    const history = useHistory()
    document.title = 'Budget Manager | Page Not Found'
    return (
        <div className='error_page_container'>
            <header>Sorry for this inconvenience</header>
            <article onClick={() => history.push('/BudgetManager/home')}>Click here to Redirect to our landing page</article>
            <div className='error_page_image'>
                <img src={errorPageImage} alt='Sorry for your trouble' />
            </div>
        </div>
    )
}
export default ErrorPage