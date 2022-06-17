import { render, screen } from "@testing-library/react"
import WebNavigation from "./WebNavigation"

describe('WebNavigation Component',() =>{
    test('render Add Expense Link', () => {
        render(<WebNavigation />)
        expect(screen.getByText('Add Expense')).toBeInTheDocument()
    })
    test('render View Expense Link', () => {
        render(<WebNavigation />)
        expect(screen.getByText('View Expense')).toBeInTheDocument()
    })
})