import { render, screen } from '@testing-library/react';
import EditOwner from './EditOwner';
import { BrowserRouter } from 'react-router-dom';

jest.mock('axios');
jest.mock('react-router-dom');


it("renders heading field check", () => {
    render(
    <EditOwner />
    );
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  it("checks the heading", () => {
    render(
      <EditOwner />
 );
        const heading = screen.getByRole('heading');
      expect(heading).toHaveTextContent("Update Owner details");
    });


    
it("renders the name", () => {
  render(
    <EditOwner />
);
    const name = screen.getByRole('name');
    expect(name).toBeInTheDocument();
  });

  it("checks the name", () => {
    render(
      <EditOwner />
);
        const name = screen.getByRole('name');
      expect(name).toHaveTextContent("NAME :");
    });


    it("renders and check the input field", () => {
      render(
        <EditOwner />
);
        const name = screen.getByRole('nameinput');
        expect(name).toBeInTheDocument();
      });
    
      it("checks the input is correct or not", () => {
        render(
          <EditOwner />
);
        const name = screen.getByRole('nameinput');
          expect(name).toBeEmptyDOMElement();
        });   
it("renders ithe phone text", () => {
  render(
    <EditOwner />
 );
    const phone = screen.getByRole('phone');
    expect(phone).toBeInTheDocument();
  });

  it("checks the phone text", () => {
    render(
      <EditOwner />);
        const phone = screen.getByRole('phone');
      expect(phone).toHaveTextContent("PHONE :");
    });


    it("renders input phone in the document", () => {
      render(
        <EditOwner />
      );
        const name = screen.getByTestId('phinput');
        expect(name).toBeInTheDocument();
      });
    
      it("checks the field phone is present", () => {
        render(
          <EditOwner />
         );
        const name = screen.getByTestId('phinput');
          expect(name).toBeEmptyDOMElement();
          });
        it("renders input aadhar field check", () => {
          render(
            <EditOwner />
          );
            const ad = screen.getByRole('ad');
            expect(ad).toBeInTheDocument();
          });
        
          it("checks the aadhar is present", () => {
            render(
              <EditOwner />
           );
            const ad = screen.getByRole('ad');
              expect(ad).toHaveTextContent("AADHAAR NUMBER :");
            });
      
    it("renders input aadhar field check", () => {
      render(
        <EditOwner />
       );
        const name = screen.getByRole('aadhaar');
        expect(name).toBeInTheDocument();
      });
    
      it("checks the aadhaar is present", () => {
        render(
          <EditOwner />
          );
        const name = screen.getByRole('aadhaar');
          expect(name).toBeEmptyDOMElement();
        });


        it("renders input number of lands field check", () => {
          render(
            <EditOwner />
          );
            const nooflands = screen.getByRole('nooflands');
            expect(nooflands).toBeInTheDocument();
          });
        
          it("checks the input number of lands  is present", () => {
            render(
              <EditOwner />
              );
            const nooflands = screen.getByRole('nooflands');
              expect(nooflands).toHaveTextContent("NUMBER OF LANDS :");
            });
      
    it("renders input number of lands  field check", () => {
      render(
        <EditOwner />
  );
        const lands = screen.getByTestId('lands');
        expect(lands).toBeInTheDocument();
      });
    
      it("checks the field number of lands is present", () => {
        render(
          <EditOwner />
         );
        const lands = screen.getByTestId('lands');
          expect(lands).toBeEmptyDOMElement();
        });

    