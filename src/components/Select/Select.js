import React from 'react';
import styled from 'styled-components';

const SelectContainer = styled.div`
  position: relative;

  &::after {
    content: '▼';
    font-size: 1rem;
    top: 15px;
    right: 20px;
    position: absolute;
  }

  select {
    box-sizing: border-box;
    appearance: none;
    display: block;
    margin: 0;
    max-height: 50px;
    width: 100%;
    height: 50px;
    color: ${(props) => props.theme.color};
    border: 1px solid ${(props) => props.theme.borderColor};
    padding: 15px;
    border-radius: 8px;
    display: flex;
    flex-grow: 1;
    outline: none;

    option:first-child {
      color: ${(props) => props.theme.placeholder};
    }
  }
`;

export const Select = ({ savedData, configure, children }) => {
  const { onChange } = configure;
  const value = savedData;
  return (
    <SelectContainer>
      <select value={value} onChange={onChange}>
        {children
          ? children.map((each) => {
              return each;
            })
          : null}
      </select>
    </SelectContainer>
  );
};
