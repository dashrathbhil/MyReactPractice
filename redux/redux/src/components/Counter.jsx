import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,reset } from './redux/counter';

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>-</button>
      <button onClick={() => dispatch(reset())} style={{ marginLeft: '10px' }}>reset</button>
    </div>
  );
}

export default Counter;
