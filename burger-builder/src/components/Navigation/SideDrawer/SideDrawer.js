import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/BackDrop/BackDrop";
import Aux from "../../../hoc/Aux";
import classes from "./SideDrawer.css";

const sideDrawer = (props) => {
  let attachecClasses = [classes.SideDrawer, classes.Close];
  if (props.open) {
    attachecClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachecClasses.join(" ")}>
        <div className={classes.Logo}>
          <Logo />
        </div>

        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
