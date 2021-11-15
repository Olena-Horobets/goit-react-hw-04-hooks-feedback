import s from '../Statistics/Statistics.module.css';

import PropTypes from 'prop-types';

function Statistics({ options, stateData, total = 0 }) {
  return (
    <>
      {options.map(el => {
        return (
          <p key={el} className={s.text}>
            {el.charAt(0).toUpperCase() + el.slice(1)}:{' '}
            <span>{stateData[el]}</span>
          </p>
        );
      })}

      <p className={s.textTotal}>
        Total votes: <span>{total}</span>
      </p>
    </>
  );
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateData: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export { Statistics };
