import { render, screen } from "@testing-library/react";
import CoffeeList from "../CoffeeList";
import React from "react";
import { vi } from "vitest";

// Mock CoffeeCard to keep test isolated
vi.mock("../CoffeeCard", () => ({
    default: ({ coffee }) => (
        <div data-testid="coffee-card">{coffee.name}</div>
    ),
}));

describe("CoffeeList Component", () => {
    it("renders the correct number of CoffeeCard components", () => {
        const mockCoffees = [
            { id: 1, name: "Latte" },
            { id: 2, name: "Cappuccino" },
            { id: 3, name: "Espresso" },
        ];

        render(<CoffeeList coffees={mockCoffees} />);

        const coffeeCards = screen.getAllByTestId("coffee-card");
        expect(coffeeCards).toHaveLength(mockCoffees.length);

        // Optionally check that names are rendered
        mockCoffees.forEach((coffee) => {
            expect(screen.getByText(coffee.name)).toBeInTheDocument();
        });
    });

    it("renders nothing if coffees array is empty", () => {
        render(<CoffeeList coffees={[]} />);
        const coffeeCards = screen.queryAllByTestId("coffee-card");
        expect(coffeeCards).toHaveLength(0);
    });
});
