import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import './style.css'

import {db} from '../../firebase/firebaseConfig.js'
import { collection, query, getDocs , where, documentId} from "firebase/firestore";
import ItemCard from '../../components/ItemCard';
import Spinner from 'react-bootstrap/esm/Spinner';


const ItemDetailContainer =()=> {

    const [article, setArticle] = useState([]);
    const [isLoading, setIsLoading] =useState(true);

    const {id}= useParams();

    useEffect(()=> {

        const getMakeup = async ()=>  {
          
            const q = query(collection(db, "makeup"),where(documentId(),"==",id));
            const docs =[];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
              setArticle(docs);
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
        <div>
            <div>
                {article.map((art) => {
                    return(
                        <ItemCard dataDetail = {art} key={art.id}/>
                    )
                })}
            </div>
        </div>
        )}
    </div>
    )
    
}

export default ItemDetailContainer;


/*     const [article, setArticle]= useState({});
    
    useEffect(()=> {

      const getMakeups = async ()=>  {
          const q = query(collection(db, "makeup"));
          const querySnapshot = await getDocs(q);
         /*  console.log("data", querySnapshot); */
     /*     const documents =[];
         querySnapshot.forEach((doc) => { */
      /*     console.log(doc.id, " => ", doc.data()); */
         /*  documents.push({...doc.data(), id: doc.id})
        });
        setArticle(documents);
      }
      getMakeups()
  },[]) */

