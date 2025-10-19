import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import ErrorPage from "../../pages/ErrorPage";
import { vi } from "vitest";

// Mock useNavigate
const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
    };
});

describe("ErrorPage Component", () => {
    beforeEach(() => {
        mockNavigate.mockClear();
    });

    it("renders the 404 heading and message", () => {
        render(<ErrorPage />);
        expect(screen.getByRole("heading", { name: /404 - page not found/i })).toBeInTheDocument();
        expect(screen.getByText(/the page you are looking for doesn’t exist/i)).toBeInTheDocument();
    });

    it("calls navigate('/') when the button is clicked", () => {
        render(<ErrorPage />);
        const button = screen.getByRole("button", { name: /return home/i });
        fireEvent.click(button);
        expect(mockNavigate).toHaveBeenCalledWith("/");
    });
});
