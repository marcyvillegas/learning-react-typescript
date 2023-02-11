import React, { createContext, useReducer } from 'react';

type ModalStateType = typeof initialState;
type ActionType = { type: 'EMIT_OPEN_MODAL' } | { type: 'EMIT_CLOSE_MODAL' } | { type: 'EMIT_CHANGE_USER' }
type ModalContextProviderPropType = {
  children: React.ReactNode;
}

const initialState = {
  isModalOpen: false,
  user: 'Original'
}

const initialModalContext = {
  state: initialState,
  dispatch: () => { }
}

// Context <- this is used in the here: <NAME_OF_CONTEXT.Provider value={ }> 
export const ModalContext = createContext<{
  state: ModalStateType,
  dispatch: React.Dispatch<ActionType>
}>(initialModalContext);

function ModalContextProvider({ children }: ModalContextProviderPropType) {

  // useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state: ModalStateType, action: ActionType) {

    switch (action.type) {
      case 'EMIT_OPEN_MODAL':
        return {
          ...state,
          isModalOpen: true
        }

      case 'EMIT_CLOSE_MODAL':
        return {
          ...state,
          isModalOpen: false
        }

      case 'EMIT_CHANGE_USER':
        return {
          ...state,
          user: 'New'
        }

      default:
        return state;
    }
  }

  return (
    <ModalContext.Provider value={{ state, dispatch }}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalContextProvider;
