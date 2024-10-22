

export const Ingredients = ({ingredients}) => (<div>
    Ingredients: {ingredients.map((text, index) => <span key={index}>{text}, </span>)}
</div>);