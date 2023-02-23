import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import CharacterCard from "../../components/CharacterCard";

const CursoDetailContainer =()=> {
    
    const [curso, setCursos]= useState([]);

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
        .then(json =>  setCursos(json))     
    }, [id]);
    
        return (
                 
            <div >
                <div className="cards">
                    <div className="card-list"></div>
                        <div className='character-detail' key={curso.id} >
                        <CharacterCard data = {curso} />
                    </div>
                </div>
            </div>
        )
}

export default CursoDetailContainer;