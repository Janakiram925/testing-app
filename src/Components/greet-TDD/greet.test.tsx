import { render, screen } from "@testing-library/react"
import { Greet } from "./greet";


describe('Greet', () => {
    test('test greet hello', () => {
        render(<Greet />);
        const textElement = screen.getByText('Hello');
        expect(textElement).toBeInTheDocument();
    })

    // test.only runs only that particular test case
    // test.skip skips executing that particular test

    test('test with name', () => {
        render(<Greet name='Ram' />);
        const textElement = screen.getByText('Hello Ram');
        expect(textElement).toBeInTheDocument();

    })

})

