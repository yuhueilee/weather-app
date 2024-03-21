import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App";

describe("app component", () => {
    it("should display weather description after option is selected", async () => {
        render(<App />);
        const searchElement = screen.getByRole("combobox");
        await userEvent.type(searchElement, "London");
        const optionElement = await screen.findByRole("option", {
            name: "London, GB",
        });
        await userEvent.click(optionElement);
        return expect(screen.getByText("Daily")).toBeInTheDocument();
    });
});
