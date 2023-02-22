import React from "react";

const ButtonList = ({categories, filterCategory})=> {
    return(
        <div className="categoires">
            {categories.map(category => (
                <button
                key={category}
                onClick={()=> filterCategory(category)}
                className="btn-grilla"
                type="button">
                    {category}
                </button>
            ))}
        </div>
    )
}

export default ButtonList;

