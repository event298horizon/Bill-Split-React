import React, {useState} from "react";

const Input = ({ setInputTotal, setInputTip, setInputPeople }) => {
  
  const inputTotalHandler = (e) => {
    setInputTotal(e.target.value);
    console.log(e.target.value);
  };
  const inputTipHandler = (e) => {
    setInputTip(e.target.value);
    console.log(e.target.value);
  };
  const inputPeopleHandler = (e) => {
    setInputPeople(e.target.value);
    console.log(e.target.value);
  };

  const resetValue = () => {
    document.querySelector(".form").reset();
  }
  return(
    <form className="form">
      <input
        min={0}
        onBlur={inputTotalHandler}
        type="number"
        placeholder="Enter total amount"
      />

      
      <input
        min={0}
        onBlur={inputPeopleHandler}
        type="number"
        name=""
        placeholder="Enter number of people"
        id=""
      />


      <div className="tips">

      
      <input type="button" value="5" onClick={inputTipHandler} className="tipsButton" />
      <input type="button" value="10" onClick={inputTipHandler} className="tipsButton" />
      <input type="button" value="15" onClick={inputTipHandler} className="tipsButton" />
      <input type="button" value="20" onClick={inputTipHandler} className="tipsButton" />
      <input type="button" value="25" onClick={inputTipHandler} className="tipsButton" />
      <input
        min={0}
        onChange={inputTipHandler}
        type="number"
        name=""
        placeholder="Enter tip percentage"
        id=""
      />
      </div>
     
      <button onClick={resetValue} id="resetButton">Reset Value</button>
    </form>
  );
};

export default Input;
