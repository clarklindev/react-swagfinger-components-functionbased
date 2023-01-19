import React, { useState } from 'react';
import { Input, InputWrapper } from './Input';
import { Heading } from '../Typography/Typography';

import { Button } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { SearchIcon } from '../../icons/SearchIcon';
import { ClearIcon } from '../../icons/ClearIcon';

export const InputSearchExample = () => {
  const [savedData, setSavedData] = useState('');

  const clearHandler = () => {
    setSavedData('');
  };

  const leftIcon = (
    <Button
      className='ml-2 mr-2'
      modifiers={['nopointer']}
      variation='icon'
      label={
        <Icon iconSize='30px' color='white'>
          {SearchIcon}
        </Icon>
      }
    />
  );
  const rightIcon = (
    <Button
      className='ml-2 mr-2'
      variation='icon'
      modifiers={['noborderrightradius']}
      onClick={clearHandler}
      label={
        <Icon iconSize='30px' color='white'>
          {ClearIcon}
        </Icon>
      }
    />
  );
  return (
    <div className='flex flex-col mb-10'>
      <Heading variation='h6'>Search</Heading>
      <InputWrapper>
        {leftIcon}
        <Input
          savedData={savedData}
          configure={{
            modifiers: [
              'noborder',
              'noborderleftradius',
              savedData.length && 'noborderrightradius',
            ],
            placeholder: 'placeholder',
            onChange: (event) => {
              console.log('noborder');
              setSavedData(event.target.value);
            },
          }}
        />
        {savedData.length ? rightIcon : undefined}
      </InputWrapper>
    </div>
  );
};
