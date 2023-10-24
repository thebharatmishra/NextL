// import { render, screen } from "@testing-library/react";
// import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/app/page";

describe("Home", () => {
  // it("should have Docs text 'information'", () => {
  it("should have Heading'", () => {
    render(<Home />); //ARRANGE
    // const myElm = screen.getByText("Docs"); //ACT
    const myElm = screen.getByRole("heading", { name: "Learn" }); //ACT
    // const myElm = screen.getByText(/information/i); //ACT
    expect(myElm).toBeInTheDocument(); //ASSERT
  });
});
