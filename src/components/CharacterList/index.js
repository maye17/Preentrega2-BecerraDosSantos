import React, {useEffect,useState} from "react";
import './style.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import CharacterCard from '../CharacterCard/index';
import ButtonList from "../ButtonList";

const CharacterList =()=> {
    const [cursos, setCurso]= useState([]);

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
        .then(json =>  setCurso(json))     
    }, [id]);
   /*  return (
        <div>
            <div className="cards">
                <div className="card-list">
                    {cursos.map((curso) => {
                        return (
                            <div  key={curso.id}>
                                <Link to={`/curso/${curso.id}`}> 
                                    <CharacterCard data = {curso}   />
                                </Link>
                            </div>
                        )
                        })
                    }
                </div> 
            </div>        
        </div>
 
    ) */
    const allCategories = ['All',
    ...new Set(cursos.map((curso) => (curso.category)))];

  

    const filterCategory =(category)=> {
       
        if(category ==='All'){
            setCurso(cursos)
            return
        }
        const filterData =cursos.filter(curso =>curso.category===category)
        setCurso(filterData)
        } 

        const [categories, setCategories]= useState(allCategories);

    return (
        <div key={allCategories.id}>
            {categories.map((category) => {
                    return (
                        <div key={allCategories.id}>
                             <Link to={`/Cursocategory/${category.id}`}> 
                                <ButtonList categories={allCategories} filterCategory={filterCategory}>
                                </ButtonList>
                            </Link>
                        </div>
                
                    )})}
            <div className="card-list"  key={cursos.id}>
                {cursos.map((curso) => {
                    return (
                        <div  key={cursos.id}>
                            <Link to={`/curso/${curso.id}`}> 
                            <CharacterCard data = {curso}></CharacterCard>
                            </Link>
                        </div>
                    )
                    })
                }
            </div>
        </div>
)
}

export default CharacterList;