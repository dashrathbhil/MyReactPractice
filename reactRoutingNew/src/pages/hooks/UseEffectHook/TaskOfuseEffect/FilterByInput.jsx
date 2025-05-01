import React, { useEffect, useState } from "react";

function FilterByInput() {
  const [users, setUsers] = useState([]);
  const [userName, setUserName] = useState("");
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(userName.toLowerCase())
  );

  const handleChange = (event) => {
    const input = event.target.value;
    setUserName(input);
  };

  useEffect(() => {
    // fetch data from API

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, []);

  return (
    <>
      <h2>Task 2: User Search by Name</h2>
      <p>
        • Fetch users from: https://jsonplaceholder.typicode.com/users
        <br />
        • Add an input box to search users by name.
        <br />• Filter and display matching results in real-time.
      </p>
      <input
        type="text"
        placeholder="Enter Your Name"
        className="form-control"
        value={userName}
        onChange={handleChange}
        // onChange={(e)=> setUserName(e.target.value)}
      />
      <ul>
        <ul>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => <li key={user.id}>{user.username}</li>)
          ) : (
            <li>Nothing ....</li>
          )}
        </ul>
      </ul>
    </>
  );
}

export default FilterByInput;
