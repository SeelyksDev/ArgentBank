import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../api/login";

const initialState = {
    username: null,
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = { ...action.payload };
        },
        userLogout: (state) => {
            state.username = null;
            state.token = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;
        });
    },
});

export const loginUser = createAsyncThunk("user/loginUser", async (userId) =>
    login(userId)
);

export const { setUser, userLogout } = userSlice.actions;
export default userSlice.reducer;
