import React from 'react';
import { useStore } from './store';

const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const store = useStore();

  return (
    <StoreContext.Provider value={store}>
      {children}
    </StoreContext.Provider>
  );
};