import "./App.css";

import { useState, useEffect } from "react";

import Description from "./components/Description/Description";
import Option from "./components/Options/Options";
import Feedback from "./Feedback/Feedback";

function App() {
  const [change, save] = useState(() => {
    if (window.localStorage.getItem("key") !== null) {
      return JSON.parse(window.localStorage.getItem("key"));
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const kol = change;
  const totalFeedback = kol.good + kol.neutral + kol.bad;
  const procent = Math.round(((kol.good + kol.neutral) / totalFeedback) * 100);
  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(kol));
  }, [kol]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "good") {
      save({
        good: change.good + 1,
        neutral: change.neutral,
        bad: change.bad,
      });
    } else if (feedbackType === "neutral") {
      save({
        good: change.good,
        neutral: change.neutral + 1,
        bad: change.bad,
      });
    } else if (feedbackType === "bad") {
      save({
        good: change.good,
        neutral: change.neutral,
        bad: change.bad + 1,
      });
    } else {
      save({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  return (
    <>
      <Description></Description>
      <Option stayt={kol} updateFeedback={updateFeedback}></Option>
      <Feedback stayt={kol} total={totalFeedback} procent={procent}></Feedback>
    </>
  );
}

export default App;
