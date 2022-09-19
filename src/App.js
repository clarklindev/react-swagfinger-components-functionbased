import React, {useEffect, useState} from 'react'
import { ThemeProvider } from "styled-components";

//theme
import {GlobalStyle, darkTheme, defaultTheme} from './utils';

// import { Counter } from './features/counter/Counter';
import {PrimaryButton, SecondaryButton, TertiaryButton} from './components/Button/Button';
import Accordion from './components/Accordion/Accordion';

const App = () => {

  const onButtonClickHandler = () =>{
    console.log('click');
  }

  useEffect(()=>{
    //useEffect specifically for Accordion
    let data =[
      {
        title:"helloworld",
        body:"this is my first post"
      },
      {
        title:"rainbow",
        body:"rainbows are amazing"
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
  },[]);
  
  const [useDarkTheme, setUseDarkTheme] = useState(false);
  const [accordionData, setAccordionData] = useState([]);

  return (
    <ThemeProvider theme={useDarkTheme ? darkTheme : defaultTheme}>
      <button 
        style={{margin: "0 16px 24px", padding: "8px", background:"none"}}
        onClick={()=>setUseDarkTheme(true)}
      >Dark theme
      </button>

      <button 
        style={{margin: "0 16px 24px", padding: "8px", background:"none"}}
        onClick={()=>setUseDarkTheme(false)}
      >Default theme
      </button>

      <div className="App" 
        style={{
          background: useDarkTheme ? darkTheme.backgroundColor : defaultTheme.backgroundColor,
          color: useDarkTheme ? darkTheme.textColor : defaultTheme.textColor,
          width: "100vw",
          height: '100vh'
        }}
      >
        {/* <h3>Counter</h3> */}
        {/* <Counter /> */}
        <hr/>
        <h3>Button</h3>
        <PrimaryButton onClick={onButtonClickHandler}>my button</PrimaryButton>
        <SecondaryButton onClick={onButtonClickHandler}>my button</SecondaryButton>
        <TertiaryButton onClick={onButtonClickHandler}>my button</TertiaryButton>
        <hr/>

        <h3>Accordion</h3>
        <Accordion data={accordionData} allowMultiOpen={true}/>
        <hr/>
      </div>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;
