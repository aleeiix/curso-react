import { render, screen, fireEvent, RenderResult } from "@testing-library/react";

import ShowInformation from "./index";

describe('ShowInformation Component', () => {

    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = render(<ShowInformation />);
    })

    // it('Render with expected values', () => {

    //     expect(screen.getByRole('cell', {name: /john smith/i})).toBeInTheDocument();
    //     expect(screen.getByRole('cell', {name: /designer/i})).toBeInTheDocument();
    // })

    // it('Render with correct class', () => {
    //     render(<Table employees={fakeEmployees} />)

    //     expect(screen.getByRole('table')).toHaveAttribute('class', 'table')
    // })
})