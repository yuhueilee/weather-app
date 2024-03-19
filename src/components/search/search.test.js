import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./search";

const mockOnSearchChange = jest.fn();

describe("search component", () => {
    it("should display search bar", () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        return expect(searchElement).toBeInTheDocument();
    });

    it("should display placeholder text", () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const textElement = screen.getByText("Search for city");
        return expect(textElement).toBeInTheDocument();
    });

    it("should load options when entering input", async () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        await userEvent.type(searchElement, "L");
        return expect(screen.findAllByRole("option")).resolves.toHaveLength(2);
    });

    it("should display option after selected", async () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        await userEvent.type(searchElement, "L");
        const optionElement = await screen.findByRole("option", {
            name: "London, GB",
        });
        await userEvent.click(optionElement);
        return expect(screen.getByText("London, GB")).toBeInTheDocument();
    });
});
