import React from "react";
import { useState, useEffect } from "react";
const TextChange = () => {
  const text = "Hi, I'm Adarsh";
  const [currentText, setCurrentText] = useState("");
  const [endValue, setendValue] = useState(1);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {//so that it takes time to updatae(it not use setInterval then also it keeprunnnig due to useEffect dependecy change)
      setCurrentText(text.substring(0, endValue));
      if (isForward) {
        setendValue((prev) => prev + 1);
      } else {
        setendValue((prev) => prev - 1);
      }
      //so that the text hold for a while before going back therefore the endValue is greater than the text length by 10
      if (endValue > text.length + 10) {
        setIsForward(false);
      }
      if (endValue < 2.1) {
        setIsForward(true);
        
      }
    }, 50);

    return () => clearInterval(intervalId); //run when the dependency changes(useEffect is called again)--> so act as cleanup function --> clear the interval
  }, [endValue, isForward, text]);// so that it keepunning 
  //when use [] it will run
  //This happens because the setInterval callback function captures the initial values of endValue and isForward and does not see the updated values.
  //so it update nothing but it keep running the same thing again and again

  return <div className="transition ease duration-300">{currentText}</div>;
};

export default TextChange;
