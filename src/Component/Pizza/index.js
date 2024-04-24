import React from "react";
import {
  Pizza,
  PizzaImage,
  PizzaDetails,
  PizzaDescription,
  PizzaName,
  PizzaStatus,
  SoldOutPizza,
} from "../../Container/HomePage/style";

const Pizzas = ({ name, image, descrip, price, status }) => {
  // if (status) return null;

  return (
    <Pizza className={status ? "sold-out" : ""}>
      <PizzaImage width={200} src={image} alt="Pizza" />
      <PizzaDetails>
        <PizzaName>{name}</PizzaName>
        <PizzaDescription>{descrip}</PizzaDescription>
        <PizzaStatus>{status ? "SOLD OUT" : price}</PizzaStatus>
      </PizzaDetails>
    </Pizza>
  );
};

export default Pizzas;
