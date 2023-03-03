import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from './Input1';
import { Input1Props } from './Input1Props';

export default {
  component: Input,
  title: 'component/Input1',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: Input1Props) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Test",
  type: "text"
};
