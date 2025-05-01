import React, { useEffect, useState } from "react";

function FilterById() {
  const [posts, setPosts] = useState([]); 
  const [postId, setPostId] = useState();

 
  const filteredPosts = posts.filter((post) => post.id === parseInt(postId));

  const handleChange = (event) => {
    const input = event.target.value;
    setPostId(input); 
  };

  useEffect(() => {
  
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data); 
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }, []);

  return (
    <>
      <h2>Task 4: Load Post by ID</h2>
      <p>
        • Create an input field for post ID (1–100).
        <br />
        • On entering a number, fetch and display that specific post's title and body.
        <br />
        • Use https://jsonplaceholder.typicode.com/posts/{`{id}`}
      </p>

      <input
        type="number"
        placeholder="Enter Post ID"
        className="form-control"
        value={postId}
        onChange={handleChange}
      />

      <ul>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.id}>
            {post.title}<br/>
            {post.body}
            </li>
          ))
        ) : (
          <li>No post...</li>
        )}
      </ul>
    </>
  );
}

export default FilterById;
