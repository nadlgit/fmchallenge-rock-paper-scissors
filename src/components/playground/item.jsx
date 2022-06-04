import styles from './item.module.css';
import { CHOICES } from 'utils/constants';
import IconRock from './icon-rock.svg';
import IconPaper from './icon-paper.svg';
import IconScissors from './icon-scissors.svg';

export const Item = ({ type = '' }) => {
  let imgSrc;
  let imgAlt;
  let specificClass;
  switch (type) {
    case CHOICES.ROCK:
      imgSrc = IconRock;
      imgAlt = 'rock icon';
      specificClass = styles.rock;
      break;
    case CHOICES.PAPER:
      imgSrc = IconPaper;
      imgAlt = 'paper icon';
      specificClass = styles.paper;
      break;
    case CHOICES.SCISSORS:
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
    <div className={`${styles.item} ${specificClass}`}>
      <div className={`${styles.content} ${styles.imgwrapper}`}>
        <img className={styles.img} src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};
