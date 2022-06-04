import styles from './game.module.css';
import { PlayerTurn } from './player-turn';
import { ComputerTurn } from './computer-turn';
import { useState } from 'react';

export const Game = ({ incrementScore = () => {}, decrementScore = () => {} }) => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const restart = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  };

  return (
    <main className={styles.game}>
      {playerChoice ? (
        <ComputerTurn
          playerChoice={playerChoice}
          computerChoice={computerChoice}
          result={result}
          onRestart={restart}
        />
      ) : (
        <PlayerTurn onChoice={setPlayerChoice} />
      )}
    </main>
  );
};
