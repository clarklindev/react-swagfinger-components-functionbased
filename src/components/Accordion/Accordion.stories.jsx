import React, { useState, useEffect } from 'react';
import Accordion from './Accordion';

export default {
  title: 'Examples/Accordion',
  component: Accordion,
  argTypes: {
    allowMultiOpen: {
      description: 'allow mutiple accordions to be open at same time.',
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: true,
          detail: 'sets whether the component can have multiple accordions open'
        }
      },
      control: 'boolean'
    }
  }
}

export const AccordionExample = ((args) => {
  const [accordionData, setAccordionData] = useState([]);

  useEffect(() => {
    //useEffect specifically for Accordion
    let data = [
      {
        title: 'helloworld',
        body: 'this is my first post'
      },
      {
        title: 'rainbow',
        body: 'rainbows are amazing'
      }
    ];
  
    setAccordionData(data);
    // async method:
    // const getAccordionData = async ()=>{
    //   let data = await fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=10');
    //   const json = await data.json();
    //   setAccordionData(json);
    // }
    // getAccordionData();
  }, []);

  return (
    <Accordion data={accordionData} {...args} />
  );
});
  
AccordionExample.args = {
  allowMultiOpen: true
};
AccordionExample.storyName = 'Accordion';