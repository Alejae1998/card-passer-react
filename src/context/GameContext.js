import { createContext, useState } from 'react';
import initialCards from '../cards-data.js';

const GameContext = createContext();

const GameProvider = ({ children }) => {
  //states
  const [deck, setDeck] = useState(initialCards);
  const [playerOneHand, setPlayerOneHand] = useState([]);
  const [selectedCard, setSelectedCard] = useState();
  const [playerTwoHand, setPlayerTwoHand] = useState([]);
  const [playerThreeHand, setPlayerThreeHand] = useState([]);
  const [from, setFrom] = useState('deck');
  const [to, setTo] = useState(1);

  return (
    <GameContext.provider
      value={{
        deck,
        setDeck,
        selectedCard,
        setSelectedCard,
        playerTwoHand,
        playerOneHand,
        playerThreeHand,
        to,
        setTo,
      }}
    >
      {children}
    </GameContext.provider>
  );
};
export { GameContext, GameProvider };
