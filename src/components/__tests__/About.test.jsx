import { render, screen } from "@testing-library/react";
import About from "../../pages/About";
import React from "react";

describe("About Component", () => {
    it("renders the main heading", () => {
        render(<About />);
        expect(screen.getByRole("heading", { name: /about our coffee/i })).toBeInTheDocument();
    });

    it("renders the content paragraphs", () => {
        render(<About />);
        expect(screen.getByText(/every bean tells a story/i)).toBeInTheDocument();
        expect(screen.getByText(/crafted to balance bold flavor/i)).toBeInTheDocument();
    });
});
