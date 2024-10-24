import { useEffect, useState } from "react";

export default function JsonPlaceholder() {
  const [posts, setPosts] = useState([]);
  const [errDisplay, setErrDisplay] = useState(null); //Used state for error handling, to be used all across the code

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((prom) => prom.json())
      .then((data) => setPosts(data))
      .catch((err) => setErrDisplay(err));
  }, []);

  const map = posts.map(({ id, title, body }) => (
    // Iterate over each and every object in the array and used destructuring
    <div className="Post" key={id}>
      <h1>{`${id}. ${title}`}</h1>
      <p>{body}</p>
    </div>
  ));

  if (errDisplay) {
    // Log out the error in the console
    console.error(errDisplay);
  }

  return (
    <>
      <h1>{`${!errDisplay ? "Posts" : "Something went wrong!!"}`}</h1>
      {!errDisplay ? map : ""}
    </>
  );
}
