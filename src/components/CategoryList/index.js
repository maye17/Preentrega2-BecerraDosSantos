import React, {useEffect,useState} from "react";
import './style.css'
import { Link } from "react-router-dom";
 import CategoryCard from "../ItemCard";
 import ButtonList from "../ButtonList";



const CategoryList =()=> {
    const [articles, setArticle]= useState([]);
 

    const datos = `https://fakestoreapi.com/products/`;

    useEffect(()=> {
        fetch(datos)
        .then ((Response) => Response.json())
        .then ((json) =>setArticle(json))
     }
        ,[])
        
        const allCategories = ['All',
        ...new Set(articles.map((article) => (article.category)))];

      
    
        const filterCategory =(category)=> {
           
            if(category ==='All'){
                setArticle(articles)
                return
            }
            const filterData =articles.filter(article =>article.category===category)
            setArticle(filterData)
            } 

            const [categories, setCategories]= useState(allCategories);
    
        return (
            <div key={allCategories.id}>
                {categories.map((categoria) => {
                        return (
                            <div key={allCategories.id}>
                                 <Link to={`/category/${categoria.category}`}> 
                                    <ButtonList categories={allCategories} filterCategory={filterCategory}>
                                    </ButtonList>
                                </Link>
                            </div>
                    
                        )})}
                <div className="card-list"  key={articles.id}>
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