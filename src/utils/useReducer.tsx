import { useReducer } from "react";

type State = {
  name: string;
  email: string;
}

const initialState: State =  {
  name: '',
  email: ''
}
type Action =
  | { type: 'SET_NAME', payload: string }
  | { type: 'SET_EMAIL', payload: string };

function reducer(state: State, action: Action): State {
  switch(action.type){
    case 'SET_NAME':
    return {...state, name: action.payload};
    case 'SET_EMAIL':
      return {...state, email: action.payload};
    default:
    return state
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <input type="text" value={state.name} onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value})} placeholder="Name"/>
    <input type="text" value={state.email} onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value})} placeholder="Email"/>
    <p>Name: {state.name}</p>
    <p>Email: {state.email}</p>
    </>
  )
}
