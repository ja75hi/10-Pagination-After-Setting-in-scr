import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import productsReducer from "./Components/Slices/ProductsSlice";
import productReducer from "./Components/Slices/ProductSlice";




const reducer  = combineReducers({
    productsState : productsReducer,
    productState : productReducer
})


const store = configureStore({
    reducer
    /*
    ,
    middleware:[thunk]

     */
   
})

export default store;