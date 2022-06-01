import styles from './challenge-attribution.module.css';

// prettier-ignore
export const ChallengeAttribution = () => (
  <div className={styles.attribution}>
    {// eslint-disable-next-line react/jsx-no-target-blank
    }Challenge by <a href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH" target="_blank">Frontend Mentor</a>
    {// eslint-disable-next-line jsx-a11y/anchor-is-valid
    }. Coded by <a href="https://github.com/nadlgit">Nadine</a>.
  </div>
);
