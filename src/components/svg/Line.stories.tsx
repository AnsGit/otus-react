import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Svg from "./Svg";
import Line from "./Line";

export default {
  title: "Pixel Art Box/Svg/Line",
  component: Line,
  argTypes: {
    stroke: { control: "color" },
  },
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => (
  <Svg width={300} height={200} style={{ backgroundColor: "violet" }}>
    <Line {...args} />
  </Svg>
);

export const Default = Template.bind({});
Default.args = {};

export const Vertical = Template.bind({});
Vertical.args = {
  x1: 150,
  y1: 0,
  x2: 150,
  y2: 200,
  stroke: "#fff",
  strokeWidth: 4,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  x1: 0,
  y1: 100,
  x2: 300,
  y2: 100,
  stroke: "yellow",
  strokeWidth: 4,
};
