import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Search from "./search";

const mockOnSearchChange = jest.fn();

describe("search component", () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

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

    it("should call fetch once when input value change", async () => {
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
                                name: "Lubango",
                                countryCode: "AO",
                            },
                        ],
                    }),
            });
        });

        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        fireEvent.change(searchElement, { target: { value: "L" } });
        return await waitFor(() =>
            expect(global.fetch).toHaveBeenCalledTimes(1)
        );
    });

    it("should load options when entering input", async () => {
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
                                name: "Lubango",
                                countryCode: "AO",
                            },
                        ],
                    }),
            });
        });

        render(<Search onSearchChange={mockOnSearchChange} />);
        const searchElement = screen.getByRole("combobox");
        fireEvent.change(searchElement, { target: { value: "L" } });
        return expect(screen.findAllByRole("option")).resolves.toHaveLength(2);
    });
});
