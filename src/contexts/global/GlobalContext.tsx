import React, { useContext, useReducer } from 'react';
import reducer from './globalReducer';

const initialState = {};

const GlobalContext = React.createContext(initialState);

// This context provider is passed to any component requiring the context
const GlobalContextProvider = ({ children }: any) => {
  // use reducer for dispatch
  const [state, dispatch] = useReducer(reducer, initialState);

  const setFoobarFoo = (foo: any) => {
    dispatch({ type: 'RUN_FOO', foo });
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        setFoobarFoo,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

// make sure to use
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContext, GlobalContextProvider };
