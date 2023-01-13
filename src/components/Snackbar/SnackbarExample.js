import { useState } from 'react';
import { IconButton } from '../Button/IconButton';
import { Snackbar } from './Snackbar';

export const SnackbarExample = () => {
  const [showSnackbar, setShowSnackbar] = useState(false);

  const onClickHandler = () => {
    console.log('onClickHandler');
    setShowSnackbar(true);
  };

  return (
    <div className='flex flex-col'>
      {showSnackbar && (
        <Snackbar setShowSnackbar={setShowSnackbar}>
          copied to clipboard
        </Snackbar>
      )}

      <IconButton size='30px' onClick={onClickHandler}>
        <svg
          fill='none'
          stroke='black'
          strokeWidth={1.5}
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75'
          />
        </svg>
      </IconButton>
    </div>
  );
};
