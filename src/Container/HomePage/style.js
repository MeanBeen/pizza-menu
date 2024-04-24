import styled from "styled-components";

export const Header = styled.div`
  align-self: stretch;
`;

export const Heading1 = styled.h1`
  /* Non-accessible color */

  /* color: #af8602; */
  color: #edc84b;
  text-transform: uppercase;
  text-align: center;
  font-size: 5.2rem;
  font-weight: 300;
  letter-spacing: 3px;
  position: relative;
  width: 100%;
  display: block;

  &::before,
  &::after {
    display: block;
    content: "";
    height: 3px;
    width: 4rem;
    background-color: #edc84b;
    position: absolute;
    top: calc(50% - 1px);
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.8rem;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const Heading2 = styled.h2`
  display: inline-block;
  padding: 1rem 0;
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  font-size: 2.4rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 500;
`;

export const MenuParagraph = styled.p`
  font-size: 1.5rem;
  text-align: center;
  line-height: 1.6;
  width: 80%;
`;

export const PizzaList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4.8rem;
`;

export const Pizza = styled.li`
  display: flex;
  gap: 3.2rem;
  &.sold-out {
    color: #888;

    img {
      filter: grayscale();
      opacity: 0.8;
    }
  }
`;

export const PizzaImage = styled.img`
  width: 12rem;
  aspect-ratio: 1;
  align-self: start;
`;

export const PizzaDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.4rem 0;
`;

export const PizzaName = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-top: 0;
`;

export const PizzaDescription = styled.p`
  font-size: 1.4rem;
  font-weight: 300;
  font-style: italic;
  margin-bottom: auto;
`;

export const PizzaStatus = styled.span`
  display: block;
  font-size: 1.6rem;
`;

export const SoldOutPizza = styled(Pizza)`
  color: #888;

  img {
    filter: grayscale();
    opacity: 0.8;
  }
`;

export const Footer = styled.footer`
  font-size: 1.4rem;
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const Button = styled.button`
  color: inherit;
  font-family: inherit;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  background-color: #edc84b;
  padding: 1.4rem 3.2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #e9bb24;
  }
`;

// @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,500;1,300&display=swap');

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// html {
//   font-size: 62.5%;
// }

// body {
//   font-family: 'Roboto Mono', sans-serif;
//   color: #252525;
//   font-weight: 400;
//   background-color: #f7f2e9;
//   border-bottom: 1.6rem solid #edc84b;
//   min-height: 100vh;
//   padding: 3.2rem;
//   padding-bottom: 6rem;
// }

// .container {
// max-width: 80rem;
// margin: 0 auto;

// display: flex;
// flex-direction: column;
// align-items: center;
// gap: 4.8rem;
// }

// /* *************** */

// .header {
//   align-self: stretch;
// }

// .header h1 {
// /* Non-accessible color */
// color: #edc84b;
// /* color: #af8602; */

// text-transform: uppercase;
// text-align: center;
// font-size: 5.2rem;
// font-weight: 300;
// letter-spacing: 3px;
// position: relative;
// width: 100%;
// display: block;
// }

// .header h1::before,
// .header h1::after {
//   display: block;
//   content: '';
//   height: 3px;
//   width: 12rem;
//   background-color: #edc84b;
//   position: absolute;
//   top: calc(50% - 1px);
// }

// .header h1::before {
//   left: 0;
// }

// .header h1::after {
//   right: 0;
// }

// /* *************** */

// .menu {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 4rem;
// }

// .menu h2 {
//   display: inline-block;
//   padding: 1rem 0;
//   border-top: 2px solid currentColor;
//   border-bottom: 2px solid currentColor;
//   font-size: 2.4rem;
//   text-transform: uppercase;
//   letter-spacing: 3px;
//   font-weight: 500;
// }

// .menu > p {
//   font-size: 1.5rem;
//   text-align: center;
//   line-height: 1.6;
//   width: 80%;
// }

// .pizzas {
//   list-style: none;
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 4.8rem;
// }

// .pizza {
//   display: flex;
//   gap: 3.2rem;
// }

// .pizza img {
//   width: 12rem;
//   aspect-ratio: 1;
//   align-self: start;
// }

// .pizza div {
//   display: flex;
//   flex-direction: column;
//   gap: 0.8rem;
//   padding: 0.4rem 0;
// }

// .pizza h3 {
//   font-size: 2rem;
//   font-weight: 400;
// }

// .pizza p {
//   font-size: 1.4rem;
//   font-weight: 300;
//   font-style: italic;
//   margin-bottom: auto;
// }

// .pizza span {
//   display: block;
//   font-size: 1.6rem;
// }

// .pizza.sold-out {
//   color: #888;
// }

// .pizza.sold-out img {
//   filter: grayscale();
//   opacity: 0.8;
// }

// /* *************** */

// .footer {
//   font-size: 1.4rem;
// }

// .order {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 2.4rem;
// }

// .btn {
//   color: inherit;
//   font-family: inherit;
//   border: none;
//   font-size: 1.4rem;
//   font-weight: 500;
//   background-color: #edc84b;
//   padding: 1.4rem 3.2rem;
//   cursor: pointer;
//   transition: all 0.2s;
// }

// .btn:hover {
//   background-color: #e9bb24;
// }

// /*
// SPACING SYSTEM (px)
// 2 / 4 / 8 / 12 / 16 / 24 / 32 / 40 / 48 / 64 / 80 / 96 / 128

// FONT SIZE SYSTEM (px)
// 10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 /52 / 62 / 74 / 86 / 98
// */
