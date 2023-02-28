import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import './style.css'
import ItemCard from '../../components/ItemCard';


const ItemDetailContainer =()=> {
    const [article, setArticle]= useState({});
    let { id }= useParams();
    const getData = () => {    
 
        fetch('/json/data.json',
        {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }         
        }
        )
        .then(function (response) {
            return response.json();
          })
          .then(function (myJson) {
            function filterById(myJson, id) {
              return myJson.filter(function (myJson) {
                return myJson["id"] == id;
              })[0];
            }
            var selectedObject = filterById(myJson, id);
            setArticle(selectedObject);
          });
      };
      useEffect(() => {
        getData();
      }, [id]); 
    return (
        <>
            <h1>Detalle del Curso</h1>
            <div className='cards'>
            <div className='card-list'> 
                <div key={id}>         
                    <ItemCard data = {article}/>
                </div>            
            </div>
            </div>    
        </>
    )
    
}

export default ItemDetailContainer;

