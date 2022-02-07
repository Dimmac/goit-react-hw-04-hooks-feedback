import React from 'react';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Section from './components/Section/Section';
import Notification from './components/Notification/Notification';
import { SectionButtonStyled, StatisticTitle } from './App.styled';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementFeedback = position => {
    this.setState(prevState => {
      return { [position]: prevState[position] + 1 };
    });
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return good
      ? `${Math.round((good * 100) / this.countTotalFeedback()) + '%'}`
      : `0`;
  };
  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Section title="Please leave feedback">
        <SectionButtonStyled>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleIncrementFeedback}
          />
        </SectionButtonStyled>
        <StatisticTitle>Statistics</StatisticTitle>
        {good === 0 && neutral === 0 && bad === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    );
  }
}
export default Feedback;
