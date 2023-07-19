import { FeedbackOption } from './FeedbackOption/FedbackOption';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from './Notofication/Notification';
import { Section } from './Section/Section';
import { useState } from 'react';

export function App() {
  const options = ['Good', 'Neutral', 'Bad'];

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = good + neutral + bad;
  const countPozitivePercentage = Math.round((good * 100) / countTotalFeedback);

  const onLeaveFeedback = option => {
    if (option === 'Good') {
      return setGood(prev => prev + 1);
    } else if (option === 'Neutral') {
      return setNeutral(prev => prev + 1);
    } else {
      return setBad(prev => prev + 1);
    }
  };

  return (
    <Section title="Cafe 'Exspresso'" subTitle="Please,leave feedback">
      <FeedbackOption options={options} onLeaveFeedback={onLeaveFeedback} />

      {countTotalFeedback ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback}
          positivePercentage={countPozitivePercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </Section>
  );
}
