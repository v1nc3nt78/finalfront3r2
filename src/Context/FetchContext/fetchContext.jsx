import axios from 'axios';
import { useReducer } from 'react';
import { createContext, useContext, useEffect } from 'react';

const CardStates = createContext();

const InitialCardState = {
  cardList: [],
  card: {},
};

const cardReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { cardList: action.payload, card: state.card };
    case 'GET_CARD':
      return { cardList: state.cardList, card: action.payload };
    default:
      throw new Error();
  }
};

const FetchContext = ({ children }) => {
  const [cardState, cardDispatch] = useReducer(cardReducer, InitialCardState);
  const urlList = 'https://jsonplaceholder.typicode.com/users';

  useEffect(() => {
    axios(urlList)
      .then((res) => cardDispatch({ type: 'GET_LIST', payload: res.data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardStates.Provider
      value={{
        cardState,
        cardDispatch,
      }}
    >
      {children}
    </CardStates.Provider>
  );
};
export default FetchContext;

export const useCardStates = () => useContext(CardStates);
