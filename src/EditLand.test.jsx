import { render, screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import EditLand from './EditLand';
jest.mock('axios');
jest.mock('react-router-dom', () => ({
...jest.requireActual('react-router-dom'),
useNavigate: jest.fn(),
}));
const mock = new MockAdapter(axios);

it("renders input land square feet field check", () => {
  render(<EditLand />);
  const landsqft = screen.getByTestId('landsqft');
  expect(landsqft).toBeInTheDocument();
});
it("renders input  land square feet field empty", () => {
  render(<EditLand />);
    const landsqft = screen.getByTestId('landsqft');
    expect(landsqft).toBeEmptyDOMElement();
  });
  it("checks the field name is present", () => {
    render(<EditLand />);
    const lsqft = screen.getByRole('lsqft');
    expect(lsqft).toHaveTextContent("LAND SQUARE FEET :");
  });
it("renders input  land address field check", () => {
  render(<EditLand />);
  const landaddress = screen.getByTestId('landaddress');
  expect(landaddress).toBeInTheDocument();
});
it("renders input  field land address empty", () => {
  render(<EditLand />);
    const landaddress = screen.getByTestId('landaddress');
    expect(landaddress).toBeEmptyDOMElement();
  });
  it("checks the field land address name is present", () => {
    render(<EditLand />);
    const address = screen.getByRole('address');
    expect(address).toHaveTextContent("LAND ADDRESS:");
  });


  it("renders ibutton empty", () => {
    render(<EditLand />);
    const btn = screen.getByRole('upd');
    expect(btn).toBeInTheDocument();
  });

it("renders update button", () => {
  render(<EditLand />);
    const btn = screen.getByRole('upd');
    expect(btn).toHaveTextContent("Update");
  });


