import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ProductComponents from './ProductComponent'
import axios from "axios";

import {setProduct} from '../redux/actions/productAction'

function ProductListing() {


  const products = useSelector(state => state);
  const dispatch = useDispatch();



  const fetchProducts = async () => {

    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log("Err :- ", err)
      });

      dispatch(setProduct(response.data));

  }


  useEffect(()=>{
    fetchProducts();

  },[])

  console.log("Products",products)

  return (
    <div className="ui grid container">
      <div className="four row wide">

      <ProductComponents />
      </div>
    </div>
  )
}

export default ProductListing