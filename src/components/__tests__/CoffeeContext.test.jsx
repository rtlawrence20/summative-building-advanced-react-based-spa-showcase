import React, { useContext } from "react";
import { render, screen } from "@testing-library/react";
import { CoffeeContext, CoffeeProvider } from "../../context/CoffeeContext";
import { vi } from "vitest";

// Mock useFetch
vi.mock("../hooks/useFetch", () => ({
    default: () => ({
        data: [{ id: 1, name: "Latte" }],
        setData: vi.fn(),
        loading: false,
        error: null,
        refetch: vi.fn(),
        postData: vi.fn(),
        deleteData: vi.fn(),
    }),
}));

describe("CoffeeContext", () => {
    it("provides coffees to child components", () => {
        const TestComponent = () => {
            const { coffees, loading, error } = useContext(CoffeeContext);
            return (
                <div>
                    <span>{loading ? "Loading" : "Loaded"}</span>
                    <span>{error ? "Error" : "No Error"}</span>
                    {coffees.map((c) => (
                        <div key={c.id}>{c.name}</div>
                    ))}
                </div>
            );
        };

        render(
            <CoffeeProvider>
                <TestComponent />
            </CoffeeProvider>
        );

        expect(screen.getByText("No Error")).toBeInTheDocument();
    });
});
