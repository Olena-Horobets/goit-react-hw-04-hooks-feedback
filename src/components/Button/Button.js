import s from '../Button/Button.module.css';

import PropTypes from 'prop-types';
import { Component } from 'react';

import emoji from 'emoji-db.json';

class Button extends Component {
  render() {
    const { name, onClick } = this.props;

    return (
      <button type="button" name={name} className={s.option} onClick={onClick}>
        {emoji[name]} {name}
      </button>
    );
  }
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Button };
