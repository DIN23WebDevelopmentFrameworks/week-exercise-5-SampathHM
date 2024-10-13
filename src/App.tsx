import { useState, useEffect } from 'react';
import RecipeTagList from './RecipeTagList';
import RecipeList from './RecipeList';

const App = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [tags, setTags] = useState([]);
  const [recipes, setRecipes] = useState([]);
  
  // Fetch tags on component mount
  useEffect(() => {
    async function fetchTags() {
      const response = await fetch('https://dummyjson.com/recipes/tags');
      const data = await response.json();
      setTags(data);
    };
    
    fetchTags();
  }, []);
  
  const handleTagClick = async (tag: string) => {
    setSelectedTag(tag);
    const response = await fetch(`https://dummyjson.com/recipes/tag/${tag}`);
    const data = await response.json();
    setRecipes(data.recipes);
  };

  const handleBackToTags = () => {
    setSelectedTag("");
    setRecipes([]);
  };

  return (
    <div>
      <h1>ACME Recipe O'Master</h1>
      {selectedTag ? (
        
        <div>
          <button onClick={handleBackToTags}>Back to Tags</button>
          <RecipeList recipes={recipes} />
        </div>
      ) : (
        <RecipeTagList tagList={tags} onSelectTag={handleTagClick} />
      )}
    </div>
  );
};

export default App;
