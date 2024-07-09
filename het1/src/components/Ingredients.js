import React from 'react';


export const Ingredients = ({ingredients, hello}) => {
    return (
        <React.Fragment>
            {hello} Ingredients: {ingredients.map((ingredient, index) => <span key={index}>{ingredient} ,</span>)}
        </React.Fragment>
    )
}
