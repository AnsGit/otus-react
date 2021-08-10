import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import App from "./App";

export default {
  title: "Pixel Art Box/App",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithoutGrid = Template.bind({});
WithoutGrid.args = {
  toUseGrid: false,
};

export const SmallCells = Template.bind({});
SmallCells.args = {
  cell: { size: 10 },
};

export const MiddleCells = Template.bind({});
MiddleCells.args = {
  size: { cols: 20, rows: 15 },
  cell: { size: 20 },
};

export const BigCells = Template.bind({});
BigCells.args = {
  size: { cols: 20, rows: 15 },
  cell: { size: 30 },
};
