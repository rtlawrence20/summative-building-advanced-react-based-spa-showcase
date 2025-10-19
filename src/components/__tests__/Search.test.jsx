import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../Search";
import React from "react";
import { vi } from "vitest";

describe("Search Component", () => {
    const mockCoffees = [
        { id: 1, name: "Latte", origin: "Italy", price: 3.5 },
        { id: 2, name: "Cappuccino", origin: "Italy", price: 4.0 },
        { id: 3, name: "Espresso", origin: "Brazil", price: 2.5 },
    ];

    let setFilteredCoffees;

    beforeEach(() => {
        setFilteredCoffees = vi.fn();
        render(<Search coffees={mockCoffees} setFilteredCoffees={setFilteredCoffees} />);
    });

    it("renders all filter inputs", () => {
        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/max price/i)).toBeInTheDocument();

        // Origins checkboxes
        expect(screen.getByLabelText("Italy")).toBeInTheDocument();
        expect(screen.getByLabelText("Brazil")).toBeInTheDocument();

        // Reset button
        expect(screen.getByText(/reset/i)).toBeInTheDocument();
    });

    it("filters by name", () => {
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Latte" } });

        // useEffect runs after state updates, so setFilteredCoffees should be called
        expect(setFilteredCoffees).toHaveBeenCalledWith([
            { id: 1, name: "Latte", origin: "Italy", price: 3.5 },
        ]);
    });

    it("filters by origin", () => {
        fireEvent.click(screen.getByLabelText("Brazil"));

        expect(setFilteredCoffees).toHaveBeenCalledWith([
            { id: 3, name: "Espresso", origin: "Brazil", price: 2.5 },
        ]);
    });

    it("filters by max price", () => {
        fireEvent.change(screen.getByLabelText(/max price/i), { target: { value: "3.0" } });

        expect(setFilteredCoffees).toHaveBeenCalledWith([
            { id: 3, name: "Espresso", origin: "Brazil", price: 2.5 },
        ]);
    });

    it("resets filters when reset button is clicked", () => {
        // Change some filters first
        fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Latte" } });
        fireEvent.click(screen.getByLabelText("Italy"));

        // Click reset
        fireEvent.click(screen.getByText(/reset/i));

        // All filters cleared, all coffees should be returned
        expect(setFilteredCoffees).toHaveBeenCalledWith(mockCoffees);
    });
});
