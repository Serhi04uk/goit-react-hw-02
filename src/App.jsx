import "./App.css";

import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    if (window.localStorage.getItem("key") !== null) {
      return JSON.parse(window.localStorage.getItem("key"));
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round(
    ((feedback.good + feedback.neutral) / totalFeedback) * 100
  );
  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      setFeedback({
        good: feedback.good + 1,
        neutral: feedback.neutral,
        bad: feedback.bad,
      });
    } else if (feedbackType === "neutral") {
      setFeedback({
        good: feedback.good,
        neutral: feedback.neutral + 1,
        bad: feedback.bad,
      });
    } else if (feedbackType === "bad") {
      setFeedback({
        good: feedback.good,
        neutral: feedback.neutral,
        bad: feedback.bad + 1,
      });
    } else if (feedbackType === "reset") {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  return (
    <>
      <Description></Description>
      <Options total={totalFeedback} updateFeedback={updateFeedback}></Options>
      {totalFeedback === 0 && <Notification></Notification>}
      {totalFeedback > 0 && (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        ></Feedback>
      )}
    </>
  );
}

export default App;
