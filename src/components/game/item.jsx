import styles from './item.module.css';
import { ITEM_TYPES } from 'utils/constants';
import IconRock from './icon-rock.svg';
import IconPaper from './icon-paper.svg';
import IconScissors from './icon-scissors.svg';

export const Item = ({ type = '', disabled = false, onClick = () => {} }) => {
  let imgSrc;
  let imgAlt;
  let specificClass;
  switch (type) {
    case ITEM_TYPES.ROCK:
      imgSrc = IconRock;
      imgAlt = 'rock icon';
      specificClass = styles.rock;
      break;
    case ITEM_TYPES.PAPER:
      imgSrc = IconPaper;
      imgAlt = 'paper icon';
      specificClass = styles.paper;
      break;
    case ITEM_TYPES.SCISSORS:
      imgSrc = IconScissors;
      imgAlt = 'scissors icon';
      specificClass = styles.scissors;
      break;
    default:
      return (
        <div className={styles.item}>
          <div className={`${styles.content} ${styles.empty}`}></div>
        </div>
      );
  }

  return (
    <button className={`${styles.item} ${specificClass}`} disabled={disabled} onClick={onClick}>
      <div className={`${styles.content} ${styles.imgwrapper}`}>
        <img className={styles.img} src={imgSrc} alt={imgAlt} />
      </div>
    </button>
  );
};
