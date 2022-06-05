import styles from './footer.module.css';
import { RulesModal } from 'components/rules-modal';
import { useState } from 'react';

export const Footer = () => {
  const [showRules, setShowRules] = useState(false);
  return (
    <>
      <footer className={styles.footer}>
        <button onClick={() => setShowRules(true)}>Rules</button>
      </footer>
      <RulesModal show={showRules} onClose={() => setShowRules(false)} />
    </>
  );
};
