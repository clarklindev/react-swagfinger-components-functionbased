import styled from 'styled-components';

export const IconContainer = styled.div`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};

  color: ${(props) =>
    props.theme.color[props.color]
      ? props.theme.color[props.color]
      : props.color};
  // whatever is passed through as children
  > * {
    width: 100%;
    height: 100%;
  }
`;

export const Icon = ({ iconSize = '', color = '', children }) => {
  return (
    <IconContainer iconSize={iconSize} color={color}>
      {children}
    </IconContainer>
  );
};
