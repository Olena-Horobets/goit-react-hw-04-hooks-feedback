import s from '../Statistics/Statistics.module.css';

import PropTypes from 'prop-types';
import { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <>
        {this.props.options.map(el => {
          return (
            <p key={el} className={s.text}>
              {el.charAt(0).toUpperCase() + el.slice(1)}:{' '}
              <span>{this.props.stateData[el]}</span>
            </p>
          );
        })}

        <p className={s.textTotal}>
          Total votes: <span>{this.props.total}</span>
        </p>
      </>
    );
  }
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
