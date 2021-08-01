import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Svg from "./Svg";

export default {
  title: "Pixel Art Box/Svg/Instance",
  component: Svg,
} as ComponentMeta<typeof Svg>;

const Template: ComponentStory<typeof Svg> = (args) => <Svg {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const AdditionalStyles = Template.bind({});
AdditionalStyles.args = {
  width: 300,
  height: 200,
  style: {
    border: "30px solid violet",
    boxSizing: "border-box",
    backgroundColor: "yellow",
  },
};
