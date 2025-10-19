import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "../../pages/Home";

describe("Home Component", () => {
    it("renders the main heading", () => {
        render(<Home />);
        expect(
            screen.getByRole("heading", { name: /welcome to roastcraft coffee/i })
        ).toBeInTheDocument();
    });

    it("renders the content paragraphs", () => {
        render(<Home />);
        expect(
            screen.getByText(/discover our curated collection of coffees/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/explore our shop, learn about our story/i)
        ).toBeInTheDocument();
    });
});
