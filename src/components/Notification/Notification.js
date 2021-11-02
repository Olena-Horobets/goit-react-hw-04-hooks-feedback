import s from '../Notification/Notification.module.css';

import PropTypes from 'prop-types';
import { Component } from 'react';

class Notification extends Component {
  render() {
    return <p className={s.notification}>{this.props.message}</p>;
  }
}

Notification.propTypes = {
  message: PropTypes.string,
};

export { Notification };
