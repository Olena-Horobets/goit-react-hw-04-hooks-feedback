import s from '../Notification/Notification.module.css';
import emoji from 'emoji-db.json';

import PropTypes from 'prop-types';
import { Component } from 'react';

class Notification extends Component {
  render() {
    return (
      <div className={s.notification}>
        <p className={s.message}>{this.props.message}</p>
        <p className={s.emoji}>{emoji['no-feedback']}</p>
      </div>
    );
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export { Notification };
