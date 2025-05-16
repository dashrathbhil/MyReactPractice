import React from 'react';

function ButtonClickExample() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
    </div>
  );
}

export default ButtonClickExample;
