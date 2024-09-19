import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }

  function increaseHandler() {
    setCount(count + 1);
  }

  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
      <div className="text-[#0398d4] font-medium text-3xl">
        Increment & Decrement
      </div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344155]">
        <button
          onClick={decreaseHandler}
          className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
        >
          -
        </button>

        <div className="font-bold gap-12 text-5xl">{count}</div>

        <button
          onClick={increaseHandler}
          className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl "
        >
          +
        </button>
      </div>
      <button
        onClick={resetHandler}
        className="bg-[#0398d4] text-white px-5 py-2 rounded-md text-lg"
      >
        Reset
      </button>
    </div>
  );
}

export default App;
