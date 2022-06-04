import styles from './player-turn.module.css';
import { CHOICES } from 'utils/constants';
import { Item } from './item';

export const PlayerTurn = ({ onChoice = () => {} }) => {
  return (
    <div className={styles.container}>
      <button className={styles.paper} onClick={() => onChoice(CHOICES.PAPER)}>
        <Item type={CHOICES.PAPER} />
      </button>
      <button className={styles.scissors} onClick={() => onChoice(CHOICES.SCISSORS)}>
        <Item type={CHOICES.SCISSORS} />
      </button>
      <button className={styles.rock} onClick={() => onChoice(CHOICES.ROCK)}>
        <Item type={CHOICES.ROCK} />
      </button>
    </div>
  );
};
