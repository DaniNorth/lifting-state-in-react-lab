// src/components/IngredientList/IngredientList.jsx

import Ingredient from '../Ingredient/Ingredient.jsx';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={addToBurger}
          actionType="add"
        />
      ))}
    </ul>
  );
};

export default IngredientList;