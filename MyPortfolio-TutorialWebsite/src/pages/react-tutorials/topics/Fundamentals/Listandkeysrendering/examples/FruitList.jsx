import React from "react";

function FruitList() {
  // Define an array of fruits with unique id and name
  const fruits = [
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Mango" },
    { id: 4, name: "Gauava" },
    { id: 5, name: "Grapes" },
    { id: 6, name: "Banana" },
  ];

  return (
    <>
      <div className="border p-3">
        <h5>Fruit List</h5>
        <ul>
          {fruits.map((fruit) => (
            // Using the fruit.id as a unique key for each list item
            <li key={fruit.id}>
              {fruit.name} = {fruit.id}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FruitList;