import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpt from "./PostsExcerpt";

const PostsList = () => {
    const dispatch = useDispatch();

    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    let content;
    if (postStatus === 'loading') {
        content = <p>"Loading..."</p>;
    } else if (postStatus === 'succeeded') {
        const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    } else if (postStatus === 'failed') {
        content = <p>{error}</p>;
    }

    return (
        <section>
            <h2>Posts</h2>
            {content}
        </section>
    )
}
export default PostsList


// import {  useSelector } from "react-redux";
// import { allPosts } from "./postSlice";
// import React from "react";
// import axios from "axios";
// import Author from "./Author";



// const Posts = () => {
//   const posts = useSelector(allPosts);

//   const renderPosts = posts.map((post) => (
//     <article
//       key={post.id}
//       style={{
//         border: "1px solid black",
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "20px",
//         minWidth:"500px",
//         width: "auto",
//         marginBottom: "10px",
//       }}
//     >
//       <h2>{post.title}</h2>
//       <p>{post.content}</p>
//       <Author userId={post.userId}/>
//     </article>
//   ));

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <h1>posts</h1>
//       <div>{renderPosts}</div>
//     </div>
//   );
// };

// export default Posts;
