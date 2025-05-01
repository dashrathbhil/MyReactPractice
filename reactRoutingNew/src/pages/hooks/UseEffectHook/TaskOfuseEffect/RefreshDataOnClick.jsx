import React, { useEffect, useState } from "react";

function RefreshDataOnClick() {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  // useEffect(() => {
  //   const loadData = () => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTitles(data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  // }, []);
  return (
    <>
      <h2>Task 5: Refresh Data with Button</h2>
      <p>
        • Fetch users from https://jsonplaceholder.typicode.com/users
        <br />
        • Add a "Refresh Data" button.
        <br />• When clicked, it should re-fetch the data and update the list.
      </p>

      <div>
        <button className="btn btn-primary" onClick={loadData}>
          Refresh
        </button>
        {loading ? (
          <p>please wait ..</p>
        ) : (
          <ul>
            {titles.map((item) => (
              <li key={item.id}>
                {item.name} <br />
                {item.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default RefreshDataOnClick;
