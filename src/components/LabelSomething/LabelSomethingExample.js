import { LabelSomething } from './LabelSomething';
import { Icon } from '../Icon/Icon';
import { SmileyIcon } from '../../icons/SmileyIcon';

export const LabelSomethingExample = () => {
  const icon = SmileyIcon;

  return (
    <div className='flex flex-col gap-10'>
      <LabelSomething
        gap='2'
        label='left'
        labelPosition='left'
        align='center'
        something={
          <Icon iconSize='30px' color='white'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        gap='2'
        label='right'
        labelPosition='right'
        align='center'
        something={
          <Icon iconSize='30px' color='white'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        gap='2'
        label='top'
        labelPosition='top'
        align='center'
        something={
          <Icon iconSize='30px' color='white'>
            {icon}
          </Icon>
        }
      />
      <LabelSomething
        gap='2'
        label='bottom'
        labelPosition='bottom'
        align='center'
        something={
          <Icon iconSize='30px' color='white'>
            {icon}
          </Icon>
        }
      />
    </div>
  );
};
