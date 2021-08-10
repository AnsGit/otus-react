import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Grid from "./Grid";

export default {
  title: "Pixel Art Box/Grid",
  component: Grid,
  argTypes: {},
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const Default = Template.bind({});
Default.args = {};

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

export const Colored = Template.bind({});
Colored.args = {
  size: { cols: 20, rows: 15 },
  cell: { size: 30 },
  line: {
    stroke: "violet",
    strokeWidth: 1,
  },
};

export const Thick = Template.bind({});
Thick.args = {
  size: { cols: 20, rows: 15 },
  cell: { size: 30 },
  line: {
    strokeWidth: 2,
    stroke: "#ddd",
  },
};
