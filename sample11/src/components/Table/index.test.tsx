import { render, screen } from "@testing-library/react";
import fakeEmployees from "./employees";

import Table from "./index";

describe('Table Component', () => {
    it('Render with expected values', () => {
        render(<Table employees={fakeEmployees} />)

        expect(screen.getByRole('cell', {name: /john smith/i})).toBeInTheDocument();
        expect(screen.getByRole('cell', {name: /designer/i})).toBeInTheDocument();
    })

    it('Render with correct class', () => {
        render(<Table employees={fakeEmployees} />)

        expect(screen.getByRole('table')).toHaveAttribute('class', 'table')
    })
})