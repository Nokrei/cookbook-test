import React from "react";
const RecipeMenu = (props) => {
  return (
    <div onClick={props.recipeClick} className="recipe-menu__item">
      {props.name}
    </div>
  );
};

export default RecipeMenu;
