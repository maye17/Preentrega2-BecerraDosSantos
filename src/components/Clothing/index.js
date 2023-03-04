
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClothingCard from '../../components/ClothingCard/index'



const Clothing =() => {
    const [products, setProducts]= useState([]);

    
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then ((Response) => Response.json())
        .then ((json) => setProducts(json))
     }
        ,[])
    return (

        <div>
             <div className="cards">
                <div className="card-list">
                    {products.map((product) => {
                        return (
                            <div  key={product.id}>
                                <Link to={`/clothingDetail/${product.id}`}> 
                                    <ClothingCard data = {product}   />
                                </Link>
                            </div>
                        )
                        })
                    }
                </div> 
            </div>        
        </div>
 
    )
}

export default Clothing;
