import React, { useState } from 'react';
import { AccordionItem } from './AccordionItem';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  display: block;
`;

export const Accordion = ({ savedData, configure }) => {
  const { allowMultiOpen = false } = configure;

  // activeItems holds item indexs to show
  const [activeItems, setActiveItems] = useState([]); //set initial active items

  const trackIsOpen = (index) => {
    if (allowMultiOpen === true) {
      //if index is in the activeItems array... remove it
      if (activeItems.some((item) => item === index)) {
        setActiveItems(activeItems.filter((item) => item !== index));
      }
      //add to activeItems
      else {
        setActiveItems([...activeItems, index]);
      }
    } else {
      setActiveItems([index]);
    }
  };

  //if its in the activeItems array
  const shouldShow = (index) => {
    return activeItems.some((item) => item === index);
  };

  return (
    <AccordionContainer className={'Accordion'}>
      {savedData.map((item, index) => {
        return (
          <AccordionItem
            key={`AccordionItem_${index}`}
            configure={{
              index: index,
              render: (index) => {
                trackIsOpen(index);
              },
              showing: shouldShow(index),
            }}
            savedData={item}
          />
        );
      })}
    </AccordionContainer>
  );
};
