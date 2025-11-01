import { createContext } from 'react';

/**
 * Context with data fetched from API
 */
const AppDataContext = createContext({
  appData: null,
  setAppData: () => {},
});

export default AppDataContext;
