import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Svg from "./Svg";
import Rect from "./Rect";

export default {
  title: "Pixel Art Box/Svg/Rect",
  component: Rect,
  argTypes: {
    stroke: { control: "color" },
    fill: { control: "color" },
  },
} as ComponentMeta<typeof Rect>;

const Template: ComponentStory<typeof Rect> = (args) => (
  <Svg width={300} height={200} style={{ backgroundColor: "violet" }}>
    <Rect {...args} />
  </Svg>
);

export const Default = Template.bind({});
Default.args = { x: 0, y: 0, width: 100, height: 70 };

export const Square = Template.bind({});
Square.args = {
  x: 100,
  y: 50,
  width: 100,
  height: 100,
};

export const StrokedAndFilled = Template.bind({});
StrokedAndFilled.args = {
  x: 100,
  y: 50,
  width: 100,
  height: 100,
  stroke: "yellow",
  strokeWidth: 4,
  fill: "lightcoral",
};
