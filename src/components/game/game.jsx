import styles from './game.module.css';
import { PlayerChoice } from './player-choice';

export const Game = () => {
  return (
    <main className={styles.game}>
      <PlayerChoice />
    </main>
  );
};
