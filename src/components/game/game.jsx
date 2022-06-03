import styles from './game.module.css';
import { Screen1 } from './screen1';

export const Game = () => {
  return (
    <main className={styles.game}>
      <Screen1 />
    </main>
  );
};
