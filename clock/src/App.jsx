// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <p>Check out this new clock</p>
//     </>
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        padding: "15px",
        fontSize: "1rem",
        fontFamily: "Roboto, sans-serif",

      }}

    >
      <h1>{time}</h1>
    </div>
  );
};

export default Clock;

