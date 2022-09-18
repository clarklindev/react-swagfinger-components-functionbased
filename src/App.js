import React, {useEffect, useState} from 'react'
// import { Counter } from './features/counter/Counter';
import PrimaryButton, {SecondaryButton, TertiaryButton} from './components/Button/Button';
import Accordion from './components/Accordion/Accordion';

  function App() {

  const onButtonClickHandler = () =>{
    console.log('click');
  }

  useEffect(()=>{
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
  
  const [accordionData, setAccordionData] = useState([]);

    return (
      <div className="App">
        <header className="App-header">
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
        </header>
      </div>
    );
  }

  export default App;
