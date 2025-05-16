import React, { useEffect, useState } from "react";

function ProductList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("Error: ", err));
  }, []);

  return (
    <div>
      <h4 className="mb-3">User List (Fetched from API)</h4>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <strong>{user.name.firstname}</strong> — {user.email} —{" "}
            <em>{user.address.city}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
