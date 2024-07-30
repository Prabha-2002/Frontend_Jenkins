import { render, screen } from '@testing-library/react';
import AddLandDetails from './AddLandDetails';

jest.mock('axios');
jest.mock('react-router-dom');

it("renders input land square feet field check", () => {
  render(<AddLandDetails />);
  const landsqft = screen.getByTestId('landsqft');
  expect(landsqft).toBeInTheDocument();
});
it("renders input  land square feet field empty", () => {
    render(<AddLandDetails />);
    const landsqft = screen.getByTestId('landsqft');
    expect(landsqft).toBeEmptyDOMElement();
  });
  it("checks the field name is present", () => {
    render(<AddLandDetails />);
    const lsqft = screen.getByRole('lsqft');
    expect(lsqft).toHaveTextContent("LAND SQUARE FEET:");
  });
it("renders input  land address field check", () => {
  render(<AddLandDetails />);
  const landaddress = screen.getByTestId('landaddress');
  expect(landaddress).toBeInTheDocument();
});
it("renders input  field land address empty", () => {
    render(<AddLandDetails />);
    const landaddress = screen.getByTestId('landaddress');
    expect(landaddress).toBeEmptyDOMElement();
  });
  it("checks the field name is present", () => {
    render(<AddLandDetails />);
    const address = screen.getByRole('address');
    expect(address).toHaveTextContent("LAND ADDRESS:");
  });


  it("renders input field empty", () => {
    render(<AddLandDetails />);
    const idtitle = screen.getByTestId('id-heading');
    expect(idtitle).toBeInTheDocument();
  });

it("renders land  address input field empty", () => {
    render(<AddLandDetails />);
    const idheading = screen.getByTestId('id-heading');
    expect(idheading).toHaveTextContent("Select Owner:");
  });

  it("renders input field empty", () => {
    render(<AddLandDetails />);
    const addbtn = screen.getByRole('addbtn');
    expect(addbtn).toBeInTheDocument();
  });

it("renders land  address input field empty", () => {
    render(<AddLandDetails />);
    const addbtn = screen.getByRole('addbtn');
    expect(addbtn).toHaveTextContent("ADD");
  });


