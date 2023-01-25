import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AccordionContainer = styled.div`
  display: block;
`;

export const Accordion = ({ render, multiOpen }) => {
  const [activeItems, setActiveItems] = useState(); //set initial active items // activeItems holds item indexs to show
  const [allowMultiOpen, setAllowMultiOpen] = useState();

  useEffect(() => {
    setActiveItems([]);
    setAllowMultiOpen(multiOpen);
  }, [multiOpen]);

  const handleClick = (index) => {
    const found = activeItems.some((item) => item === index);

    if (allowMultiOpen) {
      if (found) {
        //if index is in the activeItems array... remove it
        setActiveItems(activeItems.filter((item) => item !== index));
      } else {
        //add to activeItems
        setActiveItems([...activeItems, index]);
      }
    } else {
      //only allowed one open at a time
      if (found) {
        //remove it
        setActiveItems([]);
      } else {
        //add it
        setActiveItems([index]);
      }
    }
  };

  return (
    <AccordionContainer className={'Accordion'}>
      {render({ activeItems, handleClick })}
    </AccordionContainer>
  );
};
