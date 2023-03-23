import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import apiSlice from "../Features/api/apiSlice";
import authSlice from "../Features/Auth/authSlice";

const store = configureStore({
    reducer : {
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth :  authSlice,
    },
    middleware : (getDefaultMiddleware)=>getDefaultMiddleware().concat(apiSlice.middleware),
});

export default store;