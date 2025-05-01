import React, { useEffect, useState } from "react";

function LoadingMsg() {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [seemore, setSeeMore] = useState(15);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setTitles(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`error:${err}`);
      });
  }, []);

  return (
    <>
      <h2>Task 1: Fetch and Display Posts</h2>
      <p>
        • Use the API: https://jsonplaceholder.typicode.com/posts
        <br />
        • Display the list of post titles.
        <br />• Show a loading message while data is being fetched.
      </p>
      <div>
        {loading ? (
          <p>please wait ..</p>
        ) : (
          <ul>
            {titles.slice(0, seemore).map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
        <button className="btn btn-primary" onClick={() => setSeeMore(seemore + 15)}>Show More</button>
      </div>
    </>
  );
}

export default LoadingMsg;
