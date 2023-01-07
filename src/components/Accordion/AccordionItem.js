import styled from 'styled-components';

const AccordionItemContainer = styled.div`
  display: block;
`;

const AccordionItemTitle = styled.div`
  background-color: red;
`;

const AccordionItemContent = styled.div`
  &.show {
    display: block;
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
        className={`AccordionItemTitle`}
        onClick={() => {
          render(index);
        }}
      >
        {info.title}
      </AccordionItemTitle>
      <AccordionItemContent
        className={`AccordionItemContent ${showing ? 'show' : 'hide'}`}
      >
        {info.body}
      </AccordionItemContent>
    </AccordionItemContainer>
  );
};
