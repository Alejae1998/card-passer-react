import React, { useContext } from 'react';
import CardList from './CardList';
import { GameContext } from '../context/GameContext.js';

export default function Player({ player, hand }) {
  const { setTo, to } = useContext(GameContext);

  return (
    <div
      className={`player ${to === player ? 'selected-player' : ''}`}
      onClick={() => setTo(player)}
    >
      <p>Player {player}</p>
      <CardList player={player} cards={hand} />
    </div>
  );
}
