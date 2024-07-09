import {Ingredients} from "./Ingredients";

export const Recipe = (props) => {
    const {recipe} = props;

    return (
        <div>
            <h2>{recipe.name}</h2>
            <Ingredients ingredients={recipe.ingredients} hello={props.hello}/>
            <p>{recipe.instructions}</p>
            <span>difficulty: {recipe.difficulty}</span>
            <hr/>
        </div>
    )
}
