import React, {useEffect} from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch() 
    const fetchProducts = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
            console.log("Err", err);
        })
        dispatch(setProducts(response.data)); // Retorna productActions.js {type:...paylod:...}
//    console.log(response)
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products)
    
    return(
    <div className = "ui grid container">
        <ProductComponent />
    </div>
    ) 
}

export default ProductListing;

//Nota: Al usar los state de Redux no necesitamos pasar "product" por props
//      Podemos acceder a los estados con los componentes.