import { render, screen, waitFor } from "@testing-library/react";
import Search from "./search";

const mockOnSearchChange = jest.fn();

describe("search component", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it("should display search bar", () => {
        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        expect(searchElement).toBeInTheDocument();
    });

    it("should load static option initially", async () => {
        jest.spyOn(global, "fetch").mockImplementationOnce(() => {
            return Promise.resolve({
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

        render(<Search onSearchChange={mockOnSearchChange} />);
        await waitFor(() => {
            // screen.debug();
            return expect(global.fetch).toHaveBeenCalledTimes(2);
        });

        // const optionElements = await screen.findAllByRole("option");
        // expect(optionElements.length).toBe(2);
    });
});
