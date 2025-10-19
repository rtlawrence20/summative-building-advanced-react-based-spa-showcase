import { render, screen } from "@testing-library/react";
import CoffeeCard from "../CoffeeCard";
import React from "react";

describe("CoffeeCard Component", () => {
    it("renders coffee details correctly", () => {
        const mockCoffee = {
            name: "Espresso",
            img: "espresso.jpg",
            desc: "Strong and rich flavor",
            origin: "Italy",
            price: "3.50",
        };

        render(<CoffeeCard coffee={mockCoffee} />);

        expect(screen.getByText(/espresso/i)).toBeInTheDocument();
        expect(screen.getByText(/strong and rich flavor/i)).toBeInTheDocument();
        expect(screen.getByText(/italy/i)).toBeInTheDocument();
        expect(screen.getByText(/\$3.50/i)).toBeInTheDocument();
        expect(screen.getByAltText(/espresso/i)).toBeInTheDocument();
    });

    it("renders fallback text and placeholder image when missing data", () => {
        render(<CoffeeCard coffee={{}} />);

        expect(screen.getByText(/unnamed coffee/i)).toBeInTheDocument();
        expect(screen.getByText(/no description/i)).toBeInTheDocument();
        expect(screen.getByText(/unknown/i)).toBeInTheDocument();
        expect(screen.getByText(/\$0.00/i)).toBeInTheDocument();
        expect(screen.getByAltText(/placeholder coffee/i)).toBeInTheDocument();
    });
});
