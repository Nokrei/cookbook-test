import React from "react";

const RecipeContent = (props) => {
  return (
    <div className="recipe-content">
      <div className="recipe-content__name">
        <h1>{props.name}</h1>
      </div>
      <div className="recipe-content__decription"> {props.description}</div>
      <br />
      <div className="recipe-content__author">by {props.author}</div>
      <div className="recipe-content__box">
        <img src={props.image} alt={props.alt} className="recipe-content__image" />
        <div className="recipe-content__text">
          <div className="recipe-content__ingredients">
            <h2 style={{ display: "inline-block", marginRight: "1rem" }}>
              Ingredients
            </h2>
            for <button onClick={props.add}>+</button>
            <span style={{padding:'0 0.5rem'}}>{props.consumers}</span>
            <button onClick={props.subtract}>-</button>
            {props.ingredients}
          </div>
          <div className="recipe-content__prep">
            <h2>Preparation</h2>
            {props.prep}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeContent;
