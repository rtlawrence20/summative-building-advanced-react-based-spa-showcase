import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../NavBar";
import React from "react";

describe("NavBar Component", () => {
    it("renders all navigation links", () => {
        render(
            <MemoryRouter>
                <NavBar />
            </MemoryRouter>
        );

        // Test that all the links appear
        expect(screen.getByText(/home/i)).toBeInTheDocument();
        expect(screen.getByText(/shop/i)).toBeInTheDocument();
        expect(screen.getByText(/about/i)).toBeInTheDocument();
        expect(screen.getByText(/admin/i)).toBeInTheDocument();
    });
});
