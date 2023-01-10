import { Button } from './Button';
import styled from 'styled-components';

const Icon = styled.span`
  width: ${(props) => `${props.size}`};
  height: ${(props) => `${props.size}`};
`;

const ButtonIconWrapper = styled.div`
  display: inline-block;
`;

export const ButtonWithIcon = ({ size, children, onClick }) => {
  return (
    <ButtonIconWrapper>
      <Button
        label={<Icon size={size}>{children}</Icon>}
        color='#9d4edd'
        variation='text'
        modifiers={['nopadding', 'nodimensions']}
        onClick={onClick}
      />
    </ButtonIconWrapper>
  );
};
