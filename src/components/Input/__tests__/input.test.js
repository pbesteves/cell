import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Input from "../Input";

describe("Input Component", () => {
  it("should be focused", () => {
    const onFocusMock = jest.fn();
    render(
      <Input
        placeholder="teste"
        id="teste"
        label="Teste"
        onFocus={onFocusMock}
      />
    );

    const inputEl = screen.getByLabelText(/teste/i);

    fireEvent.focus(inputEl);

    expect(onFocusMock).toHaveBeenCalled();
  });
  it("should be blurred", () => {
    const onBlurMock = jest.fn();
    render(
      <Input placeholder="teste" id="teste" label="Teste" onBlur={onBlurMock} />
    );

    const inputEl = screen.getByLabelText(/teste/i);

    fireEvent.blur(inputEl);

    expect(onBlurMock).toHaveBeenCalled();
  });
  it("should call the onChange function", () => {
    const onChangeMock = jest.fn();
    render(
      <Input
        placeholder="teste"
        id="teste"
        label="Teste"
        onChange={onChangeMock}
      />
    );

    const inputEl = screen.getByLabelText(/teste/i);

    fireEvent.change(inputEl, { target: { value: "test" } });

    expect(onChangeMock).toHaveBeenCalled();
  });
  it("should have a value of 'teste'", () => {
    render(<Input label="name" id="name" placeholder="name" />);

    const inputEl = screen.getByLabelText(/name/i);

    fireEvent.change(inputEl, {
      target: {
        value: "teste",
      },
    });

    expect(inputEl).toHaveValue("teste");
  });
  it("should be disabled", () => {
    render(<Input label="name" id="name" placeholder="name" disabled />);

    const inputEl = screen.getByLabelText(/name/i);

    expect(inputEl).toBeDisabled();
  });
  it("should display a message below the input", () => {
    render(
      <Input
        label="name"
        id="name"
        placeholder="name"
        message="This is a validation message"
      />
    );

    const validationMessage = screen.getByText(/this is a validation message/i);

    expect(validationMessage).toBeInTheDocument();
  });
  it("should be required", () => {
    render(<Input label="name" id="name" placeholder="name" required />);

    const inputEl = screen.getByLabelText(/name/i);

    expect(inputEl).toBeRequired();
  });
});
