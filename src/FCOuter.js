import React, { useState, useEffect } from "react";

const FCOuter = () => {
  const [count, setCount] = useState(() => 0);
  const [timeStamp, setTimeStamp] = useState(Date());

  useEffect(() => {
    console.log("debug-effect");
  });

  return (
    <div className="fc-outer">
      <h2>FCOuter</h2>

      <div>count:{count}</div>
      <div>timeStamp:{timeStamp}</div>

      <button onClick={() => setCount(count + 1)}>+1</button>
      <br />
      <button onClick={() => setTimeStamp(Date())}>update time stamp</button>
    </div>
  );
};

export default FCOuter;
