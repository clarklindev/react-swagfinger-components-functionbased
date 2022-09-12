import React, {useEffect, useState} from 'react'
  // import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Button from './components/Button/Button';
import Accordion from './components/Accordion/Accordion';

  function App() {

    const onButtonClickHandler = () =>{
      console.log('click');
    }

    //requires network connection
    // useEffect( ()=>{    
    //   async function getAccordionData(url){
    //     const todos = await fetch(url);  
    //     setAccordionData(json);
    //   }
    //   getAccordionData('https://jsonplaceholder.typicode.com/users/1/posts?_limit=10');
    // },[]);//called once at start

  useEffect(()=>{
    const todos =[
      {
        title:"hello world",
        body:"this is my first post"
      },
      {
        title:"rainbow",
        body:"rainbows are amazing"
      }
    ];
    setAccordionData(todos);
  },[]);
  
  const [accordionData, setAccordionData] = useState([]);

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          
          {/* counter is using css modules...  */}
          {/* <h3>Counter</h3> */}
          {/* <Counter /> */}
          <hr/>

          <h3>Button</h3>
          <Button name="myButton" onClick={onButtonClickHandler}>my button</Button>
          <hr/>

          <h3>Accordion</h3>
          <Accordion data={accordionData} allowMultiOpen={true}/>
          <hr/>
        </header>
      </div>
    );
  }

  export default App;
