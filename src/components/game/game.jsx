import styles from './game.module.css';
import { ITEM_TYPES } from 'utils/constants';
import { Item } from './item';

export const Game = () => {
  return (
    <main className={styles.game}>
      <Item type={ITEM_TYPES.PAPER} />
      <Item type={ITEM_TYPES.SCISSORS} />
      <Item type={ITEM_TYPES.ROCK} />
      <Item />
    </main>
  );
};
