import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/slices/CounterSlice";

const Counter = () => {
  // useSelector hook used for accessing values for particular slice
  const count = useSelector((state) => state.counter.value);

  // useDispatch hook is used for calling functions inside reducers
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />

      <div>{count}</div>

      <br />
      <br />

      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
