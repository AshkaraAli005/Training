import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(USERS_URL);
    return response.data
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer


// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   { id: 0, name: "Ashkar" },
//   { id: 1, name: "Kiran" },
//   { id: 2, name: "Vinash" },
//   { id: 3, name: "Raj" },
//   { id: 4, name: "Aravind" },
// ];

// const UserSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {},
// });

// export const { userReducer } = UserSlice.actions;
// export const allUsers = (state) => state.users;
// export default UserSlice.reducer;
