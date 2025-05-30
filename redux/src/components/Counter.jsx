import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, addByAmount } from '../app/counter';

function Counter() {
  const [value, setValue] = useState('');
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const handleAdd = () => {
    const number = parseInt(value);
    if (!isNaN(number)) {
      dispatch(addByAmount(number));
      setValue('');
    }
  };

  return (
    <div className="container text-center mt-5">
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <div className="d-flex justify-content-center gap-3 mb-3">
        <button className="btn btn-success" onClick={() => dispatch(increment())}>+</button>
        <button className="btn btn-warning" onClick={() => dispatch(decrement())}>−</button>
        <button className="btn btn-danger" onClick={() => dispatch(reset())}>Reset</button>
      </div>

      <div className="d-flex justify-content-center gap-2">
        <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="form-control w-auto"
          placeholder="Enter number"
        />
        <button className="btn btn-primary" onClick={handleAdd}>Add to Counter</button>
      </div>
    </div>
  );
}

export default Counter;
