import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color:red;
`;

export default ({type='button', name, children="button", disabled=false, onClick}) =>{
  return (
    <Button disabled={disabled} className={name} type={type} onClick={onClick} >{children}</Button>
  );
}


