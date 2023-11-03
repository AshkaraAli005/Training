// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import { addNewPost } from "./postsSlice";
// import { selectAllUsers } from "../users/UserSlice";

// const AddPostForm = () => {
//     const dispatch = useDispatch()

//     const [title,  ] = useState('')
//     const [content, setContent] = useState('')
//     const [userId, setUserId] = useState('')
//     const [addRequestStatus, setAddRequestStatus] = useState('idle')

//     const users = useSelector(selectAllUsers)

//     const onTitleChanged = e => setTitle(e.target.value)
//     const onContentChanged = e => setContent(e.target.value)
//     const onAuthorChanged = e => setUserId(e.target.value)


//     const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

//     const onSavePostClicked = () => {
//         if (canSave) {
//             try {
//                 setAddRequestStatus('pending')
//                 dispatch(addNewPost({ title, body: content, userId })).unwrap()

//                 setTitle('')
//                 setContent('')
//                 setUserId('')
//             } catch (err) {
//                 console.error('Failed to save the post', err)
//             } finally {
//                 setAddRequestStatus('idle')
//             }
//         }

//     }

//     const usersOptions = users.map(user => (
//         <option key={user.id} value={user.id}>
//             {user.name}
//         </option>
//     ))

//     return (
//         <section>
//             <h2>Add a New Post</h2>
//             <form>
//                 <label htmlFor="postTitle">Post Title:</label>
//                 <input
//                     type="text"
//                     id="postTitle"
//                     name="postTitle"
//                     value={title}
//                     onChange={onTitleChanged}
//                 />
//                 <label htmlFor="postAuthor">Author:</label>
//                 <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
//                     <option value=""></option>
//                     {usersOptions}
//                 </select>
//                 <label htmlFor="postContent">Content:</label>
//                 <textarea
//                     id="postContent"
//                     name="postContent"
//                     value={content}
//                     onChange={onContentChanged}
//                 />
//                 <button
//                     type="button"
//                     onClick={onSavePostClicked}

//                 >Save Post</button>
//             </form>
//         </section>
//     )
// }
// export default AddPostForm


// // import { Button, Form, Select } from "antd";
// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { allUsers } from "../users/UserSlice";
// // import { addPost } from "./postSlice";
// // import Inputfields from "../../Components/Inputfields";

// // const PostForm = () => {
// //   const [form] = Form.useForm();
// //   const users = useSelector(allUsers);
// //   const dispatch = useDispatch();
// //   const uploadPost = (values) => {
// //     if (values) {
// //       dispatch(addPost(values.title, values.content, values.userId));
// //     }
// //     console.log(values);
// //     form.resetFields();
// //   };
// //   const isFormEmpty = !form.isFieldsTouched();

// //   const usersOption = users.map((user) => (
// //     <Select.Option key={user.id} value={user.id}>
// //       {user.name}
// //     </Select.Option>
// //   ));

// //   return (
// //     <div
// //       style={{
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         margin: "20px 0px 0px 20px",
// //       }}
// //     >
// //       <Form
// //         form={form}
// //         style={{
// //           display: "flex",
// //           flexDirection: "column",
// //           justifyContent: "center",
// //           width: "400px",
// //         }}
// //         onFinish={uploadPost}
// //       >
// //         <Inputfields name="title" />
// //         <Form.Item
// //           name="userId"
// //           rules={[{ required: true, message: "Please select a category" }]}
// //         >
// //           <Select placeholder="Select a category">
// //             <Select.Option value="none"></Select.Option>
// //             {usersOption}
// //           </Select>
// //         </Form.Item>
// //         <Inputfields name="content" />

// //         <Button
// //           htmlType="submit"
// //         >
// //           Upload
// //         </Button>
// //       </Form>
// //     </div>
// //   );
// // };

// // export default PostForm;
