import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Status from "./Status";

export default {
  title: "Pixel Art Box/Status",
  component: Status,
  argTypes: {},
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Changed = Template.bind({});
Changed.args = {
  currentCell: [10, 15],
};
