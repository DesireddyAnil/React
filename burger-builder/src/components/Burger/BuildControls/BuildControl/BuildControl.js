import React, { useContext } from "react";
import classes from "./BuildControl.css";
import IngredientsContext from "../../../../Contexts/IngredientsContext/IngredientsContext";

const BuildControl = (props) => {
  const { ingredientLabel, ingredientType } = props;
  const { onChangeIngredients, ingredients }  = useContext(IngredientsContext);

  const onAddIngredient = (type) => {
    onChangeIngredients(type, "ADD");
  };

  const onRemoveIngredient = (type) => {
    onChangeIngredients(type, "SUBTRACT");
  };

  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{ingredientLabel}</div>
      <button
        className={classes.Less}
        onClick={() => onRemoveIngredient(ingredientType)}
        disabled={ingredients[ingredientType] === 0}
      >
        Less
      </button>
      <button
        className={classes.More}
        onClick={() => onAddIngredient(ingredientType)}
      >
        More
      </button>
    </div>
  );
};

export default BuildControl;
