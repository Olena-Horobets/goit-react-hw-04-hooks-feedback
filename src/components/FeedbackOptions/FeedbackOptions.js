import s from '../FeedbackOptions/FeedbackOptions.module.css';

import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from 'components/Button/Button';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className={s.feedbackOptions}>
        {this.props.options.map(el => {
          return <Button key={el} name={el} onClick={this.props.optionFn} />;
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionFn: PropTypes.func.isRequired,
};

export { FeedbackOptions };
