import { Component } from 'react';

import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Statistics } from './components/Statistics/Statistics';

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

  render() {
    return (
      <div className="App">
        <Section title="Please, leave your vote">
          <FeedbackOptions
            onGoodBtnClick={this.onGoodBtnClick}
            onNeutralBtnClick={this.onNeutralBtnClick}
            onBadBtnClick={this.onBadBtnClick}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
          />
        </Section>
      </div>
    );
  }
}

export { App };
