
interface IRecipeTagProps {
    tagName: string;
    onSelectTag: (tagName: string) => void;
}

const RecipeTag = ({ tagName: tag, onSelectTag: onTagClick }: IRecipeTagProps) => {
  return (
    <li>
      <button onClick={() => onTagClick(tag)}>
        {tag}
      </button>
    </li>
  );
};

export default RecipeTag;
