import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import IngredientsContext from "../../Contexts/IngredientsContext/IngredientsContext";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 1,
  bacon: 1.5,
  meat: 2,
  cheese: 0.5,
};

class BurgerBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0,
      },
      purchasable: false,
      ordering: false,
      totalPrice: 4,
    };
  }

  onOrdering = () => {
    this.setState({ ordering: true });
  };

  onOrderCancel = () => {
    this.setState({ ordering: false });
  };

  onOrderContinue = () => {
    alert("continue");
  };

  onChangeIngredients = (type, operation) => {
    this.setState((prevState) => {
      const ingredients = {
        ...prevState.ingredients,
        [type]:
          operation === "ADD"
            ? prevState.ingredients[type] + 1
            : prevState.ingredients[type] - 1,
      };
      const purchasable =
        Object.keys(ingredients)
          .map((key) => ingredients[key])
          .reduce((acc, cur) => acc + cur, 0) > 0;
      return {
        purchasable,
        ingredients,
        totalPrice:
          operation === "ADD"
            ? prevState.totalPrice + INGREDIENT_PRICES[type]
            : prevState.totalPrice - INGREDIENT_PRICES[type],
      };
    });
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.ordering} modalClosed={this.onOrderCancel}>
          <OrderSummary
            price={this.state.totalPrice}
            ingredients={this.state.ingredients}
            purchaseCancelled={this.onOrderCancel}
            purchaseContinued={this.onOrderContinue}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <IngredientsContext.Provider
          value={{
            onChangeIngredients: this.onChangeIngredients,
            ingredients: { ...this.state.ingredients },
          }}
        >
          <BuildControls
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            onOrdering={this.onOrdering}
          />
        </IngredientsContext.Provider>
      </Aux>
    );
  }
}

export default BurgerBuilder;
