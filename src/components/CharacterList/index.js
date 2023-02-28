import React, {useEffect,useState} from "react";
/* import './style.css' */
/*  import { Link } from "react-router-dom";  */
import { useParams } from "react-router-dom";
import ButtonListCurso from "../ButtonListCurso";
/* import CharacterCard from "../CharacterCard"; */
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

    const AllCategory = ['All',
        ...new Set(articles.map(article => article.category)),];
                    console.log(AllCategory);
 
    const [categorias, setCategorias]=useState(AllCategory);

    const filterCategoria = (category)=> {
        if(category =='All'){
            setArticles(articles)
        }
        const filterData = articles.filter( article => article.category == category);
        /* console.log(filterData); */
        setArticles(filterData)
    }
    return (
        <>
        <div key={id}>
                 <ButtonListCurso key={id} categorias={AllCategory} filterCategoria={filterCategoria}>
                 </ButtonListCurso>
            <ArticlesList data ={articles} key={id} />
        </div>
{/*         <div>
              <Link to={`/category/Master`}> 
                 <ButtonListCurso categorias={AllCategory} filterCategoria={filterCategoria}>
                 </ButtonListCurso>
             </Link>
            <ArticlesList data ={cursos} key={id} />
        </div> */}
        </>
     /*    <div>
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
        </div> */
 
    )

 

 
                    /* 

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
                                <ButtonListCurso categories={allCategories} filterCategory={filterCategory}>
                                </ButtonListCurso>
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
) */
}

export default CharacterList;