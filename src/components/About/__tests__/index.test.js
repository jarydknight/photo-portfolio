import React from 'React';
import {render, cleanup} from '@testing-library/react';
import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // Renders about test

    // First test
    it ('renders', () => {
        render(<About />)
    });

    // Second test
    it('matches snapshot DOM node structure', () => {
        const {asFragment} = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })

})