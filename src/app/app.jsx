import styles from './app.module.css';
import { ChallengeAttribution } from 'components/challenge-attribution';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

export const App = () => (
  <div className={styles.app}>
    <Header score={12} />
    <Footer />
    <ChallengeAttribution />
  </div>
);
