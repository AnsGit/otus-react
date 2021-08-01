import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Field from "./Field";

export default {
  title: "Pixel Art Box/Field/Instance",
  component: Field,
  argTypes: {},
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const ColoredCells = Template.bind({});
ColoredCells.args = {
  matrix: [
    ["#fff", "#fff", "#fff", "purple", "purple", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "purple", "#fff", "#fff", "purple", "#fff", "#fff"],
    ["#fff", "purple", "#fff", "#fff", "#fff", "#fff", "purple", "#fff"],
    ["purple", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "purple"],
    ["#fff", "purple", "#fff", "#fff", "#fff", "#fff", "purple", "#fff"],
    ["#fff", "#fff", "purple", "#fff", "#fff", "purple", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "purple", "purple", "#fff", "#fff", "#fff"],
    ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff"],
  ],
};
