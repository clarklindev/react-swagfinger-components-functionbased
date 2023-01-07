import React from 'react';
import styled from 'styled-components';

const RadioButtonContainer = styled.div`
  label {
    display: inline-flex;
    align-items: center;
    align-content: center;

    .Label {
      padding-left: 10px;
      color: ${(props) => props.theme.default.color};
    }
  }
`;

// Hide radioButton visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.div`
  overflow: hidden;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  display: flex;
  align-content: center;
  align-items: center;
`;

const StyledRadioButton = styled.div`
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border-radius: 8px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

const Svg = styled.svg`
  display: block;
  margin: auto;

  fill: ${(props) => props.theme.default.color};
  box-sizing: border-box;
  path {
    &.defaultView {
      fill: ${(props) => props.theme.formElementBackground};
      stroke: ${(props) => props.theme.neutral500};
    }
    &.checkedView {
      fill: ${(props) => props.theme.formElementBackground};
      stroke: ${(props) => props.theme.default.borderColor};
    }
  }
`;

export const RadioButton = ({ savedData, configure }) => {
  const checked = savedData;
  const { name, label, onChange } = configure;

  return (
    <RadioButtonContainer>
      <label>
        <HiddenRadioButton checked={checked} onChange={onChange} name={name} />
        <StyledRadioButton checked={checked}>
          <Icon>
            {checked === true ? (
              <Svg
                viewBox='0 0 512 512'
                preserveAspectRatio='xMidYMid meet'
                aria-hidden='true'
              >
                {/* fontawesome */}
                <path
                  className='checkedView'
                  xmlns='http://www.w3.org/2000/svg'
                  d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zm0-160c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96z'
                />
              </Svg>
            ) : (
              <Svg
                viewBox='0 0 512 512'
                preserveAspectRatio='xMidYMid meet'
                aria-hidden='true'
              >
                {/* fontawesome */}
                <path
                  className='defaultView'
                  xmlns='http://www.w3.org/2000/svg'
                  d='M256,512c141.4,0,256-114.6,256-256S397.4,0,256,0S0,114.6,0,256S114.6,512,256,512z'
                />
              </Svg>
            )}
          </Icon>
        </StyledRadioButton>
        <div className='Label'>{label}</div>
      </label>
    </RadioButtonContainer>
  );
};
