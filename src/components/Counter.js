import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  }, [isRunning]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  return (
    <div>
      <h1 className='text-danger'>Counter: <small className='text-primary'>{count}</small></h1>
      <button class="btn btn-primary" onClick={increment}>Increment</button>&nbsp;
      <button class="btn btn-secondary" onClick={reset}>Reset</button>&nbsp;
      <button class="btn btn-success" onClick={toggleTimer}>{isRunning ? 'Stop' : 'Start'}</button>
      <h3>======================================================================</h3>
    </div>
  );
}

export default Counter;
