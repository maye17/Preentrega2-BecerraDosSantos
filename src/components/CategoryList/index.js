import React, {useEffect,useState} from "react";
import './style.css'
import { Link } from "react-router-dom";
 import CategoryCard from "../CategoryCard";
 import ButtonList from "../ButtonList";



const CategoryList =()=> {
    const [articles, setArticle]= useState([]);
    const [categoires, setCategories]= useState(allCategories);

    const datos = "https://fakestoreapi.com/products/";

    useEffect(()=> {
        fetch(datos)
        .then ((Response) => Response.json())
        .then ((json) =>setArticle(json))
     }
        ,[])
        
        const allCategories = ['All',
        ...new Set(articles.map((article) => (article.category)))];
   
    
        const filterCategory =(category)=> {
           
            if(category==='All'){
                setArticle(articles)
                return (console.log(setArticle))
            }
            const filterData =articles.filter(article =>article.category===category)
            console.log(filterData);
            setArticle(filterData)
            } 
    
        return (
            <div>
                {categories.filter((category) => {
                        return (
                 <Link to={`/category/${category.id}`}> 
                <ButtonList categories={allCategories} filterCategory={filterCategory}>
                </ButtonList>
                </Link>
                        )})}
                <div className="card-list">
                    {articles.map((article) => {
                        return (
                            <div  key={article.id}>
                                <Link to={`/detail/${article.id}`}> 
                                <CategoryCard articles = {articles}></CategoryCard>
                                </Link>
                            </div>
                        )
                        })
                    }
                </div>
            </div>
    )
}

export default CategoryList;