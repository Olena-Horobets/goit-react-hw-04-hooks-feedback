import s from '../FeedbackOptions/FeedbackOptions.module.css';

import PropTypes from 'prop-types';
import { Component } from 'react';
import { Button } from 'components/Button/Button';

class FeedbackOptions extends Component {
  render() {
    return (
      <div className={s.feedbackOptions}>
        <Button name="good" onClick={this.props.onGoodBtnClick} />
        <Button name="neutral" onClick={this.props.onNeutralBtnClick} />
        <Button name="bad" onClick={this.props.onBadBtnClick} />
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onGoodBtnClick: PropTypes.func.isRequired,
  onNeutralBtnClick: PropTypes.func.isRequired,
  onBadBtnClick: PropTypes.func.isRequired,
};

export { FeedbackOptions };
