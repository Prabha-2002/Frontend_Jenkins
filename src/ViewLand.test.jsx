import { render, screen, getByRole } from '@testing-library/react';
// import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ViewLand from './ViewLand'
jest.mock('axios'); 
jest.mock('react-router-dom');
jest.mock('react-router-dom');

test('renders heading ', () => {
    render(<ViewLand />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
});


test('checking heading ', () => {
    render(<ViewLand />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toHaveTextContent("REAL ESTATE MANAGEMENT SYSTEM");
});



test('renders sub heading ', () => {
    render(<ViewLand />);
    const linkElement = screen.getByRole("sub");
    expect(linkElement).toBeInTheDocument();
});


test('checking sub heading ', () => {
    render(<ViewLand />);
    const linkElement = screen.getByRole("sub");
    expect(linkElement).toHaveTextContent("LAND DETAILS");
});




