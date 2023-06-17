import { configureStore } from "@reduxjs/toolkit";
import bazarReducer  from './bazarSlice';

export const Store = configureStore({
    reducer:{
        bazar:bazarReducer,
    },
})