import s from '../Diagram/Diagram.module.css';
import emoji from 'emoji-db.json';

import PropTypes from 'prop-types';

function Diagram({ options, stateData, total = 0 }) {
  const countFeedbackPercentage = (total, data, option) => {
    if (total) {
      return `${parseInt((data[option] * 100) / total)}%`;
    }
    return 0;
  };

  return (
    <div className={s.section}>
      <div className={s.diagram}>
        <span className={s.caption}>percentage</span>
        {options.map(el => {
          let percentage = countFeedbackPercentage(total, stateData, el);

          return (
            <div key={el}>
              <div
                className={s[el + 'Stat']}
                style={{ height: [percentage] }}
              ></div>
              <span className={s[el + 'Emoji']}>{emoji[el]}</span>
            </div>
          );
        })}
      </div>
      <p className={s.goodVotesStat}>
        Percentage of good votes:{' '}
        {countFeedbackPercentage(total, stateData, 'good')}
      </p>
    </div>
  );
}

Diagram.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  stateData: PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  }).isRequired,
  total: PropTypes.number.isRequired,
};

export { Diagram };
