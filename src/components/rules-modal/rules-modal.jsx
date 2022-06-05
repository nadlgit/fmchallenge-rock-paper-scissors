import styles from './rules-modal.module.css';
import Rules from 'assets/images/image-rules.svg';
import Close from 'assets/images/icon-close.svg';

export const RulesModal = ({ show = false, onClose = () => {} }) => {
  const handleOverlayClose = (e) => {
    if (e.target.className === styles.overlay) {
      onClose();
    }
  };
  return (
    show && (
      <div className={styles.overlay} onClick={handleOverlayClose}>
        <div role="dialog" className={styles.modal}>
          <h2>Rules</h2>
          <img src={Rules} alt="rules schema" />
          <button onClick={onClose}>
            <img src={Close} alt="close modal" />
          </button>
        </div>
      </div>
    )
  );
};
