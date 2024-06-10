Counter Project Interview ✅

Que. In the following code, what is the code behaviour?

```
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
```

Ans:

1. In case of, following **setCounter(counter + 1);** it will execute only single time because it was not wrapped in callback function

```
const addValue = () => {

     setCounter(counter + 1);
     setCounter(counter + 1);
     setCounter(counter + 1);
     setCounter(counter + 1);
  };
```

2. **setCounter((prevCounter)=> prevCounter + 1);** it will execute multiple time whenever we call it because it was passed in callback function
```
const addValue = () => {

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };
```

Because we know in react functions are executed in bunch of bundle at complete multiple tasks at a single time. 