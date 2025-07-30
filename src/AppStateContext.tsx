import { createContext, useContext, useReducer } from "react";
import { v4 as uuid } from 'uuid';
import { findItemIndexById } from "./findItemByIndexId";

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[]
}

export interface AppState {
  lists: List[]
}

type Action =
| { type: 'ADD_LIST', payload: string }
| { type: 'ADD_TASK', payload: { text: string, listId: string } }

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: 'To do',
      tasks: [{ id: 'c0', text: "Generate app scaffold" }]
    },
    {
      id: "1",
      text: 'In Progress',
      tasks: [{ id: 'c1', text: "Learn Typescript" }]
    },
    {
      id: "2",
      text: 'Done',
      tasks: [{ id: 'c2', text: "Begin to use static typing" }]
    }
  ]
}

const appStateReducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [
          ...state.lists,
          {
            id: uuid(),
            text: action.payload,
            tasks: []
          }
        ]
      }
    }

    case 'ADD_TASK': {
      const targetListIndex = findItemIndexById(state.lists, action.payload.listId);
      if (targetListIndex === -1) {
        return state; // List not found, return unchanged state
      }

      return {
        ...state,
        lists: state.lists.map((list, index) =>
          index === targetListIndex
            ? {
                ...list,
                tasks: [
                  ...list.tasks,
                  {
                    id: uuid(),
                    text: action.payload.text
                  }
                ]
              }
            : list
        )
      }
    }

    default: {
      return state;
    }
  }
}

export const AppStateContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<Action>;
} | undefined>(undefined);

export const AppStateProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(appStateReducer, appData);

  return (
    <AppStateContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (context === undefined) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
