import { configureStore } from "@reduxjs/toolkit";
import cartslice from "./castslice/Castslice";
   



export const store = configureStore({
    reducer:{
        cart:cartslice,
    },
    devTools:true,
});