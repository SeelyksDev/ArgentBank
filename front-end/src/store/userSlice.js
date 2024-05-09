import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginAPI } from "../api/loginAPI";
import { getUserInfoAPI } from "../api/getUsernameAPI";

const initialState = {
    userInfo: {
        userName: null,
        firstName: null,
        lastName: null,
    },
    token: null,
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogout: (state) => {
            state.userInfo = null;
            state.token = null;
            state.error = null;
            localStorage.removeItem("Token");
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload.token;
                state.error = action.payload.error;
            })
            .addCase(getUserInfo.fulfilled, (state, action) => {
                state.userInfo = { ...action.payload };
            });
    },
});

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (userId, { dispatch }) => {
        const { email, password, remember } = userId;
        const { token, error } = await loginAPI({ email, password });

        if (token) {
            await dispatch(getUserInfo(token));
            if (remember) {
                localStorage.setItem("Token", token);
            }
        }

        return { token, error };
    }
);

export const getUserInfo = createAsyncThunk(
    "user/getUserInfo",
    async (token) => {
        const userInfo = await getUserInfoAPI(token);
        return userInfo;
    }
);

export const { setToken, userLogout } = userSlice.actions;
export default userSlice.reducer;
