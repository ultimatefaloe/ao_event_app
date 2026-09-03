import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  // const [initialState, setter] = useState()
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 1);
  };

  const decreaseHandler = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex justify-center items-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Counter</h1>
        <p className="text-lg mb-4">Count: {count}</p>
        <div className="flex space-x-4">
          <Button onClick={decreaseHandler}>Decrease --</Button>
          <Button onClick={increaseHandler}>Increase ++</Button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
