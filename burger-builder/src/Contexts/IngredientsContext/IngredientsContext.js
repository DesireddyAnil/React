import React from "react";

const ingredientsContext = React.createContext({
  onChangeIngredients: () => {},
  ingredients: {},
});

export default ingredientsContext;
