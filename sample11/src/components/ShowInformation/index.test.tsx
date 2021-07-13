import { render, screen, fireEvent, RenderResult, cleanup } from "@testing-library/react";

import ShowInformation from "./index";

describe('ShowInformation Component', () => {

    let wrapper: RenderResult;

    beforeEach(() => {
        wrapper = render(<ShowInformation />);
    })

    it('should modify the name and age', () => {

        const nameInput = wrapper.container.querySelector("input[name='name']") as HTMLInputElement;
        const ageInput = wrapper.container.querySelector("input[name='age']") as HTMLInputElement;

        fireEvent.change(nameInput, {target: {value: 'Aleix'}});
        fireEvent.change(ageInput, {target: {value: 25}});

        expect(nameInput.value).toBe('Aleix');
        expect(ageInput.value).toBe('25');
    })
    
    it('should show the personal information when user click on the button', () => {

        const nameInput = wrapper.container.querySelector("input[name='name']") as HTMLInputElement;
        const ageInput = wrapper.container.querySelector("input[name='age']") as HTMLInputElement;
        const button = wrapper.container.querySelector("button") as HTMLButtonElement;

        fireEvent.change(nameInput, {target: {value: 'Aleix'}});
        fireEvent.change(ageInput, {target: {value: 25}});
        fireEvent.click(button)

        const showInformation = wrapper.container.querySelector(".ShowInformation")

        expect(showInformation).toBeInTheDocument();
    })

    afterAll(cleanup);
})