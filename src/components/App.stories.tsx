import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { App } from "./App";

export default {
  title: "Pixel Art Box/App",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithoutGrid = Template.bind({});
WithoutGrid.args = {
  grid: false,
};

export const WithSmallCells = Template.bind({});
WithSmallCells.args = {
  cell: { size: 5 },
};

export const WithMiddleCells = Template.bind({});
WithMiddleCells.args = {
  cell: { size: 10 },
};

export const WithBigCells = Template.bind({});
WithBigCells.args = {
  cell: { size: 20 },
};
