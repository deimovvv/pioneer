import { init } from  './experience/script'
import { useEffect } from 'react'
import {T, useSetLanguage, useCurrentLanguage} from "@tolgee/react";

function App() {
  useEffect(() => {
    init()
  }, [])

  const setLenguage = useSetLanguage()
  const getLenguage = useCurrentLanguage()

  return (
    <div className="App">

        <div className='hero'> 
        <h1 className="title"> <T>page_title</T> </h1>
        <p className="text"> <T>card_text</T>
        </p>
        <br/>
        <p className="text2"> <T>card_text2</T></p>
       
        <p> 
          
        <button className='btn' onClick={() => {setLenguage("en") }} style={{background: getLenguage() === "en" ? "rgb(25, 173, 6)" : "rgb(253, 253, 253)"}}>English</button>
        <button className='btn' onClick={() => {setLenguage("de-DE")}} style={{background: getLenguage() === "de-DE" ? "rgb(25, 173, 6)" : "rgb(253, 253, 253)"}}>German</button>

        </p>

        </div>

        <div className="pricing">
          <h1> <T>Our_Packages</T></h1>
          <div className="pricing-table"> 
          <div className="pricing-card">
            <p className="title"> 1</p>
            <p className="info"> CDJ-900NXS</p>
            <button className='btn'><T>info</T></button>

             </div>
             <div className="pricing-card">
            <p className="title"> 2</p>
            <p className="info"> 	CDJ-3000</p>
            <button className='btn'><T>info</T></button>

             </div>
             <div className="pricing-card">
            <p className="title"> 3</p>
            <p className="info"> XDJ-1000MK2</p>
            <button className='btn'> <T>info</T></button>

             </div>
          </div>
        </div>

    </div>
  );
}

export default App;
