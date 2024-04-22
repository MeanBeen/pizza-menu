import React from "react";
import HomePage from "./Container/HomePage";
import { Layout } from "antd";
import { GlobalStyle } from "./globalStyles";

const { Content } = Layout;

const App = () => {
  return (
    <Content>
      <GlobalStyle />
      <HomePage />
    </Content>
  );
};

export default App;
