import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import CharacterList from "../../components/CharacterList";

const CursoCategory =()=> {
    const [activos, setActivo] =useState({});

    let { id }= useParams();

       useEffect(()=>{
        fetch('/json/data.json',
        {
            headers : { 
                'Content-Type': 'application/json',
                Accept: 'application/json'
               }         
        }
        )
        .then(response =>(response.json())         
        )
        .then(json =>  setActivo(json))     
    }, [id]);
    

    return (
             
        <div >
            <div className="cards">
                <div className="card-list"></div>
                    <div className='character-detail' key={activos.id} >
                    <CharacterList data = {activos} />
                </div>
            </div>
        </div>
 

    )

}

export default CursoCategory;