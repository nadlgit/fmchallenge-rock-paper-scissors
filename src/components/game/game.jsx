import styles from './game.module.css';
import { PlayerTurn } from './player-turn';

export const Game = () => {
  return (
    <main className={styles.game}>
      <PlayerTurn />
    </main>
  );
};
