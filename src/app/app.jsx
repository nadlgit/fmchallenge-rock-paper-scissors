import styles from './app.module.css';
import { ChallengeAttribution } from 'components/challenge-attribution';
import { Header } from 'components/header';
import { Footer } from 'components/footer';
import { Playground } from 'components/playground';
import { useState } from 'react';

export const App = () => {
  const [score, setScore] = useState(0);
  const incrementScore = () => {
    setScore((s) => s + 1);
  };
  const decrementScore = () => {
    setScore((s) => s - 1);
  };

  return (
    <div className={styles.app}>
      <Header score={score} />
      <Playground incrementScore={incrementScore} decrementScore={decrementScore} />
      <Footer />
      <ChallengeAttribution />
    </div>
  );
};
