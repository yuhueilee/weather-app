import { render, screen } from "@testing-library/react";
import Search from "./search";

const mockOnSearchChange = jest.fn();

describe("search component", () => {
    it("should display search bar", () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        expect(searchElement).toBeInTheDocument();
    });
});
