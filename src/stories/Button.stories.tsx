import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import Button from "../components/Button";
import { ButtonProps } from "../components/Button/Button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Outline = Template.bind({});
Outline.args = {
  buttonStyle: "outline",
  children: "Button",
};

export const Solid = Template.bind({});
Solid.args = {
  buttonStyle: "solid",
  children: "Button",
};

export const Text = Template.bind({});
Text.args = {
  buttonStyle: "text",
  children: "Button",
};
