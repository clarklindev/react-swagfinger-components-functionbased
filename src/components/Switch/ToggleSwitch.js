import styled from 'styled-components';

const SwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 30px;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  ${SwitchInput}:checked + & {
    background-color: #2196f3;
  }

  ${SwitchInput}:focus + & {
    box-shadow: 0 0 1px #2196f3;
  }

  ${SwitchInput}:checked + &:before {
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
  }
`;

export const ToggleSwitch = ({ savedData, configure }) => {
  const { onChange, label } = configure;
  const checked = savedData;

  return (
    <SwitchWrapper>
      <SwitchInput
        type='checkbox'
        defaultChecked={checked}
        onChange={onChange}
      />
      <Slider />
    </SwitchWrapper>
  );
};
