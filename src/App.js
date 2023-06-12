import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
  const [second, setSecond] = useState(0);
  // const [run, setrun] = useState(false);
  // const timerRef = useRef(null); //working

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setisPaused] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive && isPaused) {
      timer = setInterval(() => {
        setSecond((sec) => sec + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
    
  }, [isActive, isPaused]);

  const ShowTime = second;

  //----------------working-----------
  //   const handlestart = () => {
  //     console.log(run)
  //     if (run===false) {
  //       timerRef.current = setInterval(() => {
  //       setSecond((prev) => prev + 1)
  //     }, 100);
  //     //setrun(true);
  //   }else{
  //     setrun(true);
  //   }
  // };
  //----------------working-----------

  const handlestart = () => {
    setIsActive(true);
    setisPaused(true);
  };
  const handlestop = () => {
    // setSecond(0)
    setisPaused(false);
    // clearInterval(  timerRef.current); //working
  };

  const handleReset = () => {
    setSecond(0);
    setIsActive(false);
  };
  const formattedTime = `${Math.floor(ShowTime / 60)}:${ShowTime % 60}`;

  return (
    <div className="App">
      <h1>countdown timer</h1>
      <p>{formattedTime}</p>
      <button onClick={() => handlestart()}>
        {isActive ? "resume" : "start"}
      </button>

      <button onClick={() => handlestop()}>stop</button>
      <button onClick={() => handleReset()}>Reset</button>
    </div>
  );
}

export default App;
