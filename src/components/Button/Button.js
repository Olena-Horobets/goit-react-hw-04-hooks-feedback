import s from '../Button/Button.module.css';

import PropTypes from 'prop-types';

import emoji from 'emoji-db.json';

function Button({ name, onClick }) {
  return (
    <button type="button" name={name} className={s.option} onClick={onClick}>
      <span className={s.emoji}>{emoji[name]}</span> {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export { Button };
