import { render, screen, fireEvent } from "@testing-library/react";
import CoffeeForm from "../CoffeeForm";
import React from "react";
import { vi } from "vitest";

describe("CoffeeForm Component", () => {
    const setup = (formDataOverrides = {}) => {
        const formData = {
            name: "",
            desc: "",
            origin: "",
            price: "",
            img: "",
            ...formDataOverrides,
        };
        const setFormData = vi.fn();
        const onSubmit = vi.fn();

        render(
            <CoffeeForm
                formData={formData}
                setFormData={setFormData}
                onSubmit={onSubmit}
            />
        );

        return { setFormData, onSubmit };
    };

    it("renders all form fields", () => {
        setup();

        expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/origin/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/price/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/image url/i)).toBeInTheDocument();
    });

    it("calls setFormData when inputs change", () => {
        const { setFormData } = setup();

        fireEvent.change(screen.getByLabelText(/name/i), {
            target: { value: "Espresso" },
        });
        fireEvent.change(screen.getByLabelText(/price/i), {
            target: { value: "3.50" },
        });

        expect(setFormData).toHaveBeenCalledTimes(2);
        expect(setFormData.mock.calls[0][0]).toBeInstanceOf(Function);
    });

    it("shows 'Update Coffee' when name exists", () => {
        setup({ name: "Cappuccino" });
        expect(screen.getByRole("button", { name: /update coffee/i })).toBeInTheDocument();
    });

    it("shows 'Add Coffee' when name is empty", () => {
        setup({ name: "" });
        expect(screen.getByRole("button", { name: /add coffee/i })).toBeInTheDocument();
    });
});
