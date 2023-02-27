import React from 'react'
/* import ItemListContainer from '../../components/ItemListContainer/index' */
import CharacterList from '../../components/CharacterList'

const Maquillaje =() => {
  console.log('Maquillaje')
  return (
    <div>     
      <h1 className="text-center m-2">Maquillaje</h1>
      <CharacterList category="Maquillaje"/>
    </div>
  )
}

export default Maquillaje;