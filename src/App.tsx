import React from "react";

import "./App.css";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";

const App = () => {
  return (
    <AppContainer>
      <Column text="ToDo">
        <Card text="Generate app Scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typing" />
      </Column>
    </AppContainer>
  );
};

export default App;
