import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToolboxDivider } from 'shared/ui/toolbox/divider';

import { Exclusive as ObjectTypeButtonGroup } from './button-group/button-group.stories';
import { Toolbox } from './toolbox';

export default {
  title: 'shared/toolbox',
  component: Toolbox,
  args: {},
} as ComponentMeta<typeof Toolbox>;

export const Overview: ComponentStory<typeof Toolbox> = (args) => (
  <Toolbox {...args}>
    <ObjectTypeButtonGroup {...ObjectTypeButtonGroup.args} />
    <ToolboxDivider />
  </Toolbox>
);
