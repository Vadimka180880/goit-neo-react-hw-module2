import { useState, useEffect } from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';
import './styles/index.css';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    if (savedFeedback) {
      console.log("Loaded feedback from localStorage:", JSON.parse(savedFeedback));
    }
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad || 0;

  const positivePercentage = totalFeedback > 0
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  const updateFeedback = (type) => {
    setFeedback((prevState) => {
      const updatedFeedback = {
        ...prevState,
        [type]: prevState[type] + 1,
      };
      console.log("Updated feedback:", updatedFeedback);
      return updatedFeedback;
    });
  };

  const resetFeedback = () => {
    const resetState = { good: 0, neutral: 0, bad: 0 };
    console.log("Reset feedback to:", resetState);
    setFeedback(resetState);
  };

  useEffect(() => {
    console.log("Saving feedback to localStorage:", feedback);
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className="container">
      <Description />
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback yet" />
      )}
    </div>
  );
}

export default App;
