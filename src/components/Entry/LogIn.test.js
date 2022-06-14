import { render, screen } from "@testing-library/react"
import LogInForm from "./LogInForm"

describe('LogIn Component',() => {
    test('render "Log In" header text',() =>{
        render(<LogInForm />)
        expect(screen.getByText('LOG IN')).toBeInTheDocument()
    })
})