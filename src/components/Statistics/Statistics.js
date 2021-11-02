import s from '../Statistics/Statistics.module.css';
import { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <div className={s.statistics}>
        <p>Good: {this.props.good}</p>
        <p>Neutral: {this.props.neutral}</p>
        <p>Bad: {this.props.bad}</p>
        <p>Percentage of good votes: %</p>
        <p>Total votes: {this.props.total}</p>
      </div>
    );
  }
}

export { Statistics };
