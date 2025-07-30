import React from "react";
import "./App.css";
import { AppContainer } from "./styles";
import { Column } from "./Column";

import { useAppState } from "./AppStateContext";
import { AddNewItem } from "./AddNewItem";

const App = () => {
  const { state, dispatch } = useAppState();

  const handleAddList = (text: string) => {
    dispatch({ type: 'ADD_LIST', payload: text });
  };

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column
          text={list.text}
          key={list.id}
          index={i}
          id={list.id}
          tasks={list.tasks}
        />
      ))}
      <AddNewItem
        onAdd={handleAddList}
        toggleButtonText="+ Add another list"
      />
    </AppContainer>
  );
};

export default App;
