import React from "react";

const Posts = (props) => {
  // console.log(props)
  return (
    <ul className="list-group mt-4">
      {props.posts.map((post) => {
        return (
          <li key={post.id} className="list-group-item mb-3">
            {post.title}
          </li>
        );
      })}
    </ul>
  );
};
export default Posts;
