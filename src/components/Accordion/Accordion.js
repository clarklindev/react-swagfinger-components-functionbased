import React, { useEffect, useState } from 'react';
import AccordionItem from './AccordionItem';
import styled from 'styled-components';

const Accordion = styled.div`
  display:block;  
`;

export default ({data, allowMultiOpen=false})=> {

  // activeItems holds item indexs to show
  const [activeItems, setActiveItems] = useState([]);//set initial active items
  
  useEffect(()=>{
    console.log('activeItems: ', activeItems);
  }, [activeItems]);

  const trackIsOpen = (index)=>{
    if(allowMultiOpen === true){
      //if index is in the activeItems array... remove it
      if(activeItems.some(item=> item === index)){
        setActiveItems(activeItems.filter(item=> item !== index));
      }  
      //add to activeItems
      else{
        setActiveItems([...activeItems, index]);
      }
    }
    else{
      setActiveItems([index]);
    }
  }

  //if its in the activeItems array
  const shouldShow = (index) =>{
    return activeItems.some(item=>item === index);
  }

  return (
    <Accordion className={'Accordion'}>
      {
        data.map((item, index)=>{
          
          return <AccordionItem 
            key={`AccordionItem_${index}`} 
            
            info={item}
            index={index} 
            render={index=>{
              trackIsOpen(index);
            }} 
            showing={shouldShow(index)} 
          />
          
        })
      }
    </Accordion>
  );
}