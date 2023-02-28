import React, {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import ButtonListCurso from "../ButtonListCurso";
import ArticlesList from "../ArticlesList";

const CharacterList =()=> {

    const [articles, setArticles]= useState([]);
    
    let { id }= useParams();

      useEffect(()=>{
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
    }, [id]);

    const AllCategory = [
        ...new Set(articles.map(article => article.category)),];
                    console.log(AllCategory);
 
    const [categorias, setCategorias]=useState(AllCategory);

    const filterCategoria = (category)=> {
        if(category =='All'){
            setArticles([articles])
        }
        const filterData = articles.filter( article => article.category == category);
        
        setArticles(filterData)
       
    }
    return (
        <>
        <div key={id}>
                 <ButtonListCurso key={id} categorias={AllCategory} filterCategoria={filterCategoria}>
                 </ButtonListCurso>
                 
            <ArticlesList data ={articles} key={id} />
       </div>
       </>
)
}

export default CharacterList;