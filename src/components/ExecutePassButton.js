import React, { useContext } from 'react';
import Card from './Card';
import { GameContext } from '../context/GameContext.js';

export default function ExecutePassButton() {
  const { passCard, setFrom, from, to, selectedCard, setSelectedCard } = useContext(GameContext);
  return (
    <div className="execute-button" onClick={() => passCard(selectedCard)}>
      Pass <Card card={selectedCard} setSelectedCard={setSelectedCard} setFrom={setFrom} /> from{' '}
      {from} to {to}
    </div>
  );
}
