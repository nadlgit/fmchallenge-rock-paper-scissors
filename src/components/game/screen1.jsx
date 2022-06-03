import styles from './screen1.module.css';
import { ITEM_TYPES } from 'utils/constants';
import { Item } from './item';

export const Screen1 = () => {
  return (
    <div className={styles.screen}>
      <button className={styles.paper}>
        <Item type={ITEM_TYPES.PAPER} />
      </button>
      <button className={styles.scissors}>
        <Item type={ITEM_TYPES.SCISSORS} />
      </button>
      <button className={styles.rock}>
        <Item type={ITEM_TYPES.ROCK} />
      </button>
    </div>
  );
};
