import { render, screen } from "@testing-library/react";
import CoffeeContainer from "../CoffeeContainer";
import React from "react";

// We'll mock CoffeeList so we don't depend on its internal rendering
vi.mock("../CoffeeList", () => ({
    default: ({ coffees }) => (
        <div data-testid="coffee-list">Rendering {coffees.length} coffees</div>
    ),
}));

describe("CoffeeContainer Component", () => {
    it("renders 'No coffees found.' when the list is empty", () => {
        render(<CoffeeContainer coffees={[]} />);
        expect(screen.getByText(/no coffees found/i)).toBeInTheDocument();
    });

    it("renders CoffeeList when coffees are provided", () => {
        const mockCoffees = [
            { id: 1, name: "Latte" },
            { id: 2, name: "Cappuccino" },
        ];

        render(<CoffeeContainer coffees={mockCoffees} />);

        // Check that CoffeeList mock was rendered
        expect(screen.getByTestId("coffee-list")).toBeInTheDocument();
        expect(screen.getByText(/2 coffees/i)).toBeInTheDocument();
    });
});
