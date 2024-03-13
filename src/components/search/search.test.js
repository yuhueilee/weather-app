import { fireEvent, render, screen } from "@testing-library/react";
import Search from "./search";

const mockOnSearchChange = jest.fn();

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () =>
            Promise.resolve({
                data: [
                    {
                        latitude: 12.3,
                        longitude: 382.2,
                        name: "London",
                        countryCode: "GB",
                    },
                    {
                        latitude: 272.3,
                        longitude: 312.2,
                        name: "Span",
                        countryCode: "SP",
                    },
                ],
            }),
    });
});

describe("search component", () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it("should display search bar", () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        expect(searchElement).toBeInTheDocument();
    });

    it("should load option initially", async () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        fireEvent.click(searchElement);
        const optionElements = await screen.findAllByRole("paragraph");
        expect(optionElements.length).toBe(2);
    });
});
