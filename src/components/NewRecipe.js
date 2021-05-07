import React from "react";

const NewRecipe = (props) => {
  return (
    <div>
      <input ref={props.authorRef} type="text" placeholder="recipe author" />
      <input ref={props.nameRef} type="text" placeholder="recipe name" />
      <input ref={props.imageRef} type="text" placeholder="image URL" />
      <input ref={props.descRef} type="text" placeholder="description" />
      <input ref={props.ing1Ref} type="text" placeholder="ingredient 1" />
      <input
        ref={props.ing1UnitRef}
        type="text"
        placeholder="ingredient 1 unit"
      />
      <input
        ref={props.ing1AmountRef}
        type="number"
        placeholder="ingredient 1 amount"
      />
      <input ref={props.ing2Ref} type="text" placeholder="ingredient 2" />
      <input
        ref={props.ing2UnitRef}
        type="text"
        placeholder="ingredient 2 unit"
      />
      <input
        ref={props.ing2AmountRef}
        type="number"
        placeholder="ingredient 2 amount"
      />
      <input ref={props.ing3Ref} type="text" placeholder="ingredient 3" />
      <input
        ref={props.ing3UnitRef}
        type="text"
        placeholder="ingredient 3 unit"
      />
      <input
        ref={props.ing3AmountRef}
        type="number"
        placeholder="ingredient 3 amount"
      />
      <input ref={props.prepRef} type="text" placeholder="preparation" />
      <button onClick={props.addNewRecipe}>Add</button>
    </div>
  );
};

export default NewRecipe;
