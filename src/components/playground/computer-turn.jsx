import styles from './computer-turn.module.css';
import { Item } from './item';
import { WINNER } from 'utils/constants';

// const tmpSleep = (ms) => {
//   const date = Date.now();
//   let currentDate = null;
//   do {
//     currentDate = Date.now();
//   } while (currentDate - date < ms);
// };

export const ComputerTurn = ({
  playerChoice = '',
  computerChoice = '',
  result = '',
  onRestart = () => {},
}) => {
  // if (computerChoice) tmpSleep(500);
  // if (result) tmpSleep(500);

  const message =
    result === WINNER.PLAYER
      ? 'You win'
      : result === WINNER.COMPUTER
      ? 'You lose'
      : result === WINNER.DRAW
      ? 'Draw'
      : '';

  return (
    <div className={styles.container}>
      <p className={styles.text1}>You picked</p>
      <div className={`${styles.item1} ${result === WINNER.PLAYER && styles.highlight}`}>
        <Item type={playerChoice} />
      </div>
      <p className={styles.text2}>The House picked</p>
      <div className={`${styles.item2} ${result === WINNER.COMPUTER && styles.highlight}`}>
        <Item type={computerChoice} />
      </div>
      <div className={styles.result}>
        {result && (
          <>
            <p>{message}</p>
            <button onClick={onRestart}>Play again</button>
          </>
        )}
      </div>
    </div>
  );
};
