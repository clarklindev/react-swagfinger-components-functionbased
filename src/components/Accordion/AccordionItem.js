import styled from 'styled-components';
import { typeScale } from '../../utils';

const AccordionItemContainer = styled.div`
  display: block;
  margin-bottom: 5px;
`;

const AccordionItemTitle = styled.div`
  box-sizing: border-box;
  max-height: 50px;

  background-color: ${(props) => props.theme.default.backgroundColor};
  padding: 15px;
  font-size: ${typeScale.paragraph};
  border-radius: 8px;
  cursor: pointer;

  display: flex;
  flex-grow: 1;
  justify-content: space-between;

  &.show {
    border-top: 1px solid ${(props) => props.theme.default.borderColor};
    border-left: 1px solid ${(props) => props.theme.default.borderColor};
    border-right: 1px solid ${(props) => props.theme.default.borderColor};
    border-bottom: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  &.hide {
    border: 1px solid ${(props) => props.theme.default.borderColor};
  }
`;

const expandIcon = (
  <svg
    class='h-4 w-4 rotate-180'
    fill='currentColor'
    height='10'
    viewBox='0 0 16 16'
    width='10'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
      fill-rule='evenodd'
    ></path>
  </svg>
);

const collapseIcon = (
  <svg
    class='h-4 w-4'
    fill='currentColor'
    height='10'
    viewBox='0 0 16 16'
    width='10'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'
      fill-rule='evenodd'
    ></path>
  </svg>
);

const AccordionItemContent = styled.div`
  padding: 15px;
  &.show {
    display: block;
    border: 1px solid ${(props) => props.theme.default.borderColor};
    border-top: 0px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &.hide {
    display: none;
  }
`;

export const AccordionItem = ({ configure, savedData }) => {
  const { showing, index, render } = configure;
  const info = savedData;

  return (
    <AccordionItemContainer className={`AccordionItem`}>
      <AccordionItemTitle
        className={`AccordionItemTitle ${showing ? 'show' : 'hide'}`}
        onClick={() => {
          render(index);
        }}
      >
        {info.title}
        {showing ? expandIcon : collapseIcon}
      </AccordionItemTitle>
      <AccordionItemContent
        className={`AccordionItemContent ${showing ? 'show' : 'hide'}`}
      >
        {info.body}
      </AccordionItemContent>
    </AccordionItemContainer>
  );
};
