
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Spinner from '../components/Generic/Spinner/Spinner';


const HomePage = React.lazy(() => import('../Pages/HomePage'))
const ErrorPage = React.lazy(() => import('../Pages/ErrorPage'))
const AddExpensePage = React.lazy(() => import('../Pages/AddExpensePage'))
const AllExpensePage = React.lazy(() => import('../Pages/AllExpensePage'))

const PageRoute = () => {
    const userRouterContent = (
        <Suspense fallback={<Spinner />}>
            <Switch>

                <Route path='/' exact>
                    <Redirect to='/home' />
                </Route>
                <Route path='/home' exact>
                    <HomePage />
                </Route>
                <Route path='/add-expense' exact>
                    <AddExpensePage />
                </Route>
                <Route path='/expenses' exact>
                    <AllExpensePage />
                </Route>
                <Route path='*'>
                    <ErrorPage />
                </Route>
            </Switch>
        </Suspense>)
    return (userRouterContent)
}
export default PageRoute