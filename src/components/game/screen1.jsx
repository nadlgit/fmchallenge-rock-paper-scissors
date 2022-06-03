import styles from './screen1.module.css';
import { ITEM_TYPES } from 'utils/constants';
import { Item } from './item';

export const Screen1 = () => {
  return (
    <div className={styles.screen}>
      <button>
        <Item type={ITEM_TYPES.PAPER} />
      </button>
      <button>
        <Item type={ITEM_TYPES.SCISSORS} />
      </button>
      <button>
        <Item type={ITEM_TYPES.ROCK} />
      </button>
    </div>
  );
};
