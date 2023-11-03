import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/UserSlice";

const PostAuthor = ({ userId }) => {
    const users = useSelector(selectAllUsers)

    const author = users.find(user => user.id === userId);

    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor

// import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
// import { allUsers } from "../users/UserSlice";
// const Author =({userId}) =>{
//     const user = useSelector(allUsers)
//     const author = user.find(user => user.id === userId)
//     return <span>by : {author ? author.name : "Unown Author"}</span>
// }

// export default Author;