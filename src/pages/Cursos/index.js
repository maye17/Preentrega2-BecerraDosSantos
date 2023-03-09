import React from "react";
import CharacterList from "../../components/CharacterList";
import './style.css'

const ItemListContainer = ()=> {
    return(
        <div className="cards">
            <h1>Cursos</h1>
            <CharacterList/>
        </div>
    )
}

export default ItemListContainer;