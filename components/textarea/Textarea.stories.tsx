import { ComponentMeta, ComponentStory } from "@storybook/react";
import Textarea from './Textarea';
import { TextareaProps } from './TextareaProps';

export default {
  component: Textarea,
  title: 'component/Textarea',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = ( args: TextareaProps ) => <Textarea {...args} />;

export const Default = Template.bind( {} );
Default.args = {
};
