import { configureStore } from "@reduxjs/toolkit";

import postReducer from "../reduxFeatures/posts/postsSlice";
import userReducer  from "../reduxFeatures/users/UserSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    users: userReducer,
  },
});
