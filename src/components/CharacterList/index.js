import React, {useEffect,useState} from "react";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import ButtonListCurso from "../ButtonListCurso";
import ArticlesList from "../ArticlesList";
=======
import CharacterCard from '../CharacterCard/index'
import { Link} from "react-router-dom";
import Spinner from '../Spinner/index'

//fIREBASE

import {db} from '../../firebase/firebaseConfig.js'
import { collection, query, getDocs} from "firebase/firestore";
>>>>>>> qa

const CharacterList =()=> {

    const [articles, setArticles]= useState([]);
<<<<<<< HEAD
    
    let { id }= useParams();
=======
    const [isLoading, setIsLoading] =useState(true);

    useEffect(()=> {
>>>>>>> qa

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
        },[])

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

      /* useEffect(()=>{
        fetch('/json/data.json',
        {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }         
        }
        )
        .then(response =>(response.json())         
        )
        .then(json => setArticles(json))     
    }, [id]); */

 /*    const AllCategory = [
        ...new Set(articles.map(article => article.category)),];
 
    const [categorias, setCategorias]=useState(AllCategory);

    const filterCategoria = (category)=> {
<<<<<<< HEAD
        if(category =='All'){
            setArticles([articles])
        }
        const filterData = articles.filter( article => article.category == category);
        
=======
        const filterData = articles.filter( article => article.category === category);

>>>>>>> qa
        setArticles(filterData)
       
    }
    return (
        <>
        <div key={id}>
                 <ButtonListCurso key={id} categorias={AllCategory} filterCategoria={filterCategoria}>
                 </ButtonListCurso>
                 
            <ArticlesList data ={articles} key={id} />
<<<<<<< HEAD
       </div>
       </>
)
=======
        </div>
        </>
 
    ) */
>>>>>>> qa
}

export default CharacterList;