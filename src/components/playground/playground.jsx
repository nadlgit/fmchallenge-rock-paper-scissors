import styles from './playground.module.css';
import { PlayerTurn } from './player-turn';
import { ComputerTurn } from './computer-turn';
import { generateComputerChoice, processWinner } from 'logic/game';
import { WINNER } from 'utils/constants';
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

  useEffect(() => {
    if (playerChoice) {
      setComputerChoice(generateComputerChoice());
    }
  }, [playerChoice]);

  useEffect(() => {
    if (playerChoice && computerChoice) {
      const res = processWinner(playerChoice, computerChoice);
      setResult(res);
      res === WINNER.PLAYER && incrementScore();
      res === WINNER.COMPUTER && decrementScore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playerChoice, computerChoice]);

  return (
    <main className={styles.playground}>
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
