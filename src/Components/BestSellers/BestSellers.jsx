import './BestSellers.css';
import BestSellersItem from "./BestSellersItem/BestSellersItem";
import {useEffect, useState} from "react";
import axios from "axios";

const BestSellers = () => {
    let [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
    },  [])

    return (
        <div className='BestSellers'>
            {
              products.length > 0 ? products.map(product => <BestSellersItem product={product} key={product.id}/>) : <h1>Loading...</h1>
            }
        </div>
    )
}

export default BestSellers;