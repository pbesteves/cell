import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Button from "../Button";

describe("Button Component", () => {
  it("should render a button styled as solid", () => {
    render(<Button>Button</Button>);

    expect(screen.getByText(/button/i)).toHaveClass("ButtonSolid");
  });

  it("should render a button styled as outline", () => {
    render(<Button buttonStyle="outline">Button</Button>);

    expect(screen.getByText(/button/i)).toHaveClass("ButtonOutline");
  });
  it("should render a button styled as a text", () => {
    render(<Button buttonStyle="text">Button</Button>);

    expect(screen.getByText(/button/i)).toHaveClass("ButtonText");
  });
  it("should render a disabled button", () => {
    render(<Button disabled>Button</Button>);
    expect(screen.getByText(/button/i)).toBeDisabled();
  });
  it("should call the onClick function", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Button</Button>);
    fireEvent.click(screen.getByText(/button/i));
    expect(onClickMock).toHaveBeenCalled();
  });
});
