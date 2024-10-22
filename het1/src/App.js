import './App.css';
import {Recipe} from "./components/Recipe";

const recipes = [
    {
        id: 1,
        name: 'Rantotta',
        ingredients: [
            "2 tojas",
            "so"
        ],
        instructions: "Megcsinaljuk a rantottat",
        difficulty: 3
    },
    {
        id: 2,
        name: "Rantotta",
        ingredients: [
            "2 tojas",
            "so"
        ],
        instructions: "Megcsinaljuk a rantottat",
        difficulty: 3,
    },
    {
        id: 3,
        name: "Rantotta",
        ingredients: [
            "2 tojas",
            "so"
        ],
        instructions: "Megcsinaljuk a rantottat",
        difficulty: 3,
    }
]


function App() {
  return (
      <>
          <h1>Recipes</h1>
          {recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}/>)}
      </>
  );
}

export default App;
