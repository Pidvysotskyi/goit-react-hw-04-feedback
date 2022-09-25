import { Container } from './App.styled';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodIncrement = () => {
    this.setState(currentState => ({
      good: currentState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState(currentState => ({
      neutral: currentState.neutral + 1,
    }));
  };
  badIncrement = () => {
    this.setState(currentState => ({
      bad: currentState.bad + 1,
    }));
  };
  countTotalFeedback = () => {};

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = good + neutral + bad;

    const PositiveFeedbackPercentage = Number.parseInt(
      totalFeedback > 0 ? (good / totalFeedback) * 100 : 0
    );

    return (
      <Container>
        <h1>Please leave the feedback</h1>
        <div>
          <button type="button" onClick={this.goodIncrement}>
            Good
          </button>
          <button type="button" onClick={this.neutralIncrement}>
            Neutral
          </button>
          <button type="button" onClick={this.badIncrement}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good > 0 && good}</p>
          <p>Neutral: {neutral > 0 && neutral}</p>
          <p>Bad: {bad > 0 && bad}</p>
          <p>Total: {totalFeedback > 0 && totalFeedback}</p>
          <p>
            Positive feedbacks:
            {PositiveFeedbackPercentage > 0 && `${PositiveFeedbackPercentage}%`}
          </p>
        </div>
      </Container>
    );
  }
}
