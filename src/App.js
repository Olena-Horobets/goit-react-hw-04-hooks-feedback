import s from 'App.module.css';

import { Component } from 'react';

import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Diagram } from 'components/Diagram/Diagram';
import { Notification } from 'components/Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGoodBtnClick = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutralBtnClick = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onBadBtnClick = () => {
    this.setState(prevState => {
      return { bad: (prevState.bad += 1) };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total) {
      return parseInt((this.state.good * 100) / total);
    }
    return 0;
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className="hidden">Cafe Espresso review page</h1>
        <div className={s.wrapper}>
          <Section title="Please, leave your vote" class="FeedbackOptions">
            <FeedbackOptions
              onGoodBtnClick={this.onGoodBtnClick}
              onNeutralBtnClick={this.onNeutralBtnClick}
              onBadBtnClick={this.onBadBtnClick}
            />
          </Section>

          <Section title="Statistics" class="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={this.countTotalFeedback()}
                percentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="No feedback given yet" />
            )}
          </Section>
        </div>
        <Diagram />
      </div>
    );
  }
}

export { App };
