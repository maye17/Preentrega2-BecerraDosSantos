import React from 'react'
import { useState, useEffect } from 'react'
import CharacterCard from '../CharacterCard';


const ItemListContainer= ()=> {

  const [data, setData] = useState([]);

  function getLastPart(url) {
    const parts = url.split('/');
    return parts.at(-1);
  }


if(getLastPart(window.location.href) !== ""){
  var category = getLastPart(window.location.href);
}



const getData = () => {
  fetch('/json/data.json',
  {
      headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }         
  }
  )
  
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      if (category === null){
         setData(myJson)}
      else{
        function filterByCategory(myJson, category) {
          return myJson.filter(function (myJson) {
            return myJson["category"] === category;
          });
        }
        var selectedObject = filterByCategory(myJson, category);
        setData(selectedObject);
      }
    });
};

useEffect(() => {
  getData();
}, [category]); 

  return (
    <>
    <div>
    {data.map((dato) => {
    return(
      <CharacterCard key={dato.id} data={dato} />)
    })}
    </div>
    </>
  ) 

}

export default ItemListContainer;
