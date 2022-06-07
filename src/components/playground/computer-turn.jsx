import styles from './computer-turn.module.css';
import { Item } from './item';
import { WINNER } from 'utils/constants';
import { useEffect, useState } from 'react';

export const ComputerTurn = ({
  playerChoice = '',
  computerChoice = '',
  result = '',
  onRestart = () => {},
}) => {
  const [showComputerChoice, setShowComputerChoice] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const message =
    result === WINNER.PLAYER
      ? 'You win'
      : result === WINNER.COMPUTER
      ? 'You lose'
      : result === WINNER.DRAW
      ? 'Draw'
      : '';

  const delayMs = 300;

  useEffect(() => {
    computerChoice &&
      setTimeout(() => {
        setShowComputerChoice(true);
      }, delayMs);
  }, [computerChoice]);

  useEffect(() => {
    result &&
      showComputerChoice &&
      setTimeout(() => {
        setShowResult(true);
      }, delayMs);
  }, [result, showComputerChoice]);

  return (
    <div className={styles.container}>
      <p className={styles.text1}>You picked</p>
      <div
        className={`${styles.item1} ${
          showResult && result === WINNER.PLAYER ? styles.highlight : ''
        }`}
      >
        <Item type={playerChoice} />
      </div>
      <p className={styles.text2}>The House picked</p>
      <div
        className={`${styles.item2} ${
          showResult && result === WINNER.COMPUTER ? styles.highlight : ''
        }`}
      >
        <Item type={showComputerChoice && computerChoice} />
      </div>
      <div className={styles.result}>
        {showResult && (
          <>
            <p>{message}</p>
            <button onClick={onRestart}>Play again</button>
          </>
        )}
      </div>
    </div>
  );
};
