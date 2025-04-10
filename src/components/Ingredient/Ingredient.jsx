import { FaPlus, FaTimes } from 'react-icons/fa';

const Ingredient = ({ ingredient, index, onClick, actionType }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      {actionType === 'add' && (
            <button className="add" onClick={() => onClick(ingredient)}>
                <FaPlus />
            </button>
        )}
        {actionType === 'remove' && (
            <button className="remove" onClick={() => onClick(index)}>
                <FaTimes />
            </button>
        )}
    </li>
  );
};

export default Ingredient;
