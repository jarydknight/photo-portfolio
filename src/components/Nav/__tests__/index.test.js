import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav />);
    })

    // snapshot test
    it('matches snapshot', () => {
        const {asFragment} = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible', () => {
    it('inserts emoji into h2', () => {
        // const {getByLabelText} = render(<Nav />);
        render(<Nav />);
        expect(screen.getByLabelText('camera')).toHaveTextContent('📸')
    })

    it('inserts text into links', () => {
        // const {getByTestId} = render(<Nav />);
        render(<Nav/>);
        expect(screen.getByTestId("link")).toHaveTextContent('Oh Snap!');
        expect(screen.getByTestId('about')).toHaveTextContent('About me');
    })
})