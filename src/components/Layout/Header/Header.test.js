import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import AuthContext from "../context/AuthContext"
import Header from "./Header"

describe('Header Component', () => {
    test('render "Budget Manager" text ', () => {
        render(<Header />)
        expect(screen.getByText('Budget Manager', { exact: true })).toBeInTheDocument()
    })
    test('render "Log In Button"', () => {
        render(<AuthContext.Provider value={{ isLoggedIn: false }}><Header /></AuthContext.Provider>)
        expect(screen.getByText('Log In')).toBeInTheDocument()
    })
    test('render "Sign Up Button"', () => {
        render(<AuthContext.Provider value={{ isLoggedIn: false }}><Header /></AuthContext.Provider>)
        expect(screen.getByText('Sign Up', { exact: false })).toBeInTheDocument()
    })
    test('render "User_1" Home Page ', () => {
        render(<AuthContext.Provider value={{ isLoggedIn: true, username: 'User_1' }}><Header /></AuthContext.Provider>)
        expect(screen.getByText('Hi User_1', { exact: false })).toBeInTheDocument()
    })
    test('render "User_2" Home Page ', () => {
        render(<AuthContext.Provider value={{ isLoggedIn: true, username: 'User_2' }}><Header /></AuthContext.Provider>)
        expect(screen.getByText('Hi User_2', { exact: false })).toBeInTheDocument()
    })
    test('render "User_2" Log Out Button ', () => {
        render(<AuthContext.Provider value={{ isLoggedIn: true, username: 'User_2' }}><Header /></AuthContext.Provider>)
        expect(screen.getByText('Log Out', { exact: false })).toBeInTheDocument()
    })
    test('render "User_1" Menu Bar Icon ', () => { 
        render(<AuthContext.Provider value={{ isLoggedIn: true, username: 'User_1' }}><Header /></AuthContext.Provider>)
        expect(screen.queryByTestId('menubar')).toBeNull()
    })
})