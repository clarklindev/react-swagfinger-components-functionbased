import React, { useState, useEffect } from 'react';
import { Accordion } from './Accordion';

export const AccordionExample = () => {
  const [savedData, setSavedData] = useState([]);

  const configure = {
    allowMultiOpen: false,
  };

  useEffect(() => {
    //useEffect specifically for Accordion
    let data = [
      {
        title: 'helloworld',
        body: 'this is my first post',
      },
      {
        title: 'rainbow',
        body: 'rainbows are amazing',
      },
    ];

    setSavedData(data);
    // async method:
    // const getAccordionData = async ()=>{
    //   let data = await fetch('https://jsonplaceholder.typicode.com/users/1/posts?_limit=10');
    //   const json = await data.json();
    //   setAccordionData(json);
    // }
    // getAccordionData();
  }, []);

  return <Accordion savedData={savedData} configure={configure} />;
};
