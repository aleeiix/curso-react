import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import Vote from "./index";

describe('Vote Component', () => {
    it('Increases total like by one', () => {
        render(<Vote totalGlobalLikes={20} />)

        expect(screen.getByText(/20/i)).toBeInTheDocument();

        user.click(screen.getByRole('button', {name: /thumbs up/i}));

        expect(screen.getByText(/21/i)).toBeInTheDocument();

        expect(screen.getByRole('button', {name: /thumbs up/i})).toHaveStyle("background: green")
    })

    it('Decreases total like by one', () => {
        render(<Vote totalGlobalLikes={20} />)

        expect(screen.getByText(/20/i)).toBeInTheDocument();

        user.click(screen.getByRole('button', {name: /thumbs down/i}));

        expect(screen.getByText(/19/i)).toBeInTheDocument();

        expect(screen.getByRole('button', {name: /thumbs down/i})).toHaveStyle("background: red")
    })

    it('A user can only vote once', () => {
        render(<Vote totalGlobalLikes={20} />)

        const thumbsUp = screen.getByRole('button', {name: /thumbs up/i})
        const thumbsDown = screen.getByRole('button', {name: /thumbs down/i});

        expect(screen.getByText(/20/i)).toBeInTheDocument();

        user.click(thumbsUp);

        expect(screen.getByText(/21/i)).toBeInTheDocument();

        user.click(thumbsUp);

        expect(screen.getByText(/21/i)).toBeInTheDocument();

        user.click(thumbsDown);

        expect(screen.getByText(/21/i)).toBeInTheDocument();
    })
})