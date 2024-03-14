import { render, screen } from "@testing-library/react";
import { Application } from "./application";


describe('Application Test', () => {
    test('component renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole('heading', {
            level: 1,
        });
        expect(pageHeading).toBeInTheDocument();


        const sectionHeading = screen.getByRole('heading', {
           level: 2,
        })
        expect(sectionHeading).toBeInTheDocument();


        const nameElement = screen.getByRole("textbox", {
            name: 'Name',
        });
        expect(nameElement).toBeInTheDocument();
        // if two elements have same label text we can pass selector as second argument

        const nameElement2 = screen.getByLabelText('Name', {
            selector: 'input'
        });
        expect(nameElement2).toBeInTheDocument()


        const bioElement = screen.getByRole("textbox", {
            name: "Bio",
        });
        expect(bioElement).toBeInTheDocument();


        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const terms = screen.getByRole("checkbox");
        expect(terms).toBeInTheDocument();

        const terms2 = screen.getByLabelText('Name');
        expect(terms2).toBeInTheDocument();
    })
})