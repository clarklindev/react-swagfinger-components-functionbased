import styled from 'styled-components';

const AccordionItem = styled.div`
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

export default ({ info, showing, index, render }) => {
  return (
    <AccordionItem className={`AccordionItem`}>
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
    </AccordionItem>
  );
};
