import styles from './header.module.css';
import Logo from 'assets/images/logo.svg';

export const Header = ({ score = 0 }) => (
  <header className={styles.header}>
    <img className={styles.logo} src={Logo} alt="Rock, Paper, Scissors logo" />
    <section className={styles.score}>
      <h3>Score</h3>
      <p>{score}</p>
    </section>
  </header>
);
