import { render, screen } from '@testing-library/react';
import AddOwner from './AddOwner';

jest.mock('axios');
jest.mock('react-router-dom');


// it("renders heading field check", () => {
//     render(<AddOwner />);
//     const heading = screen.getByRole('heading');
//     expect(heading).toBeInTheDocument();
//   });

  // it("checks the heading", () => {
  //       render(<AddOwner />);
  //       const heading = screen.getByRole('heading');
  //     expect(heading).toHaveTextContent("ADD OWNER");
  //   });


    
it("renders the name", () => {
     render(<AddOwner />);
    const name = screen.getByTestId('name');
    expect(name).toBeInTheDocument();
  });

  it("checks the name", () => {
        render(<AddOwner />);
        const name = screen.getByTestId('name');
        expect(name).toHaveTextContent("NAME :");
    });


    it("renders and check the input field", () => {
        render(<AddOwner />);
        const name = screen.getByTestId('name');
        expect(name).toBeInTheDocument();
      });
    
      // it("checks the input is correct or not", () => {
      //       render(<AddOwner />);
      //       const name = screen.getByTestId('name');
      //       expect(name).toBeEmptyDOMElement();
      //   });   
it("renders ithe phone text", () => {
    render(<AddOwner />);
    const phone = screen.getByRole('phone');
    expect(phone).toBeInTheDocument();
  });

  it("checks the phone text", () => {
        render(<AddOwner />);
        const phone = screen.getByRole('phone');
      expect(phone).toHaveTextContent("PHONE :");
    });


    it("renders input phone in the document", () => {
        render(<AddOwner />);
        const name = screen.getByRole('phinput');
        expect(name).toBeInTheDocument();
      });
    
      it("checks the field phone is present", () => {
            render(<AddOwner />);
            const name = screen.getByRole('phinput');
          expect(name).toBeEmptyDOMElement();
          });
        it("renders input aadhar field check", () => {
            render(<AddOwner />);
            const ad = screen.getByRole('ad');
            expect(ad).toBeInTheDocument();
          });
        
          it("checks the aadhar is present", () => {
                render(<AddOwner />);
                const ad = screen.getByRole('ad');
              expect(ad).toHaveTextContent("AADHAAR NUMBER :");
            });
      
    it("renders input aadhar field check", () => {
        render(<AddOwner />);
        const name = screen.getByRole('aadhaar');
        expect(name).toBeInTheDocument();
      });
    
      it("checks the aadhaar is present", () => {
            render(<AddOwner />);
            const name = screen.getByRole('aadhaar');
          expect(name).toBeEmptyDOMElement();
        });


        it("renders input number of lands field check", () => {
            render(<AddOwner />);
            const nooflands = screen.getByRole('nooflands');
            expect(nooflands).toBeInTheDocument();
          });
        
          it("checks the input number of lands  is present", () => {
                render(<AddOwner />);
                const nooflands = screen.getByRole('nooflands');
              expect(nooflands).toHaveTextContent("NUMBER OF LANDS :");
            });
      
    it("renders input number of lands  field check", () => {
        render(<AddOwner />);
        const lands = screen.getByRole('lands');
        expect(lands).toBeInTheDocument();
      });
    
      it("checks the field number of lands is present", () => {
            render(<AddOwner />);
            const lands = screen.getByRole('lands');
          expect(lands).toBeEmptyDOMElement();
        });

    