import React, {useEffect,useState} from "react";
import './style.css'
import { Link } from "react-router-dom";
import CharacterCard from '../CharacterCard/index'

const CharacterList =()=> {
    const [indumetarias, setIndumentaria]= useState([]);

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/')
        .then ((Response) => Response.json())
        .then ((json) => setIndumentaria(json))
     }
        ,[])
 
    return (
        <div>
            <div className="cards">
                <div className="card-list">
                    {indumetarias.map((Indumentaria) => {
                        return (
                            <div  key={Indumentaria.id}>
                                <Link to={`/detail/${Indumentaria.id}`}> 
                                    <CharacterCard data = {Indumentaria}   />
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

export default CharacterList;