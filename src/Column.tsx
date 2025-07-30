import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";
import { Card } from "./Card";

interface ColumnProps {
  text?: string;
  index: number;
  id: string;
  tasks: Array<{ id: string; text: string }>;
}

export const Column = ({
  text,
  index,
  id,
  tasks,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  const { dispatch } = useAppState();

  const handleAddTask = (taskText: string) => {
    dispatch({
      type: 'ADD_TASK',
      payload: { text: taskText, listId: id }
    });
  };

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {tasks.map(task => (
        <Card text={task.text} key={task.id} />
      ))}
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={handleAddTask}
        dark
      />
    </ColumnContainer>
  );
};
