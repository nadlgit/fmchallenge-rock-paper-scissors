import styles from './computer-turn.module.css';
import { Item } from './item';

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
  return (
    <div className={styles.container}>
      <p className={styles.text1}>You picked</p>
      <div className={`${styles.item1} ${result && styles.highlight}`}>
        <Item type={playerChoice} />
      </div>
      <p className={styles.text2}>The House picked</p>
      <Item className={styles.item2} type={computerChoice} />
      <div className={styles.result}>
        {result && (
          <>
            <p>{result}</p>
            <button onClick={onRestart}>Play again</button>
          </>
        )}
      </div>
    </div>
  );
};
