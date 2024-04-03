import { screen, render } from "@testing-library/react";
import { Skills } from "./skills";

describe('Skills component', () => {
    const skills = ['HTML', 'CSS', 'JavaScript'];

    test('renders correctly', () => {
        render(<Skills skills={skills}/>);
        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test('renders all list elements', () => {
        render(<Skills skills={skills}/>);
        const listItemElements = screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length);
    });

    test('renders login button', () => {
        render(<Skills skills={skills}/>);
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument();
    })
    test('should not render start learning button', () => {
        render(<Skills skills={skills}/>);
        const startLearningButton = screen.queryByRole('button', {
            name: 'Start learning'
        });
        expect(startLearningButton).not.toBeInTheDocument();
    })
})