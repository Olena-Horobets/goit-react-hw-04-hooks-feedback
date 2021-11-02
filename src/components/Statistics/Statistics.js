import s from '../Statistics/Statistics.module.css';

import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <>
        <p className={s.text}>Good: {this.props.good}</p>
        <p className={s.text}>Neutral: {this.props.neutral}</p>
        <p className={s.text}>Bad: {this.props.bad}</p>

        <p className={s.text}>Total votes: {this.props.total}</p>
        {/* <p>Percentage of good votes: {this.props.percentage}%</p> */}
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percentage: PropTypes.number,
};

export { Statistics };
