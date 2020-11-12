import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Input from "../components/Input";
import { InputProps } from "../components/Input/Input";

export default {
  title: "Input",
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Password",
  placeholder: "Password",
  type: "password",
};
export const WithMessage = Template.bind({});
WithMessage.args = {
  label: "Password",
  placeholder: "Password",
  type: "password",
  message: "Placeholder message",
};
export const Error = Template.bind({});
Error.args = {
  label: "Password",
  placeholder: "Password",
  type: "password",
  message: "Placeholder message",
  state: "failure",
};
