import { createContext, useContext, useEffect, useReducer } from 'react';

const FavsStates = createContext();

const InitialFavsState = {
  favs: JSON.parse(localStorage.getItem('fav')) || [],
};

const favsReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'DELETE_FAV':
      return { ...state, favs: action.payload };
    default:
      throw new Error();
  }
};

const FavsContext = ({ children }) => {
  const [favsState, favsDispatch] = useReducer(favsReducer, InitialFavsState);

  useEffect(() => {
    localStorage.setItem('favs', JSON.stringify(favsState.favs));
  }, [favsState.favs]);

  return (
    <FavsStates.Provider value={{ favsState, favsDispatch }}>
      {children}
    </FavsStates.Provider>
  );
};

export default FavsContext;

export const useFavState = () => useContext(FavsStates);
