import React from "react";

const Result = ({
  inputTotal,
  inputTip,
  inputPeople,
}) => {
  const calc = () => {
    if (inputTotal.length && inputTip.length && inputPeople.length) {
      let tip = (inputTotal * inputTip) / 100;
      let res = (Number(inputTotal) + Number(tip)) / inputPeople;
      return res;
    }
    return "";
  };
  

  return (
    <div className="result">
      <p>{calc()}</p>
      {/* <button onClick={resetValue}>Reset</button> */}
    </div>
  );
};

export default Result;
