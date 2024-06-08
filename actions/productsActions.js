import axios from "axios"
import { productsFail, productsRequest, productsSuccess } from "../Components/Slices/ProductsSlice";


export const getProducts =  async (dispatch) =>{

    try{
        dispatch(productsRequest())

        const {data} = await axios.get('/api/v1/products');

        dispatch(productsSuccess(data))
    }catch(error){
        //handle error

        dispatch(productsFail(error.response.data.message))
    }
    
}