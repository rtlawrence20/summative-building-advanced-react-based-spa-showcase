import { render, screen, fireEvent } from "@testing-library/react";
import AdminPortal from "../../pages/AdminPortal";
import React from "react";
import { CoffeeContext } from "../../context/CoffeeContext";
import { vi } from "vitest";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        Outlet: () => <div data-testid="outlet" />,
    };
});

describe("AdminPortal Component", () => {
    const mockCoffees = [
        { id: 1, name: "Latte" },
        { id: 2, name: "Cappuccino" },
    ];

    const renderWithContext = ({ coffees = mockCoffees, loading = false, error = null } = {}) => {
        render(
            <CoffeeContext.Provider value={{ coffees, loading, error }}>
                <AdminPortal />
            </CoffeeContext.Provider>
        );
    };

    it("renders loading state", () => {
        renderWithContext({ loading: true });
        expect(screen.getByText(/loading coffees/i)).toBeInTheDocument();
    });

    it("renders error state", () => {
        const error = { message: "Network error" };
        renderWithContext({ error });
        expect(screen.getByText(/error loading coffees/i)).toBeInTheDocument();
    });

    it("renders coffee list and add button", () => {
        renderWithContext();
        expect(screen.getByText("+ Add New Coffee")).toBeInTheDocument();
        expect(screen.getByText("Latte")).toBeInTheDocument();
        expect(screen.getByText("Cappuccino")).toBeInTheDocument();
    });

    it("navigates to new coffee page when add button is clicked", () => {
        renderWithContext();
        fireEvent.click(screen.getByText("+ Add New Coffee"));
        expect(mockNavigate).toHaveBeenCalledWith("/admin/new");
    });

    it("navigates to edit page when coffee is clicked", () => {
        renderWithContext();
        fireEvent.click(screen.getByText("Latte"));
        expect(mockNavigate).toHaveBeenCalledWith("/admin/1/edit");
    });

    it("renders the Outlet", () => {
        renderWithContext();
        expect(screen.getByTestId("outlet")).toBeInTheDocument();
    });
});
