import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CategoryList from "../../components/CategoryList";

const ItemListContainerCat =()=> {
   
        const [activos, setActivo] =useState({});

        let { id }= useParams();
    
           useEffect(()=>{
            axios(`https://fakestoreapi.com/products/`).then ((res) => setActivo(res.data)
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