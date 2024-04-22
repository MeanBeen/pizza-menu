import React from "react";

import { pizzaData } from "../../Utils/data";

import {
  Heading1,
  Header,
  Menu,
  Heading2,
  MenuParagraph,
  PizzaList,
  Pizza,
  PizzaImage,
  PizzaDetails,
  PizzaName,
  PizzaDescription,
  Container,
  PizzaStatus,
  SoldOutPizza,
  Footer,
  Order,
  Button,
} from "./style";

function HomePage() {
  return (
    <Container>
      <Header>
        <Heading1>Fast React Pizza Co.</Heading1>
      </Header>
      <Menu>
        <Heading2>OUR MENU</Heading2>
        <MenuParagraph>
          Authentic italian cuisine. 6 creative dishes to choose from. All from
          our stone oven, all organic, all delicious.
        </MenuParagraph>
        <PizzaList>
          {pizzaData.map((data) => (
            <Pizza>
              <PizzaImage width={200} src={data.photoName} alt="Pizza" />
              <PizzaDetails>
                <PizzaName>{data.name}</PizzaName>
                <PizzaDescription>{data.ingredients}</PizzaDescription>
                <PizzaStatus>{data.price}</PizzaStatus>
              </PizzaDetails>
            </Pizza>
          ))}
        </PizzaList>
      </Menu>

      <Footer>
        We're open from 12:00 to 22:00. come visit us or order online.
      </Footer>
      <Order>
        <Button>Order</Button>
      </Order>
    </Container>
  );
}

export default HomePage;
