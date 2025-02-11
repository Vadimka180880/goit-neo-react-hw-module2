import PropTypes from 'prop-types';
import styles from './Options.module.css';

function Options({ onLeaveFeedback, onReset }) {
  return (
    <div className={styles.options}>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

Options.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Options;
