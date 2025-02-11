import PropTypes from 'prop-types';
import styles from './Notification.module.css';

function Notification({ message }) {
  return <p className={styles.notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
