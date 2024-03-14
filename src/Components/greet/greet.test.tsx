import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";
test('test check for greet component', () => {
    render(<Greet />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument()
})