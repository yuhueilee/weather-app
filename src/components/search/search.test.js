import { fireEvent, render, screen } from "@testing-library/react";

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
        fireEvent.change(searchElement, { target: { value: "L" } });
        return expect(screen.findAllByRole("option")).resolves.toHaveLength(2);
    });

    it("should display option after selected", async () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        fireEvent.change(searchElement, { target: { value: "L" } });
        const optionElement = await screen.findByRole("option", {
            name: "London, GB",
        });
        fireEvent.click(optionElement);
        return expect(screen.getByText("London, GB")).toBeInTheDocument();
    });
});
