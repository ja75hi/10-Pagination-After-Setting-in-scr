import React, { useEffect } from 'react'
import MetaData from './Layouts/MetaData'
import { getProducts } from '../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import { Fragment } from 'react'
import Loader from './Layouts/Loader'
import Product from './product/Product'
import { toast } from 'react-toastify'


const Home = () => {
    const dispatch = useDispatch();
    const {products , loading , error } = useSelector((state)=> state.productsState)

    useEffect(()=>{
          if(error ){
            return toast.error(error,{
              //position:toast.POSITON.BOTTOM_CENTER
            })
          }
          
         dispatch(getProducts) 
    },[error,dispatch])


  return (

    <Fragment>
        { 
        loading ? <Loader/> :  
        <Fragment>
        <MetaData Title={`Buy Best Product`} />

        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
                <div className="row">
                    { products && products.map(product => (
                        <Product product={product} />
                    ))}
                        
                </div>
        </section>
        </Fragment>
        }
    </Fragment>


    
  )
}

export default Home