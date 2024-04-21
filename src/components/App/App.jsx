import { useState, useEffect } from "react";
import Notification from "../Notification/Notification.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import "./App.jsx";

export default function App() {
  const feedbackCounts = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return feedbackCounts;
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback(feedbackCounts);
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const hasFeedback = totalFeedback > 0;
  const positiveFeedbackPercentage = totalFeedback
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

  return (
    <>
      <div>
        <Description />
        <Options
          onUpdateFeedback={updateFeedback}
          onResetFeedback={resetFeedback}
        />
        {!hasFeedback ? (
          <Notification />
        ) : (
          <Feedback
            feedback={feedback}
            totalFeedbackCounts={totalFeedback}
            positiveCounter={positiveFeedbackPercentage}
          />
        )}
      </div>
    </>
  );
}
