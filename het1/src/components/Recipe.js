import {Ingredients} from "./Ingredients";


export const Recipe = ({recipe}) => {
    return (
        <div>
            <h2>{recipe.name}</h2>
            <Ingredients ingredients={recipe.ingredients} />
            <p>{recipe.instructions}</p>
            <span>difficulty: {recipe.difficulty}</span>
            <hr />
        </div>
    )
}