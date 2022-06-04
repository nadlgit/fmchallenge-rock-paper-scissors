import styles from './playground.module.css';
import { PlayerTurn } from './player-turn';
import { ComputerTurn } from './computer-turn';
import { generateComputerChoice, processWinner } from 'logic/game';
import { useEffect, useState } from 'react';

export const Playground = ({ incrementScore = () => {}, decrementScore = () => {} }) => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const restart = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
  };
  const delay = 1000;

  useEffect(() => {
    if (playerChoice) {
      setTimeout(() => {
        setComputerChoice(generateComputerChoice());
      }, delay);
    }
  }, [playerChoice]);

  useEffect(() => {
    if (playerChoice && computerChoice) {
      setTimeout(() => {
        const res = processWinner(playerChoice, computerChoice);
        switch (res) {
          case 'PLAYER':
            setResult('You win');
            incrementScore();
            break;
          case 'COMPUTER':
            setResult('You lose');
            decrementScore();
            break;
          case 'TIE':
            setResult('Tie');
            break;
          default:
        }
      }, delay);
    }
  }, [playerChoice, computerChoice, incrementScore, decrementScore]);

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
