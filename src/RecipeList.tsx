import Recipe from './Recipe';

interface IRecipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: string;
    cuisine: string;
    caloriesPerServing: number;
    tags: string[];
    userId: number;
    image: string;
    rating: number;
    reviewCount: number;
    mealType: string[];
}

interface IRecipeListProps {
    recipes: IRecipe[];
}

const RecipeList = ({ recipes }: IRecipeListProps) => {
  return (
    <div>
      <h2>Recipes for</h2>
      <ul>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipeData={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
