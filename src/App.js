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

  onBtnClick = e => {
    console.log(e.target);
    this.setState(prevState => {
      return { [e.target.name]: (prevState[e.target.name] += 1) };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div className={s.container}>
        <h1 className="hidden">Cafe Espresso review page</h1>
        <div className={s.wrapper}>
          <Section title="Please, leave your vote" class="FeedbackOptions">
            <FeedbackOptions
              options={options}
              optionHandler={this.onBtnClick}
            />
          </Section>

          <Section title="Statistics" class="Statistics">
            {this.countTotalFeedback() ? (
              <Statistics
                options={options}
                stateData={this.state}
                total={this.countTotalFeedback()}
              />
            ) : (
              <Notification message="No feedback is given yet" />
            )}
          </Section>
        </div>
        <Diagram
          options={options}
          stateData={this.state}
          total={this.countTotalFeedback()}
        />
      </div>
    );
  }
}

export { App };
