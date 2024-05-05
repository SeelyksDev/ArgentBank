import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
            console.log(state.token);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;
        });
    },
});

export const loginUser = createAsyncThunk("user/loginUser", async (userId) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: userId.email,
            password: userId.password,
        }),
    });
    const responseJson = await response.json();
    const token = responseJson.body.token;
    return token;
});

export const { setUser, userLogout } = userSlice.actions;
export default userSlice.reducer;
