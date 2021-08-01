import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Svg } from "@/components/svg";
import Cell from "./Cell";

export default {
  title: "Pixel Art Box/Field/Cell",
  component: Cell,
  argTypes: {
    color: { control: "color" },
  },
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => {
  return (
    <Svg width={args.size || 20} height={args.size || 20}>
      <Cell {...args} />
    </Svg>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  color: "violet",
  size: 10,
};

export const Middle = Template.bind({});
Middle.args = {
  color: "violet",
  size: 20,
};

export const Big = Template.bind({});
Big.args = {
  color: "violet",
  size: 30,
};
