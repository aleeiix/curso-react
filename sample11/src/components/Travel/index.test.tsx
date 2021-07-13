import { render, screen } from "@testing-library/react";

import Travel from "./index";

describe("Travel Component", () => {
  it("Display text component as snapshot", () => {
    const { container } = render(<Travel />);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <div
          class="card text-center"
          style="width: 20rem;"
        >
          <i
            class="material-icons"
            style="font-size: 5rem;"
          >
            Airplane Mode Active
          </i>
          <h4>
            Travel Anywhere
          </h4>
        </div>
      </div>
    `);
  });

  it("Display header and paragraph", () => {
    render(<Travel />);
    const header = screen.getByRole("heading", { name: /travel anywhere/i });

    // MUESTRA CONSOLE LOG DEL TEMPLATE QUE HAY RENDERIZADO
    // screen.debug();
  });
});
