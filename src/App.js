import React, { useState } from "react";
import "./App.css";
// importing components
import Input from "./components/Inputs";
import Result from "./components/Result";

function App() {
  const [inputTotal, setInputTotal] = useState(0);
  const [inputTip, setInputTip] = useState(0);
  const [inputPeople, setInputPeople] = useState(0);
  
  console.log("Running inside app");
  return (
    <div className="App">
      {/* <h1>{inputTotal}</h1> */}
      <Input className="Input"
        setInputTotal={setInputTotal}
        setInputTip={setInputTip}
        setInputPeople={setInputPeople}
      />
      <Result
        inputTotal={inputTotal}
        inputTip={inputTip}
        inputPeople={inputPeople}
      />
    </div>
  );
}

export default App;
