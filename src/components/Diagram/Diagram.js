import s from '../Diagram/Diagram.module.css';
import emoji from 'emoji-db.json';

import { Component } from 'react';
import PropTypes from 'prop-types';

class Diagram extends Component {
  countFeedbackPercentage = (total, data, option) => {
    if (total) {
      return `${parseInt((data[option] * 100) / total)}%`;
    }
    return 0;
  };

  render() {
    return (
      <div className={s.section}>
        <div className={s.diagram}>
          <span className={s.caption}>percentage</span>
          {this.props.options.map(el => {
            let percentage = this.countFeedbackPercentage(
              this.props.total,
              this.props.stateData,
              el,
            );

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
          {this.countFeedbackPercentage(
            this.props.total,
            this.props.stateData,
            'good',
          )}
        </p>
      </div>
    );
  }
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
