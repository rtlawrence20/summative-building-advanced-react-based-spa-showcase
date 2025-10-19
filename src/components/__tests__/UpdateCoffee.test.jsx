import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import UpdateCoffee from "../../pages/UpdateCoffee";
import { CoffeeContext } from "../../context/CoffeeContext";
import { vi } from "vitest";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
    const actual = await vi.importActual("react-router-dom");
    return {
        ...actual,
        useNavigate: () => mockNavigate,
        useParams: () => ({ id: "1" }),
    };
});

vi.mock("../CoffeeForm", () => ({
    default: ({ onSubmit }) => (
        <button onClick={onSubmit}>Submit Form</button>
    ),
}));

vi.mock("../CoffeeCard", () => ({ default: () => <div>Preview Card</div> }));

describe("UpdateCoffee Component", () => {
    const mockCoffee = {
        id: "1",
        name: "Latte",
        desc: "Nice coffee",
        origin: "Colombia",
        price: "5.00",
        img: "",
    };

    const mockContext = {
        coffees: [mockCoffee],
        addCoffee: vi.fn().mockResolvedValue(undefined),
        updateCoffee: vi.fn().mockResolvedValue(undefined),
        removeCoffee: vi.fn().mockResolvedValue(undefined),
        refetch: vi.fn().mockResolvedValue(undefined),
        loading: false,
        error: null,
    };

    beforeEach(() => {
        vi.clearAllMocks();
        window.confirm = vi.fn(() => true);
    });

    it("calls updateCoffee, refetch, and navigate on form submit", async () => {
        render(
            <CoffeeContext.Provider value={mockContext}>
                <UpdateCoffee />
            </CoffeeContext.Provider>
        );

        fireEvent.click(screen.getByText(/submit form/i));

        await waitFor(() => {
            expect(mockContext.updateCoffee).toHaveBeenCalledWith(
                "1",
                expect.objectContaining({
                    name: "Latte",
                    desc: "Nice coffee",
                    origin: "Colombia",
                    price: "5.00",
                    img: "",
                })
            );
            expect(mockContext.refetch).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith("/admin");
        });
    });

    it("calls removeCoffee, refetch, and navigate on delete", async () => {
        render(
            <CoffeeContext.Provider value={mockContext}>
                <UpdateCoffee />
            </CoffeeContext.Provider>
        );

        fireEvent.click(screen.getByText(/delete coffee/i));

        await waitFor(() => {
            expect(mockContext.removeCoffee).toHaveBeenCalledWith("1");
            expect(mockContext.refetch).toHaveBeenCalled();
            expect(mockNavigate).toHaveBeenCalledWith("/admin");
        });
    });
});
