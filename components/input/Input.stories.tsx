import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from './Input';
import { InputProps } from './InputProps';

export default {
  component: Input,
  title: 'component/Input',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Test",
  type: "text"
};
