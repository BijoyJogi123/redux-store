import {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useParams } from "react-router-dom";
import { selectProduct,removeSelectProduct } from '../redux/actions/productAction';
import axios from  'axios';


function ProductDetails() {

const {productId} = useParams();


let  product = useSelector((state) => state.product);

const {image,title,description,category,price} = product;

const dispatch = useDispatch();

const fetchProducts = async () => {

  const response = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)

    .catch((err) => {
      console.log("Err :- ", err)
    });

    dispatch(selectProduct(response.data));
  
  }
   
useEffect(() => {

  if(productId && productId !=="") fetchProducts();

      return ()=>{ dispatch(removeSelectProduct())
      };



                                        //THIS IS PAGE AFTER CLICKING IN THE PRODUCT THATS WHY IT IS PRODUCT DETAILS PAGE
 
}, [productId])
  return (
    <div className="ui grid container">
    {Object.keys(product).length === 0 ? (
      <div>...Loading</div>
    ) : (
      <div className="ui placeholder segment">
        <div className="ui two column stackable center aligned grid">
          <div className="ui vertical divider">AND</div>
          <div className="middle aligned row">
            <div className="column lp">
              <img className="ui fluid image" src={image} />
            </div>
            <div className="column rp">
              <h1>{title}</h1>                                              
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
      )
}

export default ProductDetails;