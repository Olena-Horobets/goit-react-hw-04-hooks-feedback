import s from '../FeedbackOptions/FeedbackOptions.module.css';

import PropTypes from 'prop-types';
import { Button } from 'components/Button/Button';

function FeedbackOptions({ options, optionHandler }) {
  return (
    <div className={s.feedbackOptions}>
      {options.map(el => {
        return <Button key={el} name={el} onClick={optionHandler} />;
      })}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionHandler: PropTypes.func.isRequired,
};

export { FeedbackOptions };
