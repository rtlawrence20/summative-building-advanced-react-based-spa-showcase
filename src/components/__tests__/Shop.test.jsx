import { render, screen } from "@testing-library/react";
import React from "react";
import Shop from "../../pages/Shop";
import { CoffeeContext } from "../../context/CoffeeContext";

// Mock child components to isolate Shop
vi.mock("../Search", () => ({
    default: () => <div data-testid="search-component" />,
}));
vi.mock("../CoffeeContainer", () => ({
    default: ({ coffees }) => (
        <div data-testid="coffee-container">
            {coffees.map((c) => (
                <div key={c.id}>{c.name}</div>
            ))}
        </div>
    ),
}));

describe("Shop Component", () => {
    const mockCoffees = [
        { id: 1, name: "Latte" },
        { id: 2, name: "Cappuccino" },
    ];

    it("renders Search and CoffeeContainer components", () => {
        render(
            <CoffeeContext.Provider value={{ coffees: mockCoffees }}>
                <Shop />
            </CoffeeContext.Provider>
        );

        expect(screen.getByTestId("search-component")).toBeInTheDocument();
        expect(screen.getByTestId("coffee-container")).toBeInTheDocument();

        // Coffee names appear in CoffeeContainer
        expect(screen.getByText("Latte")).toBeInTheDocument();
        expect(screen.getByText("Cappuccino")).toBeInTheDocument();
    });

    it("updates CoffeeContainer when context coffees change", () => {
        const { rerender } = render(
            <CoffeeContext.Provider value={{ coffees: mockCoffees }}>
                <Shop />
            </CoffeeContext.Provider>
        );

        const newCoffees = [
            { id: 3, name: "Espresso" },
        ];

        rerender(
            <CoffeeContext.Provider value={{ coffees: newCoffees }}>
                <Shop />
            </CoffeeContext.Provider>
        );

        // New coffee should appear
        expect(screen.getByText("Espresso")).toBeInTheDocument();
    });
});
