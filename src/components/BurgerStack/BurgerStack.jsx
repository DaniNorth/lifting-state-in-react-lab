// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from '../Ingredient/Ingredient.jsx';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul>
      {stack.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            index={index}
            onClick={removeFromBurger}
            actionType="remove"
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;