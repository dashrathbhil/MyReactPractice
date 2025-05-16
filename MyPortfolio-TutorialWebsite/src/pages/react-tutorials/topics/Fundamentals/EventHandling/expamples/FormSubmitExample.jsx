import React from 'react';

function FormSubmitExample() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter text" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmitExample;
