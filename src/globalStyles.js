import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import { Button, Typography } from "antd";

const { Title, Text } = Typography;

export const GlobalStyle = createGlobalStyle`
  body,html {

  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
    
  font-family: 'Roboto Mono', sans-serif;
  color: #252525;
  font-weight: 400;
  background-color: #f7f2e9;
  border-bottom: 1.6rem solid #edc84b;
  min-height: 100vh;
  padding: 3.2rem;
  padding-bottom: 6rem;
  }
`;
