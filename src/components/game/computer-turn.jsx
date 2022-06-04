import styles from './computer-turn.module.css';
import { Item } from './item';

export const ComputerTurn = ({
  playerChoice = '',
  computerChoice = '',
  result = '',
  onRestart = () => {},
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.text1}>You picked</p>
      <Item className={styles.item1} type={playerChoice} />
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
