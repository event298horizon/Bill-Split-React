import React  from "react";

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

  const resetValue = (e) => {
    e.preventDefault();
    document.querySelector(".form").reset();
  }
  return (
    <form className="form">
      <input
        min={0}
        onBlur={inputTotalHandler}
        type="number"
        placeholder="Enter total amount"
      />
      <div className="tips">
        <input type="button" value="5" />
        <input type="button" value="10" />
        <input type="button" value="15" />
        <input type="button" value="20" />
        <input type="button" value="25" />
        <input
          min={0}
          onBlur={inputTipHandler}
          type="number"
          name=""
          placeholder="Enter tip percentage"
          id=""
        />
      </div>
      <input
        min={0}
        onBlur={inputPeopleHandler}
        type="number"
        name=""
        placeholder="Enter number of people"
        id=""
      />
      <button onClick={resetValue}>resetValues</button>
    </form>
  );
};

export default Input;
