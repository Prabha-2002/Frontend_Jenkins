import { render, screen, getByRole } from '@testing-library/react';
// import axios from 'axios'
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ViewOwner from './ViewOwner';
jest.mock('axios'); 
jest.mock('react-router-dom');
jest.mock('react-router-dom');

test('renders heading ', () => {
    render(<ViewOwner />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toBeInTheDocument();
});


test('checking heading ', () => {
    render(<ViewOwner />);
    const linkElement = screen.getByTestId("heading");
    expect(linkElement).toHaveTextContent("REAL ESTATE MANAGEMENT SYSTEM");
});



test('renders sub heading ', () => {
    render(<ViewOwner />);
    const linkElement = screen.getByRole("sub");
    expect(linkElement).toBeInTheDocument();
});


test('checking sub heading ', () => {
    render(<ViewOwner />);
    const linkElement = screen.getByRole("sub");
    expect(linkElement).toHaveTextContent("OWNER DETAILS");
});



