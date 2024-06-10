import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15;

  const addValue = () => {
    // counter = counter + 1;

    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);
    // setCounter(counter + 1);

    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    // setCounter(counter - 1);
    // console.log("Clicked", counter);

    if (counter >= 1) {
      setCounter(counter - 1);
    } else {
      setCounter;
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>

      <p>Click Buttons to React</p>
    </>
  );
}

export default App;
