import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import CharacterCard from '../CharacterCard/index'
import { Link} from "react-router-dom";
import Spinner from '../Spinner/index'

//fIREBASE

import {db} from '../../firebase/firebaseConfig.js'
import { collection, query, getDocs} from "firebase/firestore";


const CharacterList =()=> {

    const [articles, setArticles]= useState([]);
    
    let { id }= useParams();
    const [isLoading, setIsLoading] =useState(true);

    useEffect(()=> {

        const getMakeup = async ()=>  {
            const q = query(collection(db, "makeup"));
            const docs =[];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
              setArticles(docs);
            }
            getMakeup()
            setTimeout(()=> {
                setIsLoading(false)
            },2000)
        },[id])

    return (
        <div>
            {isLoading ? (
                <div className="Spinner">
                    <Spinner/>
                </div>
            ) : (
            <div className="cards" >
                <div className="card-list">
                    {articles.map((article) => {
                        return(
                            <Link to={`/detail/${article.id}`}
                            key={article.id}>
                                <CharacterCard data = {article}/>
                            </Link>               
                        )
                    })}
                </div>
            </div>
            )}
        </div>
    )
}

export default CharacterList;