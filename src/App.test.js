import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders "Budget Manager" Text present', () => {
    render(<App />);
    const linkElement = screen.getByText('Budget Manager', { exact: false });
    expect(linkElement).toBeInTheDocument();
  });

})
