import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import './style.css'
/* import CharacterCard from '../../components/CharacterCard'; */
import ItemCard from '../../components/ItemCard';



const ItemDetailContainer =()=> {
    const [article, setArticle] =useState({});


    let { id }= useParams();

       useEffect(()=>{
        fetch('/json/data.json/',
        {
            headers : { 
                'Content-Type': 'application/json',
                Accept: 'application/json'
               }         
        }
        )
        .then(response =>(response.json())         
        )
        .then(json =>  setArticle(json))     
    }, [id]);
   
    return (
             
        <div >
            <div className="cards">
                <div className="card-list"></div>
                    <div className='character-detail' key={article.id} >
                    <ItemCard data = {article} />
                </div>
            </div>
        </div>
 

    )
}

export default ItemDetailContainer;

