import React, {useEffect,useState} from 'react'
import { useParams} from "react-router-dom";
import Spinner from '../../components/Spinner/index'
import CharacterCard from '../../components/CharacterCard/index.js';
import { Link } from 'react-router-dom';

//fIREBASE

import {db} from '../../firebase/firebaseConfig.js'
import { collection, query, getDocs,where} from "firebase/firestore";


const Itemcategory = ()=> {

    
    const [CategoriesMakeup, setCategoriesMakeup]= useState([]);
    const [isLoading, setIsLoading] =useState(true);

    const {category} = useParams();

    useEffect(()=> {

        const getCategory = async ()=>  {
           
            const q = query(collection(db, "makeup"),where("category","==",category));
            const docs =[];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setCategoriesMakeup(docs);
            }
            getCategory()
            setTimeout(()=> {
                setIsLoading(false)
            },2000)
        },[category])

    return (
        <div>
            <h1>{category}</h1>
            {isLoading ? (
                <div className="Spinner">
                    <Spinner/>
                </div>
            ) : (
            <div className="cards" >
                <div className="card-list">
                    {CategoriesMakeup.map((cat) => {
                        return(
                            <Link to={`/detail/${cat.id}`}
                            key={cat.id}>
                                <CharacterCard data = {cat} key={cat.id}/>   
                                </Link>           
                        )
                    })}
                </div>
            </div>
            )}
        </div>
    )
}

export default Itemcategory;