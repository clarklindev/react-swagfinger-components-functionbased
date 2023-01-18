import styled from 'styled-components';

export const Icon = styled.div`
  width: ${(props) => props.iconSize};
  height: ${(props) => props.iconSize};
  // whatever is passed through as children
  > * {
    width: 100%;
    height: 100%;
  }
`;
