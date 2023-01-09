import React from 'react';
import styled, { css } from 'styled-components';

const CardContainer = styled.div`
  border: ${(props) =>
    props.borderColor
      ? `1px solid ${props.borderColor}`
      : `1px solid ${props.theme.borderColor}`};
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.borderRadius};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  filter: ${(props) =>
    props.shadow &&
    css`
      drop-shadow(0px 0px 5px #DDD);
    `};
  padding: 15px;
`;

export const Card = ({
  color = 'white',
  borderColor = 'black',
  borderRadius = '10px',
  width = '250px',
  height = '300px',
  shadow = false,
  children,
}) => {
  return (
    <>
      <CardContainer
        color={color}
        borderColor={borderColor}
        borderRadius={borderRadius}
        width={width}
        height={height}
        shadow={shadow}
      >
        {children}
      </CardContainer>
    </>
  );
};
