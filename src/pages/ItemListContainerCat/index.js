import React, {useEffect, useState} from "react";
/* import CategoryList from "../../components/CategoryList"; */
import axios from "axios";
/* import CategoryCard from "../../components/CategoryCard"; */
import { useParams } from "react-router-dom";
import CategoryList from "../../components/CategoryList";

const ItemListContainerCat =()=> {
   
        const [activos, setActivo] =useState({});

        let { id }= useParams();
    
           useEffect(()=>{
            axios(`https://fakestoreapi.com/products/${id}`).then ((res) => setActivo(res.data)
            );
        }, [id]);
    
        return (
                 
            <div >
                <div className="cards">
                    <div className="card-list"></div>
                        <div className='character-detail' key={activos.id} >
                        <CategoryList data = {activos} />
                    </div>
                </div>
            </div>
     
    
        )
    
    }


export default ItemListContainerCat;