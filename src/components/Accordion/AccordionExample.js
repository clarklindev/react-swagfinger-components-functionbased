import React, { useState, useEffect } from 'react';
import { Accordion } from './Accordion';
import { AccordionItem } from './AccordionItem';
import { Heading } from '../Typography';

export const AccordionExample = () => {
  const [data, setData] = useState([]); //savedData is when we are saving data, 'data' is presented data that is not updated, we 'setData' on init with useEffect()

  useEffect(() => {
    setData([
      {
        title: 'helloworld',
        body: 'this is my first post',
      },
      {
        title: 'rainbow',
        body: 'rainbows are amazing',
      },
    ]);

    // async method:
    // const getAccordionData = async ()=>{
    //   let data = await fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=10');
    //   const json = await data.json();
    //   setData(json);
    // }
    // getAccordionData();
  }, []);

  return (
    <>
      <div className='flex flex-col mb-10'>
        <Heading variation='h6'>without multiopen</Heading>
        <Accordion
          multiOpen={false}
          render={({ activeItems, handleClick }) => {
            return data.map((item, index) => {
              return (
                <AccordionItem
                  key={`AccordionItem_${index}`}
                  onClick={() => {
                    handleClick(index);
                  }}
                  data={item}
                  isOpen={activeItems.some((item) => item === index)}
                />
              );
            });
          }}
        />
      </div>
      <div className='flex flex-col'>
        <Heading variation='h6'>with multiopen</Heading>
        <Accordion
          multiOpen={true}
          render={({ activeItems, handleClick }) => {
            return data.map((item, index) => {
              return (
                <AccordionItem
                  key={`AccordionItem_${index}`}
                  onClick={() => {
                    handleClick(index);
                  }}
                  data={item}
                  isOpen={activeItems.some((item) => item === index)}
                />
              );
            });
          }}
        />
      </div>
    </>
  );
};
