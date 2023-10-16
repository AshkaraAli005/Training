import React from "react";
import Posts from "../reduxFeatures/posts/PostsList";
import PostForm from "../reduxFeatures/posts/AddPostForm";

const ReduxLearning = () => {
  return (
    <div style={{display:"flex" , flexDirection:"row", gap:"30px"}}>
      <PostForm />
      <Posts />
    </div>
  );
};

export default ReduxLearning;
